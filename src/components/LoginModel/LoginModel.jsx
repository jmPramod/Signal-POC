import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "@/context/GlobalContext";
import { login } from "@/utils/API.services";

export function LoginModel({ setIsOpen }) {
  
  const { user, setUser } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: name,
      password: password,
    };

    let res = await login(payload);
    if (res.statusCode==200) {
      localStorage.setItem("User", JSON.stringify(res?.data));
      setUser(res?.data);
      setIsOpen(false)
      navigate("/home");

    }
    else{
      console.log("res.errorMessage",res.errorMessage);
      
      toast(res.errorMessage||"Something went wrong. please try later.", {
        style: {
          backgroundColor: "white",
          color: "red",
        },
      });
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <form onSubmit={handleSubmit}>
        <DialogHeader>
          <DialogTitle>Please Login for this page</DialogTitle>
          <DialogDescription>
            Create a new Account?{" "}
            <u
              className="cursor-pointer border border-black p-1 bg-white text-black rounded-sm my-2 hover:bg-black hover:text-white"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </u>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Login</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
