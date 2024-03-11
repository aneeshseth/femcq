"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/Spotlight";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function practiceExamEnter() {
    if (email != "" && email == "sharad.natraj@sjsu.edu") {
      router.push("/init");
      return;
    }
    if (email != "" && email == "professor@sjsu.edu") {
      router.push("/prof_dashboard");
    }
    alert("please enter email!");
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-black bg-opacity-96 antialiased">
      <Spotlight className="-top-40 left-0 md:left-60 absolute" fill="white" />
      <div className="p-4 max-w-7xl z-10 w-full pt-20 text-center text-white -mt-7">
        <h1 className="md:text-8xl text-6xl lg:text-8xl font-bold">
          Engineering Mgmt.
        </h1>
        <h2 className="md:text-2xl text-xl lg:text-2xl font-bold mt-5">
          exam <span className="text-blue-500">practice.</span>
        </h2>

        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={10}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div style={{ zIndex: 20, position: "relative" }}>
          <div className="flex justify-center">
            <Input
              placeholder="Email"
              className="max-w-64 mt-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              className="max-w-64 mt-5 ml-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            variant={"link"}
            className="text-white mt-5 text-lg underline"
            onClick={practiceExamEnter}
          >
            start practicing.
          </Button>
        </div>
      </div>
    </div>
  );
}
