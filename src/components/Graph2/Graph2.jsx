"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {

  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Updated chart data with new keys
const chartData = [
  { date: "2024-04-01", red: 222, green: 150, yellow: 180 },
  { date: "2024-04-02", red: 97, green: 180, yellow: 160 },
  { date: "2024-04-03", red: 167, green: 120, yellow: 140 },
  { date: "2024-04-04", red: 242, green: 260, yellow: 220 },
  { date: "2024-04-05", red: 373, green: 290, yellow: 310 },
  { date: "2024-04-06", red: 301, green: 340, yellow: 280 },
  { date: "2024-04-07", red: 245, green: 180, yellow: 200 },
  { date: "2024-04-08", red: 409, green: 320, yellow: 350 },
  { date: "2024-04-09", red: 59, green: 110, yellow: 90 },
  { date: "2024-04-10", red: 261, green: 190, yellow: 210 },
  { date: "2024-04-11", red: 327, green: 350, yellow: 300 },
  { date: "2024-04-12", red: 292, green: 210, yellow: 250 },
  { date: "2024-04-13", red: 342, green: 380, yellow: 320 },
  { date: "2024-04-14", red: 137, green: 220, yellow: 170 },
  { date: "2024-04-15", red: 120, green: 170, yellow: 140 },
  { date: "2024-04-16", red: 138, green: 190, yellow: 150 },
  { date: "2024-04-17", red: 446, green: 360, yellow: 380 },
  { date: "2024-04-18", red: 364, green: 410, yellow: 340 },
  { date: "2024-04-19", red: 243, green: 180, yellow: 200 },
  { date: "2024-04-20", red: 89, green: 150, yellow: 120 },
  { date: "2024-04-21", red: 137, green: 200, yellow: 160 },
  { date: "2024-04-22", red: 224, green: 170, yellow: 190 },
  { date: "2024-04-23", red: 138, green: 230, yellow: 180 },
  { date: "2024-04-24", red: 387, green: 290, yellow: 310 },
  { date: "2024-04-25", red: 215, green: 250, yellow: 200 },
  { date: "2024-04-26", red: 75, green: 130, yellow: 100 },
  { date: "2024-04-27", red: 383, green: 420, yellow: 360 },
  { date: "2024-04-28", red: 122, green: 180, yellow: 150 },
  { date: "2024-04-29", red: 315, green: 240, yellow: 270 },
  { date: "2024-04-30", red: 454, green: 380, yellow: 400 },
  { date: "2024-05-01", red: 165, green: 220, yellow: 180 },
  { date: "2024-05-02", red: 293, green: 310, yellow: 260 },
  { date: "2024-05-03", red: 247, green: 190, yellow: 210 },
  { date: "2024-05-04", red: 385, green: 420, yellow: 370 },
  { date: "2024-05-05", red: 481, green: 390, yellow: 410 },
  { date: "2024-05-06", red: 498, green: 520, yellow: 470 },
  { date: "2024-05-07", red: 388, green: 300, yellow: 320 },
  { date: "2024-05-08", red: 149, green: 210, yellow: 170 },
  { date: "2024-05-09", red: 227, green: 180, yellow: 200 },
  { date: "2024-05-10", red: 293, green: 330, yellow: 280 },
  { date: "2024-05-11", red: 335, green: 270, yellow: 290 },
  { date: "2024-05-12", red: 197, green: 240, yellow: 200 },
  { date: "2024-05-13", red: 197, green: 160, yellow: 180 },
  { date: "2024-05-14", red: 448, green: 490, yellow: 420 },
  { date: "2024-05-15", red: 473, green: 380, yellow: 400 },
  { date: "2024-05-16", red: 338, green: 400, yellow: 350 },
  { date: "2024-05-17", red: 499, green: 420, yellow: 440 },
  { date: "2024-05-18", red: 315, green: 350, yellow: 300 },
  { date: "2024-05-19", red: 235, green: 180, yellow: 200 },
  { date: "2024-05-20", red: 177, green: 230, yellow: 190 },
  { date: "2024-05-21", red: 82, green: 140, yellow: 110 },
  { date: "2024-05-22", red: 81, green: 120, yellow: 90 },
  { date: "2024-05-23", red: 252, green: 290, yellow: 240 },
  { date: "2024-05-24", red: 294, green: 220, yellow: 240 },
  { date: "2024-05-25", red: 201, green: 250, yellow: 210 },
  { date: "2024-05-26", red: 213, green: 170, yellow: 190 },
  { date: "2024-05-27", red: 420, green: 460, yellow: 400 },
  { date: "2024-05-28", red: 233, green: 190, yellow: 210 },
  { date: "2024-05-29", red: 78, green: 130, yellow: 100 },
  { date: "2024-05-30", red: 340, green: 280, yellow: 300 },
  { date: "2024-05-31", red: 178, green: 230, yellow: 190 },
  { date: "2024-06-01", red: 178, green: 200, yellow: 170 },
  { date: "2024-06-02", red: 470, green: 410, yellow: 430 },
  { date: "2024-06-03", red: 103, green: 160, yellow: 130 },
  { date: "2024-06-04", red: 439, green: 380, yellow: 400 },
  { date: "2024-06-05", red: 88, green: 140, yellow: 110 },
  { date: "2024-06-06", red: 294, green: 250, yellow: 270 },
  { date: "2024-06-07", red: 323, green: 370, yellow: 320 },
  { date: "2024-06-08", red: 385, green: 320, yellow: 340 },
  { date: "2024-06-09", red: 438, green: 480, yellow: 410 },
  { date: "2024-06-10", red: 155, green: 200, yellow: 170 },
  { date: "2024-06-11", red: 92, green: 150, yellow: 120 },
  { date: "2024-06-12", red: 492, green: 420, yellow: 440 },
  { date: "2024-06-13", red: 81, green: 130, yellow: 100 },
  { date: "2024-06-14", red: 426, green: 380, yellow: 400 },
  { date: "2024-06-15", red: 307, green: 350, yellow: 300 },
  { date: "2024-06-16", red: 371, green: 310, yellow: 330 },
  { date: "2024-06-17", red: 475, green: 520, yellow: 470 },
  { date: "2024-06-18", red: 107, green: 170, yellow: 140 },
  { date: "2024-06-19", red: 341, green: 290, yellow: 310 },
  { date: "2024-06-20", red: 408, green: 450, yellow: 390 },
  { date: "2024-06-21", red: 169, green: 210, yellow: 180 },
  { date: "2024-06-22", red: 317, green: 270, yellow: 290 },
  { date: "2024-06-23", red: 480, green: 530, yellow: 480 },
  { date: "2024-06-24", red: 132, green: 180, yellow: 150 },
  { date: "2024-06-25", red: 141, green: 190, yellow: 160 },
  { date: "2024-06-26", red: 434, green: 380, yellow: 400 },
  { date: "2024-06-27", red: 448, green: 490, yellow: 420 },
  { date: "2024-06-28", red: 149, green: 200, yellow: 170 },
  { date: "2024-06-29", red: 103, green: 160, yellow: 130 },
  { date: "2024-06-30", red: 446, green: 400, yellow: 420 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  red: {
    label: "Red",
    color: "hsl(0 100% 50%)", // Pure red
  },
  green: {
    label: "Green",
    color: "hsl(142 76% 36%)", // Vibrant green
  },
  yellow: {
    label: "Yellow",
    color: "hsl(60 100% 50%)", // Pure yellow
  },
}  

export function Graph2({chartData}) {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData =chartData&& chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>Showing data series for the last 3 months</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[160px] rounded-lg sm:ml-auto" aria-label="Select time range">
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(0 100% 50%)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(0 100% 50%)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(142 76% 36%)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(142 76% 36%)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillYellow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(60 100% 50%)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(60 100% 50%)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area dataKey="red" type="natural" fill="url(#fillRed)" stroke="hsl(0 100% 50%)" stackId="a" />
            <Area dataKey="green" type="natural" fill="url(#fillGreen)" stroke="hsl(142 76% 36%)" stackId="a" />
            <Area dataKey="yellow" type="natural" fill="url(#fillYellow)" stroke="hsl(60 100% 50%)" stackId="a" />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

