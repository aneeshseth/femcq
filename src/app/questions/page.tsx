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

function Page() {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");
  const email = useRecoilValue(emailSelectorState);
  const id = useRecoilValue(idSelectorState);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>(
    {}
  );
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (email === "") {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    const allAnswered = questions.every(
      (question) => selectedOptions[question.question_id]
    );
    setIsSubmitEnabled(allAnswered);
  }, [selectedOptions, questions]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      alert("Your time is up!");
      router.push(`/student_dashboard/${email}`);
    }
  }, [seconds]);

  async function getQuestions() {
    try {
      const res = await axios.post(
        "https://pmpcert.uc.r.appspot.com/questions/get-questions",
        { user_id: id }
      );
      const data = res.data;
      setQuestions(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  }

  const handleSelectOption = (questionId: string, option: string) => {
    setSelectedOptions((prev) => ({ ...prev, [questionId]: option }));
  };

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
      const response = await axios.post(
        "https://pmpcert.uc.r.appspot.com/submissions/submit-response",
        finalDataSent
      );
      router.push(`/student_dashboard/${email}`);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

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
    <div className="w-screen h-screen flex flex-col items-center dark:bg-white bg-ehite dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="absolute top-5 right-10 flex items-center">
        <div className="mr-5 px-2 py-1 border-2 rounded-xl">
          Time: {seconds}
        </div>
        <h1 className="text-lg tracking-tight lg:text-xl ml-5">
          Powered by <span className="text-green-600">Sequio.ai</span>
        </h1>
      </div>
      <div className="w-full max-w-screen-md m-10 mt-24">
        {questions.map((question, index) => (
          <div key={index} className="mb-5 w-full">
            <Card>
              <CardHeader>
                <CardTitle className="mb-2 text-xl">{index + 1}</CardTitle>
                <CardDescription>{question.question_body}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col">
                  {question.options.map((option, index) => (
                    <Button
                      key={index}
                      className={`my-2 ${
                        selectedOptions[question.question_id] === option
                          ? "bg-blue-500 text-white hover:bg-green-600"
                          : "bg-slate-600 hover:bg-green-600"
                      }`}
                      onClick={() =>
                        handleSelectOption(question.question_id, option)
                      }
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
        <div className="flex justify-center">
          <Button
            className="w-full mb-10"
            onClick={handleSubmit}
            disabled={!isSubmitEnabled}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
