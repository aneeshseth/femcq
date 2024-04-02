import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { emailSelectorState } from "../state/state";
import { useRouter } from "next/router";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";

export default function ComponentBar({ topScorers }: any) {
  return (
    <Card className="w-full mt-10">
      <CardHeader>
        <CardTitle>Highest Performers</CardTitle>
      </CardHeader>
      <CardContent>
        <BarChart
          className="w-full aspect-[1/2] h-[200px] sm:h-[400px] text-black"
          topScorers={topScorers}
        />
      </CardContent>
    </Card>
  );
}

function BarChart({ topScorers, ...props }: any) {
  const data = topScorers.map(({ email, total_score }: any) => ({
    name: email,
    score: total_score,
  }));

  return (
    <div {...props}>
      <ResponsiveBar
        data={data}
        keys={["score"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#4325eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={5}
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
              stroke: "#193469",
            },
          },
        }}
        tooltipLabel={({ id }: any) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}
