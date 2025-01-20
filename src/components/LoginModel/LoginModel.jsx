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

export function LoginModel({ setIsOpen }) {
  
  const { user, setUser } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await fetch("https://api.example.com/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name, password }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log("Login successful", data);
    //     // Perform post-login actions, e.g., storing tokens and redirecting
    //     setIsOpen(false);
    //     navigate("/dashboard");
    //   } else {
    //     console.error("Login failed", await response.json());
    //     // Handle login errors here
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error);
    // }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <form onSubmit={handleSubmit}>
        <DialogHeader>
          <DialogTitle>Please Login for this page</DialogTitle>
          <DialogDescription>
            Create a new Account?{" "}
            <u
              className="cursor-pointer"
              onClick={() => navigate("/login")}
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
