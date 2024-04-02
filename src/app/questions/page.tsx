"use client";
import React, { useEffect, useState, CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useRecoilValue } from "recoil";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";
type SelectedOptionsType = {
  [key: string]: string;
};
import { useToast } from "@/components/ui/use-toast";
import { emailSelectorState, idSelectorState } from "../state/state";

type Question = {
  difficulty: string;
  options: string[];
  question_body: string;
  question_id: string;
  tag: string;
};

function page() {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const { toast } = useToast();
  const router = useRouter();
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const email = useRecoilValue(emailSelectorState);
  const id = useRecoilValue(idSelectorState);
  useEffect(() => {
    if (email == "") {
      router.push("/");
    }
  }, []);
  async function getQS() {
    const res = await axios.post(
      "http://127.0.0.1:5000/questions/get-questions",
      {
        user_id: id,
      }
    );
    const data = await res.data;
    console.log(data);
    setQuestions(data);
  }
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    getQS();
  }, []);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>(
    {}
  );

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleSelectOption = (questionId: any, option: any) => {
    setSelectedOptions((prev) => ({ ...prev, [questionId]: option }));
  };
  useEffect(() => {
    const allAnswered = questions.every(
      //@ts-ignore
      (question) => selectedOptions[question.id]
    );
    setIsSubmitEnabled(allAnswered);
  }, [selectedOptions, questions]);

  const handleSubmit = async () => {
    const answersToSend = Object.entries(selectedOptions).map(
      ([questionId, answer]) => ({
        questionID: questionId,
        selectedOption: answer,
        tags: [],
      })
    );
    const finalDataSent = {
      userID: id,
      responses: answersToSend,
    };
    try {
      console.log(finalDataSent);
      /*
      const response = await axios.post(
        "http://127.0.0.1:5000/submissions/submit-response",
        finalDataSent
      );
      router.push(`/student_dashboard/${email}`);
      */
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      alert("your time is up!");
      //send data to backend
      router.push(`/student_dashboard/${email}`);
    }
  }, [seconds]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  return (
    <>
      <div className="w-screen h-screen justify-center items-center flex">
        <div className="absolute top-5 right-10 flex items-center">
          <div className="mr-5 px-2 py-1 border-2 rounded-xl">
            time: {seconds}
          </div>
          <h1 className="text-lg tracking-tight lg:text-xl ml-5">
            powered by <span className="text-green-600">Sequio.ai</span>
          </h1>
        </div>
        <div className="w-full h-full m-10 rounded-xl">
          {questions.map((question, index) => (
            <div
              key={index}
              className="mb-5 overflow-auto mr-5 ml-5 mt-16 border-2 rounded-xl border-green-600"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="mb-2 text-xl">
                    {question.question_id}
                  </CardTitle>
                  <CardDescription className="">
                    {question.question_body}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`flex justify-between`}>
                    <div>
                      {question.options.map((option, index) => (
                        <Button
                          key={index}
                          className={`m-2 ${
                            selectedOptions[question.question_id] === option
                              ? "bg-blue-500 text-white hover:bg-green-600"
                              : "bg-black hover:bg-green-600"
                          }`}
                          onClick={() =>
                            handleSelectOption(question.question_id, option)
                          }
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                    <div
                      className={`hidden md:inline-block border-2 p-3 rounded-lg h-full ${
                        question.difficulty == "Easy"
                          ? "text-orange-500"
                          : "text-blue-500"
                      }`}
                    >
                      {" "}
                      {question.difficulty}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
          <div className="flex justify-center w-full">
            <Button className="w-full mb-10" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
