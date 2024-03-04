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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRecoilValue } from "recoil";
import { emailCurrentState } from "../state/state";
import { redirect } from "next/navigation";
type SelectedOptionsType = {
  [key: string]: string;
};
function page() {
  const currQuestions = [
    {
      id: "1",
      question: "Who is the president of America?",
      options: ["Donald Trump", "Barack Obama", "Joe Biden", "George Bush"],
      answer: "Donald Trump",
    },
    {
      id: "2",
      question: "Who is the president of America?",
      options: ["Donald Trump", "Barack Obama", "Joe Biden", "George Bush"],
      answer: "Joe Biden",
    },
  ];
  const [questions, setQuestions] = useState<any>([]);
  const [displayTestName, setDisplayTestName] = useState("Chapter 1");
  useEffect(() => {
    setQuestions(currQuestions);
  }, []);
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>(
    {}
  );
  const currentLoggedInState = useRecoilValue(emailCurrentState);

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [testName, setTestName] = useState("");
  const [newQ, setNewQ] = useState("");
  const [newAns, setNewAns] = useState("");
  const [op1, setOp1] = useState("");
  const [op2, setOp2] = useState("");
  const [op3, setOp3] = useState("");
  const [op4, setOp4] = useState("");
  const [studentE, setStudentE] = useState("");
  async function addQuestion() {
    await axios.post("");
  }
  const handleSelectOption = (questionId: any, option: any) => {
    setSelectedOptions((prev) => ({ ...prev, [questionId]: option }));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    /*
    if (
      currentLoggedInState.email == "" ||
      currentLoggedInState.role == "student"
    )
      redirect("/");
      */
  }, []);

  useEffect(() => {
    const allAnswered = questions.every(
      //@ts-ignore
      (question) => selectedOptions[question.id]
    );
    setIsSubmitEnabled(allAnswered);
  }, [selectedOptions, questions]);

  async function handleDelete(id: any) {
    await axios.post("");
  }

  async function handleStudentAddition() {
    await axios.post("");
  }

  async function handleTestAddition() {
    await axios.post("");
  }
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
      <div className="w-screen flex justify-between">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-5 mt-10">
          Questions for {displayTestName}
        </h1>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="mr-5 mt-10">Add Student</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Add student</h4>
                  <p className="text-sm text-muted-foreground">
                    Add the student details below.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">S Email</Label>
                    <Input
                      id="width"
                      defaultValue=""
                      className="col-span-2 h-8"
                      value={studentE}
                      onChange={(e) => setStudentE(e.target.value)}
                    />
                  </div>
                  <div className=" flex justify-center w-full">
                    <Button
                      className="mt-5 w-full"
                      onClick={handleStudentAddition}
                    >
                      Add Student
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="mr-5 mt-10">Create Test</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Add Test</h4>
                  <p className="text-sm text-muted-foreground">
                    Add the Test details below.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Test name</Label>
                    <Input
                      id="width"
                      defaultValue=""
                      className="col-span-2 h-8"
                      value={testName}
                      onChange={(e) => setTestName(e.target.value)}
                    />
                  </div>
                  <div className=" flex justify-center w-full">
                    <Button
                      className="mt-5 w-full"
                      onClick={handleStudentAddition}
                    >
                      Add Student
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="mr-5 mt-10">Add Question</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Add question</h4>
                  <p className="text-sm text-muted-foreground">
                    Add the question details below.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Question</Label>
                    <Input
                      id="width"
                      defaultValue=""
                      className="col-span-2 h-8"
                      value={newQ}
                      onChange={(e) => setNewQ(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Answer</Label>
                    <Input
                      id="maxWidth"
                      defaultValue=""
                      className="col-span-2 h-8"
                      value={newAns}
                      onChange={(e) => setNewAns(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Option 1</Label>
                    <Input
                      id="height"
                      defaultValue=""
                      className="col-span-2 h-8"
                      value={op1}
                      onChange={(e) => setOp1(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxHeight">Option 2</Label>
                    <Input
                      id="maxHeight"
                      defaultValue=""
                      className="col-span-2 h-8"
                      value={op2}
                      onChange={(e) => setOp2(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxHeight">Option 3</Label>
                    <Input
                      id="maxHeight"
                      defaultValue=""
                      className="col-span-2 h-8"
                      value={op3}
                      onChange={(e) => setOp3(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxHeight">Option 4</Label>
                    <Input
                      id="maxHeight"
                      defaultValue=""
                      className="col-span-2 h-8"
                      value={op4}
                      onChange={(e) => setOp4(e.target.value)}
                    />
                  </div>
                  <Button className="mt-5" onClick={addQuestion}>
                    Add Question
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="w-screen h-screen justify-center items-center flex">
        <div className="w-full h-full m-10 rounded-xl">
          {questions.map((question: any, index: number) => (
            <div key={index} className="mb-5 overflow-auto mr-5 ml-5 mt-5">
              <Card>
                <CardHeader>
                  <CardTitle>{question.id}</CardTitle>
                  <CardDescription>{question.question}</CardDescription>
                </CardHeader>
                <CardContent>
                  {question.options.map((option: any, index: any) => (
                    <Button
                      key={index}
                      className={`m-2 ${
                        question.answer === option
                          ? "bg-blue-500 text-white"
                          : "bg-black"
                      }`}
                      onClick={() => handleSelectOption(question.id, option)}
                    >
                      {option}
                    </Button>
                  ))}
                  <Button
                    className="bg-red-500 mt-3"
                    onClick={() => {
                      handleDelete(question.id);
                    }}
                  >
                    delete question.
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default page;

/*
---register:
a backend route that takes in an email and a password, checks if email is a valid email added by professor, if so, adds password and email to db with role = "student".
if email is of the professor himself, then adds password and email to db with role = "prof".
---login:
a backend route that checks if email is present in db or not, and if so, checks password, and returns the user's details with their role of "prof" or "student"
---getquestions:
gets questions of the latest added test (that would be the questions of the test with the highest test id since that would increment by 1 for each test added)
---Test Creation: 
a backend route that takes in the name of a test, checks if a name of that test already exists (testnames should be unique), if not, creates a test named that within the database.
---Questions addition:
a backend route that takes in the testname and adds a question to the test.
---Student addition
a backend route that takes in the student email id and adds their email to the list of users that can access the app
---Delete question
a backend route that takes in the question id and test id and removes that question from that specific test found from the test id
---Validate answers
a backend route that takes in the format below, and checks for each answer from the array, has 2 variables correctAns and wrongAns in the route to keep track of the number of wrong and correct answers. route returns number of correct and wrong answers in json object, and stores total number of correct & answers in the db for that user.
{user email (unique since each sjsu email is unique): "", testName: "", answers: [{questionId: "1", answer: "Donald Trump"}, {questionId: "2", answer: "Barack Obama"}, {questionId: "3", answer: "Joe Biden"}, {questionId: "4", answer: "Donald Trump"}, {questionId: "5", answer: "Joe Biden"}]}
---Admin dashboard
a backend route that gets all the data of the users, ie the number of correct and wrong answers each user has had, which will be displayed on the frontend with their email id as % correct or wtv metric needs to be used.
*/
