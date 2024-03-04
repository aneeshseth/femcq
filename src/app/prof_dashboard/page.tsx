"use client";
import { ResponsiveLine } from "@nivo/line";
import ComponentBar from "./bars";

export default function Component() {
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
              { x: "Week 1", y: 43 },
              { x: "Week 2", y: 137 },
              { x: "Week 3", y: 61 },
              { x: "Week 4", y: 145 },
              { x: "Week 5", y: 26 },
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
        colors={["#2563eb", "#e11d48"]}
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
