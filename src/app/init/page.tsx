"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";
import { emailSelectorState, idSelectorState } from "@/app/state/state";

function page() {
  const router = useRouter();
  const email = useRecoilValue(emailSelectorState);
  useEffect(() => {
    if (email == "") {
      router.push("/");
    }
  }, []);
  return (
    <div className="bg-white flex h-screen w-screen items-center justify-center flex-col dark:bg-white bg-ehite dark:bg-dot-white/[0.2] bg-dot-black/[0.2] ">
      <h1 className="scroll-m-20 md:text-4xl font-extrabold tracking-tight lg:text-5xl mr-10 mb-10 text-4xl">
        {`hello `} <span className="text-blue-500">{`${email} 👋`}</span>
      </h1>
      <div className="flex -ml-10">
        <Button
          className="w-36 h-16 text-xl rounded-3xl"
          onClick={() => {
            router.push("/questions");
          }}
        >
          Start Quiz
        </Button>
        <Button
          className="w-36 h-16 text-xl ml-5 rounded-3xl"
          onClick={() => {
            router.push(`/student_dashboard/${email}`);
          }}
        >
          Dashboard
        </Button>
      </div>
    </div>
  );
}

export default page;
