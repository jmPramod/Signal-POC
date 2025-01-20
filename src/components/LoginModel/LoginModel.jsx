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
import { useNavigate } from "react-router-dom";

export function LoginModel({setIsOpen}) {
  
  const navigate = useNavigate();
  return (
    // <Dialog>
      // <DialogTrigger asChild>
      //   <Button variant="outline">Edit Profile</Button>
      // </DialogTrigger>
      <DialogContent  className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Please Login for this page</DialogTitle>
          <DialogDescription>Create a new Account? <u className="cursor-pointer" onClick={()=>navigate("/login")}>Sign Up</u>   </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Password
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Login</Button>
        </DialogFooter>
      </DialogContent>
    // </Dialog>
  )
}
