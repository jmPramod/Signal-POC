"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate, useNavigationType } from "react-router-dom"
import { GlobalContext } from "@/context/GlobalContext"

export function DropdownMenuCheckboxes() {
     const { user, setUser } = React.useContext(GlobalContext);
     
  const navigate = useNavigate();
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [showPanel, setShowPanel] = React.useState(false)
  const handleLogin = async () => {
    if (user) {
      localStorage.removeItem("User");
      console.log("logout");
      setUser(null);
      navigate("/login");
      
      console.log("login redir");
    } else {
      navigate("/login");
      
    }
  };
  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline">Open</Button>
    //   </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
       onClick={() => navigate("/profile")}
        //   checked={showStatusBar}
        //   onCheckedChange={setShowStatusBar}
        >
       Profile
        </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
          checked={showPanel}
          onClick={() => handleLogin()}
        //   onCheckedChange={setShowPanel}
        >
Logout
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    // </DropdownMenu>
  )
}
