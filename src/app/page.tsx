"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  emailSelectorState,
  idSelectorState,
  emailState,
  idState,
} from "@/app/state/state";
import { useRecoilState } from "recoil";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setRegister] = useState(true);
  const router = useRouter();
  const [wsocket, setWS] = useState<WebSocket | null>(null);
  const [id, setId] = useRecoilState(idState);
  const [emailLoggedIn, setEmailLoggedIn] = useRecoilState(emailState);

  async function practiceExamEnter() {
    const response = await axios.post(
      "https://pmpcert.uc.r.appspot.com/auth/login",
      {
        email: email,
        password: password,
      }
    );
    const status = await response.status;
    const data = await response.data;
    if (status.toString() === "200" && data.role === "Student") {
      setId(data.user_id);
      setEmailLoggedIn(data.user_email);
      router.push("/init");
    } else if (status.toString() === "200") {
      router.push("/prof_dashboard");
    }
  }

  return (
    <div>
      <div className="h-full w-full dark:bg-white bg-ehite dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-white[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="antialiased">
          <div className="absolute top-10 flex items-center">
            <h1 className="text-2xl tracking-tight lg:text-3xl ml-5">
              powered by <span className="text-green-600">Sequio.ai</span>
            </h1>
          </div>
          <div className="mt-20"></div>
          <div className="w-screen h-screen flex flex-col lg:flex-row">
            <div className="lg:w-5/12 w-full flex justify-center items-center flex-col mt-20 lg:mt-0">
              <h1 className="md:text-6xl text-5xl lg:text-7xl font-bold ml-5 lg:ml-10">
                PMP Certification.
              </h1>
              <h2 className="md:text-2xl text-xl lg:text-2xl font-bold mt-5 ">
                Ahmad Shaar.
              </h2>
              <div style={{ zIndex: 20, position: "relative" }}>
                <div className="flex justify-center">
                  <Input
                    placeholder="Email"
                    className=" mt-5 max-w-60"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    className="max-w-60 mt-5 ml-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="w-full justify-center items-center flex mt-5">
                  <Button
                    className="mb-10 mt-3 text-lg bg-blue-600 ml-3 hover:bg-blue-400"
                    onClick={() => {
                      practiceExamEnter();
                    }}
                  >
                    Login
                  </Button>
                </div>
                <p className="text-center -mt-5">
                  By logging in, you agree to our{" "}
                  <a
                    href="https://www.adobe.com/privacy/student-policy.html"
                    className="underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.adobe.com/content/dam/cc/en/legal/servicetou/Adobe-EDU-Terms-en_US-20210701.pdf"
                    className="underline"
                  >
                    Terms and Conditions
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="text-center lg:w-7/12 lg:block lg:flex justify-center items-center mr-20 lg:-mt-16 -mt-5 align-middle ">
              <div>
                <img
                  src="https://miro.medium.com/v2/resize:fit:1051/1*YGhV_-FxYrmk5I10pZrsiw.jpeg"
                  className="rounded-xl w-full lg:h-[500px] md:h-[550px] sm:h-[400px] h-[300px] ml-10 mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
