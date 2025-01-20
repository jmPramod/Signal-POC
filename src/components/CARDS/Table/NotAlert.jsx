import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo({invoice}) {
  const color="red"
  return (
    <Alert   className={`flex items-center w-full py-1 border-${invoice}-500 text-${invoice}-500`}>
      <AlertTitle className={ ` border-${invoice}-500 text-[${invoice}]`}>{invoice}</AlertTitle>
    
    </Alert>
  )
}
