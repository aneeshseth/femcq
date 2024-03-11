"use client";
import { Button } from "@/components/ui/button";
import { ResponsiveLine } from "@nivo/line";
import { CSSProperties, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
export default function Component({ params, searchParams }: any) {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  let [loading, setLoading] = useState(true);
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
        Hi {params.id} :)
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
        <div className="w-full border border-dashed border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <div className="w-full aspect-[2/1] overflow-hidden rounded-lg border dark:border-gray-800">
            <LineChart className="w-full aspect-[2/1] text-black" />
          </div>
        </div>
      </div>
    </>
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
              stroke: "#040d1f",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
