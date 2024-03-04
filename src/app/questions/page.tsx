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
import { emailCurrentState } from "../state/state";
import { useRecoilValue } from "recoil";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";
type SelectedOptionsType = {
  [key: string]: string;
};
import { useToast } from "@/components/ui/use-toast";

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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const questions = [
    {
      id: "1",
      question: "Who is the president of America?",
      options: ["Donald Trump", "Barack Obama", "Joe Biden", "George Bush"],
    },
    {
      id: "2",
      question: "Who is the president of America?",
      options: ["Donald Trump", "Barack Obama", "Joe Biden", "George Bush"],
    },
    {
      id: "3",
      question: "Who is the president of America?",
      options: ["Donald Trump", "Barack Obama", "Joe Biden", "George Bush"],
    },
    {
      id: "4",
      question: "Who is the president of America?",
      options: ["Donald Trump", "Barack Obama", "Joe Biden", "George Bush"],
    },
    {
      id: "5",
      question: "Who is the president of America?",
      options: ["Donald Trump", "Barack Obama", "Joe Biden", "George Bush"],
    },
  ];
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>(
    {}
  );

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleSelectOption = (questionId: any, option: any) => {
    setSelectedOptions((prev) => ({ ...prev, [questionId]: option }));
  };
  const currentLoggedInState = useRecoilValue(emailCurrentState);
  useEffect(() => {
    // if (currentLoggedInState.email == "") redirect("/");
  }, []);
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
        questionId,
        answer,
      })
    );
    const finalDataSent = {
      userId: currentLoggedInState.id,
      answers: answersToSend,
    };
    try {
      const response = await axios.post(
        "/your-backend-endpoint",
        finalDataSent
      );
      console.log("Response from backend:", response.data);
      router.push("/student_dashboard");
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
    <>
      <div className="flex justify-end mt-10 mr-10 mb-5"></div>
      <div className="w-screen h-screen justify-center items-center flex">
        <div className="w-full h-full m-10 rounded-xl">
          {questions.map((question, index) => (
            <div key={index} className="mb-5 overflow-auto mr-5 ml-5 mt-5">
              <Card>
                <CardHeader>
                  <CardTitle>{question.id}</CardTitle>
                  <CardDescription>{question.question}</CardDescription>
                </CardHeader>
                <CardContent>
                  {question.options.map((option, index) => (
                    <Button
                      key={index}
                      className={`m-2 ${
                        selectedOptions[question.id] === option
                          ? "bg-blue-500 text-white"
                          : "bg-black"
                      }`}
                      onClick={() => handleSelectOption(question.id, option)}
                    >
                      {option}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
          <div className="flex justify-center w-full">
            <Button
              className="w-full mb-10"
              disabled={!isSubmitEnabled}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

//ability to create new tests
//performance of each user for a test
