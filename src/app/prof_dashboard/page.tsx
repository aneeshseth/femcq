"use client";
import { ResponsiveLine } from "@nivo/line";
import ComponentBar from "./bars";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { emailSelectorState } from "../state/state";
interface UserAverageScore {
  average_score: number;
  classID: string;
  email: string;
  role: string;
  userID: number;
}

export default function Component() {
  const [topScorers, setTopScorers] = useState([]);
  const [students, setStudents] = useState<UserAverageScore[]>();
  useEffect(() => {
    // Simulating an API call to fetch top scorers
    const fetchData = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch(
          "http://127.0.0.1:5000/dashboard/top-scorers-for-class?class_id=12345"
        );
        const data = await response.json();
        setTopScorers(data.top_scorers);
      } catch (error) {
        console.error("Error fetching top scorers:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/dashboard/average-score-for-each-user?class_id=12345"
        );
        const data = await response.json();
        setStudents(data.user_average_scores);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchData();
  }, []);
  const email = useRecoilValue(emailSelectorState);
  const router = useRouter();
  return (
    <div className="px-4 md:px-6 py-6 w-full space-y-4 justify-center h-screen items-center">
      <div className="flex items-center space-x-4 justify-between">
        <h1 className="text-lg font-bold tracking-tight">
          Class Quiz Progress
        </h1>
        <h1 className="text-lg tracking-tight lg:text-xl ml-5">
          powered by <span className="text-green-600">Sequio.ai</span>
        </h1>
      </div>
      <div className="w-full border border-dashed border-black dark:border-gray-800 rounded-lg p-6">
        <ComponentBar topScorers={topScorers} />
      </div>
      <div className="w-full border border-dashed border-black dark:border-gray-800 rounded-lg p-6 mb-10">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Class Students</CardTitle>
            <CardDescription>
              Students with their average scores.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {students &&
              students.map((student) => (
                <div
                  key={student.userID}
                  className="flex justify-between p-5 border-2 mb-2 rounded-lg cursor-pointer"
                  onClick={() => {
                    router.push(`/student_dashboard/${student.email}`);
                  }}
                >
                  <div className="text-lg">{student.email}</div>
                  <div className="text-md">{student.average_score}</div>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Week 1", y: 98 },
              { x: "Week 2", y: 137 },
              { x: "Week 3", y: 122 },
              { x: "Week 4", y: 145 },
              { x: "Week 5", y: 104 },
              { x: "Week 6", y: 154 },
            ],
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
        curve="cardinal"
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
