import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DialogDemo } from "../ModelSignal/DialogModel"
import { fetchHistory } from "@/utils/API.services"
import {styles} from "./styles"
import { Typography } from "@mui/material"
export function Card1(prop) {
  let {props}=prop
  const [isOpen, setIsOpen] = React.useState(false);
  const [historyData,setHistoryData]=React.useState(null)
  // console.log("props",prop);
  
  // const props = {
  //   signalId: 6,
  //   signalColor: "Train green",
  //   description: "The green light allows the train to proceed, indicating a clear track ahead.",
  //   img_url: "https://res.cloudinary.com/dtvq8ysaj/image/upload/v1737043614/POC%20signal/bctu9kozyx3gdns6knlj.png",
  //   danger: false, // Set this to true to see the red border effect
  //   timestamp: "16/1/2025, 10:21:11 pm",
  // }
  // conso00);


  return (<>
   <Dialog  open={isOpen} onOpenChange={setIsOpen}>
   <DialogTrigger asChild>
    <Card
      className={`w-[100%] max-w-[450px] cursor-pointer ${
        props&&props.danger ? " border-4 border-red-500 shadow-lg  " : "border-gray-300"
      }`}

    >
      <CardHeader>
        <CardTitle>
        <Typography variant="h5"> <u>Current Signal</u></Typography>
          
          <styles.image src={props&&props.img_url} alt="Signal" />
        </CardTitle>
        <CardDescription className="text-1xl">{props&&props.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-2xl">
        {props&&props.timestamp}
      </CardContent>
    
    </Card>
    </DialogTrigger>
{isOpen&&<DialogDemo props={props&&props}/>}
   </Dialog>
  
  </>
  )
}
