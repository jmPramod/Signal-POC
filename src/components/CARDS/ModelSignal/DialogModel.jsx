import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TableDemo } from "../Table/SignalTable"

export function DialogDemo({props}) {
    
  return (
    <>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className=" w-full">
        <DialogHeader>
          <DialogTitle>Last 10 entries</DialogTitle>
          <DialogDescription>
            Track changes of Signal here.         </DialogDescription>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4"> */}
       <TableDemo props={props}/>
        {/* </div> */}
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </>
  )
}
