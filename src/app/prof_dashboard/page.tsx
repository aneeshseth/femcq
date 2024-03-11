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

export default function Component() {
  const students = [
    { name: "aneesh", score: 111 },
    { name: "sharad", score: 157 },
    { name: "vashishte", score: 129 },
    { name: "akshat", score: 150 },
  ];
  const router = useRouter();
  return (
    <div className="px-4 md:px-6 py-6 w-full space-y-4 justify-center h-screen items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-bold tracking-tight">
          Weekly Class Average Quiz Progress
        </h1>
      </div>
      <div className="w-full border border-dashed border-gray-200 dark:border-gray-800 rounded-lg p-6">
        <div className="w-full aspect-[2/1] overflow-hidden rounded-lg border dark:border-gray-800">
          <LineChart className="w-full aspect-[2/1] text-black" />
        </div>
        <ComponentBar />
      </div>
      <div className="w-full border border-dashed border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-10">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Class Students</CardTitle>
            <CardDescription>
              Students with their average scores.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {students.map((student: any) => (
              <div
                className="flex justify-between p-5 border-2 mb-2 rounded-lg cursor-pointer"
                onClick={() => {
                  router.push(`/student_dashboard/${student.name}`);
                }}
              >
                <div className="text-lg">{student.name}</div>
                <div className="text-md">{student.score}</div>
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
              { x: "Week 1", y: 100 },
              { x: "Week 2", y: 111 },
              { x: "Week 3", y: 102 },
              { x: "Week 4", y: 124 },
              { x: "Week 5", y: 100 },
              { x: "Week 6", y: 122 },
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
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
              color: "black",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
              color: "black",
            },
          },
          grid: {
            line: {
              stroke: "#040d1f",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
