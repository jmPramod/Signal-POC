import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDestructive({invoice}) {
    console.log("qqqq",invoice);
    
  return (
    <Alert variant="destructive" className="flex items-center  w-full  px-0 gap-3">
           <AlertTitle className="mx-2 flex gap-2"> <AlertCircle className="h-4 w-4 border-1 p-0 static" /> {" " }{invoice}</AlertTitle>
      
    </Alert>
  )
}
