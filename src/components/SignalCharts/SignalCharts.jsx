"use client"

import { TrendingUp } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Skeleton } from '../ui/skeleton'
import { Button } from '@mui/material'



const chartConfig = {
  red: {
    label: "red",
    color: "hsl(0 100% 50%)", 
  },
  yellow: {
    label: "yellow",
    color: "hsl(60 100% 50%)",
  },
  green: {
    label: "green",
    color: "hsl(120 100% 35%)"
    
  },
}

export function SignalChart(props) {
    const {chartData}=props
  
  return (<>
  
    <Card className="h-full  md:w-[45%] w-full">
      <CardHeader>
        <CardTitle>Line Chart - Signals</CardTitle>
        <CardDescription>Time (X-axis) - Singal Occurance (Y-axis)</CardDescription>
      </CardHeader>
     {chartData?
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="sec"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="red"
              type="monotone"
              stroke="var(--color-red)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="yellow"
              type="monotone"
              stroke="var(--color-yellow)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="green"
              type="monotone"
              stroke="var(--color-green)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>:
      
      <Skeleton className="min-h-[240px] w-[95%] rounded-xl m-3" />}
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
            Shows raising up/down for given interval sec <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total ocuurance form socker started            </div>
          </div>
        </div>
      </CardFooter>
    </Card>

  </>
  )
}

