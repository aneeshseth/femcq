"use client";
import { emailSelectorState, idSelectorState } from "@/app/state/state";
import { Button } from "@/components/ui/button";
import { ResponsiveLine } from "@nivo/line";
import { CSSProperties, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Scores {
  message: string;
  response: {
    date: string;
    difficultyScores: { [key: string]: number };
    time: string;
    totalScore: number;
  }[];
}
export default function Component({ params, searchParams }: any) {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  let [loading, setLoading] = useState(true);
  const email = useRecoilValue(emailSelectorState);
  const id = useRecoilValue(idSelectorState);
  const [scores, setScores] = useState<Scores>({ message: "", response: [] });
  async function getScores() {
    console.log(params.id);
    if (!params.id) {
      const res = await axios.get(
        `http://127.0.0.1:5000/submissions/tot_progress?user_id=${id}`
      );
      const data = await res.data;
      setScores(data);
    } else {
      const res = await axios.get(
        `http://127.0.0.1:5000/submissions/tot_progress_email?email=${params.id}`
      );
      const data = await res.data;
      setScores(data);
    }
  }
  useEffect(() => {
    getScores();
  }, []);
  const router = useRouter();
  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
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
      <h1 className="text-3xl ml-5 mt-5 font-bold tracking-tight">
        Hi{" "}
        <span className="text-green-600">
          {email == "" ? params.id.split("%")[0] : email}
        </span>{" "}
        :)
      </h1>
      <div className="px-4 md:px-6 py-6 w-full space-y-4 justify-center h-screen items-center flex flex-col ">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold tracking-tight">
            Your Scores / Weekly Quiz Progress
          </h1>
        </div>
        <div className="absolute top-2 right-5 mb-10">
          <h1 className="text-lg font-bold tracking-tight mb-10">
            Project Score: 159
          </h1>
        </div>
        <div className="w-full border border-dashed border-black dark:border-gray-800 rounded-lg p-6">
          <div className="w-full aspect-[2/1] overflow-hidden rounded-lg border dark:border-gray-800">
            <LineChart scores={scores} />
          </div>
        </div>
      </div>
    </>
  );
}

function LineChart({
  scores,
}: {
  scores: { message: string; response: Scores["response"] };
}) {
  interface finalD {
    x: string;
    y: number;
  }
  const [data, setData] = useState<finalD[]>([]);
  useEffect(() => {
    const finalData = scores.response.map((message) => ({
      x: message.date,
      y: message.totalScore,
    }));
    setData(finalData);
  }, [scores]);
  return (
    <div className="w-full aspect-[2/1] text-black">
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: data,
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#eb25d7", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        curve="natural"
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#000000",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
