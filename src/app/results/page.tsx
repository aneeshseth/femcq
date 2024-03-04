import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

function page() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-5 mt-10">
        Results Dashboard
      </h1>
      <p className="leading-7 [&:not(:first-child)] text-slate-400 ml-5 mt-2">
        represents the % of correct answers each student has across all tests.
      </p>
      <div className="space-y-8 m-10 border-2 p-5 rounded-lg">
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
          </div>
          <div className="ml-auto font-medium">75%</div>
        </div>
        <div className="flex items-center ">
          <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
            <AvatarImage src="/avatars/02.png" alt="Avatar" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Jackson Lee</p>
          </div>
          <div className="ml-auto font-medium">39.2%</div>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/03.png" alt="Avatar" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
          </div>
          <div className="ml-auto font-medium">99%</div>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/04.png" alt="Avatar" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">William Kim</p>
          </div>
          <div className="ml-auto font-medium">92%</div>
        </div>
      </div>
    </div>
  );
}

export default page;
