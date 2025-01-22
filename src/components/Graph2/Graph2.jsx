"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
 
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const chartData = [
  { date: "2024-04-01", red: 1.2, green: 0.8, yellow: 0.4 },
  { date: "2024-04-02", red: 0.5, green: 1.2, yellow: 0.8 },
  { date: "2024-04-03", red: 1.8, green: 0.3, yellow: 1.1 },
  { date: "2024-04-04", red: 1.4, green: 2.0, yellow: 0.6 },
  { date: "2024-04-05", red: 0.7, green: 1.5, yellow: 1.2 },
  { date: "2024-04-06", red: 2.0, green: 0.9, yellow: 1.6 },
  { date: "2024-04-07", red: 1.1, green: 1.7, yellow: 0.3 },
  { date: "2024-04-08", red: 0.4, green: 1.1, yellow: 1.9 },
  { date: "2024-04-09", red: 1.6, green: 0.6, yellow: 1.4 },
  { date: "2024-04-10", red: 0.9, green: 1.9, yellow: 0.7 },
  { date: "2024-04-11", red: 1.3, green: 0.4, yellow: 2.0 },
  { date: "2024-04-12", red: 0.6, green: 1.6, yellow: 1.0 },
  { date: "2024-04-13", red: 1.9, green: 0.7, yellow: 1.5 },
  { date: "2024-04-14", red: 1.0, green: 2.0, yellow: 0.5 },
  { date: "2024-04-15", red: 0.3, green: 1.3, yellow: 1.8 },
  { date: "2024-04-16", red: 1.7, green: 0.5, yellow: 1.2 },
  { date: "2024-04-17", red: 0.8, green: 1.8, yellow: 0.9 },
  { date: "2024-04-18", red: 2.0, green: 0.2, yellow: 1.7 },
  { date: "2024-04-19", red: 1.2, green: 1.4, yellow: 0.4 },
  { date: "2024-04-20", red: 0.5, green: 0.8, yellow: 2.0 },
  { date: "2024-04-21", red: 1.8, green: 1.1, yellow: 0.6 },
  { date: "2024-04-22", red: 0.7, green: 2.0, yellow: 1.3 },
  { date: "2024-04-23", red: 1.4, green: 0.6, yellow: 1.8 },
  { date: "2024-04-24", red: 0.9, green: 1.5, yellow: 0.5 },
  { date: "2024-04-25", red: 2.0, green: 0.3, yellow: 1.6 },
  { date: "2024-04-26", red: 1.1, green: 1.7, yellow: 0.8 },
  { date: "2024-04-27", red: 0.4, green: 0.9, yellow: 1.9 },
  { date: "2024-04-28", red: 1.6, green: 1.2, yellow: 0.7 },
  { date: "2024-04-29", red: 0.8, green: 2.0, yellow: 1.4 },
  { date: "2024-04-30", red: 1.3, green: 0.5, yellow: 2.0 },
  { date: "2024-05-01", red: 0.6, green: 1.8, yellow: 0.9 },
  { date: "2024-05-02", red: 1.9, green: 0.7, yellow: 1.5 },
  { date: "2024-05-03", red: 1.0, green: 1.6, yellow: 0.4 },
  { date: "2024-05-04", red: 0.3, green: 0.9, yellow: 2.0 },
  { date: "2024-05-05", red: 1.7, green: 1.3, yellow: 0.6 },
  { date: "2024-05-06", red: 0.8, green: 2.0, yellow: 1.2 },
  { date: "2024-05-07", red: 2.0, green: 0.4, yellow: 1.7 },
  { date: "2024-05-08", red: 1.2, green: 1.5, yellow: 0.5 },
  { date: "2024-05-09", red: 0.5, green: 0.8, yellow: 1.8 },
  { date: "2024-05-10", red: 1.8, green: 1.1, yellow: 0.7 },
  { date: "2024-05-11", red: 0.7, green: 2.0, yellow: 1.4 },
  { date: "2024-05-12", red: 1.4, green: 0.6, yellow: 2.0 },
  { date: "2024-05-13", red: 0.9, green: 1.7, yellow: 0.8 },
  { date: "2024-05-14", red: 2.0, green: 0.3, yellow: 1.5 },
  { date: "2024-05-15", red: 1.1, green: 1.9, yellow: 0.4 },
  { date: "2024-05-16", red: 0.4, green: 0.7, yellow: 2.0 },
  { date: "2024-05-17", red: 1.6, green: 1.4, yellow: 0.6 },
  { date: "2024-05-18", red: 0.8, green: 2.0, yellow: 1.2 },
  { date: "2024-05-19", red: 1.3, green: 0.5, yellow: 1.7 },
  { date: "2024-05-20", red: 0.6, green: 1.8, yellow: 0.5 },
  { date: "2024-05-21", red: 1.9, green: 0.9, yellow: 1.8 },
  { date: "2024-05-22", red: 1.0, green: 1.6, yellow: 0.7 },
  { date: "2024-05-23", red: 0.3, green: 0.4, yellow: 1.4 },
  { date: "2024-05-24", red: 1.7, green: 2.0, yellow: 2.0 },
  { date: "2024-05-25", red: 0.8, green: 0.6, yellow: 0.8 },
  { date: "2024-05-26", red: 2.0, green: 1.5, yellow: 1.5 },
  { date: "2024-05-27", red: 1.2, green: 0.3, yellow: 0.4 },
  { date: "2024-05-28", red: 0.5, green: 1.7, yellow: 2.0 },
  { date: "2024-05-29", red: 1.8, green: 0.9, yellow: 0.6 },
  { date: "2024-05-30", red: 0.7, green: 1.2, yellow: 1.2 },
  { date: "2024-05-31", red: 1.4, green: 2.0, yellow: 1.7 },
  { date: "2024-06-01", red: 0.9, green: 0.5, yellow: 0.5 },
  { date: "2024-06-02", red: 2.0, green: 1.8, yellow: 1.8 },
  { date: "2024-06-03", red: 1.1, green: 0.7, yellow: 0.7 },
  { date: "2024-06-04", red: 0.4, green: 1.6, yellow: 1.4 },
  { date: "2024-06-05", red: 1.6, green: 0.9, yellow: 2.0 },
  { date: "2024-06-06", red: 0.8, green: 1.3, yellow: 0.8 },
  { date: "2024-06-07", red: 1.3, green: 2.0, yellow: 1.5 },
  { date: "2024-06-08", red: 0.6, green: 0.4, yellow: 0.4 },
  { date: "2024-06-09", red: 1.9, green: 1.5, yellow: 2.0 },
  { date: "2024-06-10", red: 1.0, green: 0.8, yellow: 0.6 },
  { date: "2024-06-11", red: 0.3, green: 1.1, yellow: 1.2 },
  { date: "2024-06-12", red: 1.7, green: 2.0, yellow: 1.7 },
  { date: "2024-06-13", red: 0.8, green: 0.6, yellow: 0.5 },
  { date: "2024-06-14", red: 2.0, green: 1.9, yellow: 1.8 },
  { date: "2024-06-15", red: 1.2, green: 0.7, yellow: 0.7 },
  { date: "2024-06-16", red: 0.5, green: 1.4, yellow: 1.4 },
  { date: "2024-06-17", red: 1.8, green: 0.8, yellow: 2.0 },
  { date: "2024-06-18", red: 0.7, green: 1.2, yellow: 0.8 },
  { date: "2024-06-19", red: 1.4, green: 2.0, yellow: 1.5 },
  { date: "2024-06-20", red: 0.9, green: 0.5, yellow: 0.4 },
  { date: "2024-06-21", red: 2.0, green: 1.8, yellow: 2.0 },
  { date: "2024-06-22", red: 1.1, green: 0.7, yellow: 0.6 },
  { date: "2024-06-23", red: 0.4, green: 1.6, yellow: 1.2 },
  { date: "2024-06-24", red: 1.6, green: 0.9, yellow: 1.7 },
  { date: "2024-06-25", red: 0.8, green: 1.3, yellow: 0.5 },
  { date: "2024-06-26", red: 1.3, green: 2.0, yellow: 1.8 },
  { date: "2024-06-27", red: 0.6, green: 0.4, yellow: 0.7 },
  { date: "2024-06-28", red: 1.9, green: 1.5, yellow: 1.4 },
  { date: "2024-06-29", red: 1.0, green: 0.8, yellow: 2.0 },
  { date: "2024-06-30", red: 2.0, green: 0, yellow: 0 },
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

export function Graph2({ chartData}) {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData&&chartData.filter((item) => {
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
            <YAxis domain={[0, 2]} tickCount={5} tickLine={false} axisLine={false} tickMargin={8} />
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

