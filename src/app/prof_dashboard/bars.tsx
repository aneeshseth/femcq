import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";

export default function ComponentBar() {
  return (
    <Card className="w-full mt-10">
      <CardHeader>
        <CardTitle>Top 4 Highest Performers</CardTitle>
      </CardHeader>
      <CardContent>
        <BarChart className="w-full aspect-[1/2] h-[200px] sm:h-[400px] text-black" />
      </CardContent>
    </Card>
  );
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Aneesh", score: 111 },
          { name: "Sharad", score: 157 },
          { name: "Vashishte", score: 129 },
          { name: "Akashat", score: 150 },
        ]}
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
        gridYValues={4}
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
              stroke: "#f3f4f6",
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
