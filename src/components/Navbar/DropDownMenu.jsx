'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate, useNavigationType } from 'react-router-dom';
import { GlobalContext } from '@/context/GlobalContext';

export function DropdownMenuCheckboxes() {
  const { user, setUser } = React.useContext(GlobalContext);

  const navigate = useNavigate();
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);
  const handleLogin = async () => {
    if (user) {
      localStorage.removeItem('User');
      console.log('logout');
      setUser(null);
      navigate('/login');

      console.log('login redir');
    } else {
      navigate('/login');
    }
  };
  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline">Open</Button>
    //   </DropdownMenuTrigger>
    <DropdownMenuContent className="p-3 text-center flex flex-col items-center justify-center">
      {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem
        onClick={() => navigate('/profile')}
        className="w-full text-1xl border hover:bg-black cursor-pointer hover:text-white p-2 m-1 text-center flex items-center justify-center"
        //   checked={showStatusBar}
        //   onCheckedChange={setShowStatusBar}
      >
        Profile
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={showPanel}
        onClick={() => handleLogin()}
        className="w-full text-1xl border hover:bg-black cursor-pointer hover:text-white p-2 m-1 text-center flex items-center justify-center"
        //   onCheckedChange={setShowPanel}
      >
        Logout
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
    // </DropdownMenu>
  );
}
