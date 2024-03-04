"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { emailCurrentState } from "../state/state";
import { useRouter } from "next/navigation";

function page() {
  const currentLoggedInState = useRecoilValue(emailCurrentState);
  const router = useRouter();
  useEffect(() => {
    if (currentLoggedInState.email == "") {
      // router.push("/");
    }
  }, []);
  return (
    <div className="bg-black flex h-screen w-screen items-center justify-center flex-col">
      <h1 className="scroll-m-20 md:text-4xl font-extrabold tracking-tight lg:text-5xl mr-10 mb-10 text-lg">
        {`hello ${currentLoggedInState.email.toLowerCase()} `}{" "}
        <span className="text-blue-500">{`sharad.nataraj@sjsu.edu  👋`}</span>
      </h1>
      <Button
        className="w-36 h-20 text-xl"
        onClick={() => {
          router.push("/questions");
        }}
      >
        Start Quiz
      </Button>
    </div>
  );
}

export default page;
