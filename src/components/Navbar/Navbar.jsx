import * as React from "react";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Container from "@mui/material/Container";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { styles } from "./styles";
import { Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import MobileNav from "./MobileNav";
import { GlobalContext } from "@/context/GlobalContext";
import { FaTrafficLight } from "react-icons/fa";
import { DropdownMenuCheckboxes } from "./DropDownMenu";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
function NavBar() {
  const { user, setUser } = React.useContext(GlobalContext);
  const [closeDrop,setcloseDrop]=React.useState(false)
  const [theam,setTheam]=React.useState(true)
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const mobile = useMediaQuery(theme.breakpoints.down(700));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setcloseDrop(true)
  };
  const handleClose = () => {
    setcloseDrop(false)
    setAnchorEl(null);
  };
  
  const handleLogin = async () => {
    if (user) {
      localStorage.removeItem("User");
      console.log("logout");
      setUser(null);
      navigate("/login");
      
      console.log("login redir");
    } else {
      console.log("login");
      navigate("/login");
      
      console.log("login redir");
    }
  };
  return (
    <>
        <DropdownMenu>

      <styles.outerContainer position="fixed" className="z-100">
        <Container maxWidth="xl"  className="z-0"
        // style={{background:theam?"white":""}}
        >
          <styles.toolBar disableGutters>
            <div className="flex cursor-pointer flex-col items-center justify-center p-3" onClick={()=>navigate("/home")}><FaTrafficLight size={30}/>Traffic Admin</div>

            {!mobile && (
              <styles.menuWrapper>
                {user && (
                  <li>
                    <styles.menuButton
                      variant="contained"
                      onClick={() => navigate("/home")}
                    >
                      Home
                    </styles.menuButton>
                  </li>
                )}
                {/* <li>
                  <styles.menuButton
                    variant="contained"
                    onClick={() => handleLogin()}
                  >
                    {!user ? "Login" : "Logout"}
                  </styles.menuButton>
                </li> */}
                {user && (
                  <li    onClick={handleClick}
                  >
                    <DropdownMenuTrigger asChild>

                  <img src={user.images.imageUrl} className="w-[70px] cursor-pointer"/>
                    </DropdownMenuTrigger>
                    {/* <styles.menuButton
                      variant="contained"
                      onClick={() => navigate("/home")}
                    >
                      Signal
                    </styles.menuButton> */}
      {/* {closeDrop&&              <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{

          setcloseDrop(false)
          handleClose();  
          navigate("/profile")
       }}>Profile</MenuItem>
        <MenuItem onClick={()=>{
          handleLogin()
            handleClose()}}>Logout</MenuItem>
      </Menu>} */}
    <DropdownMenuCheckboxes/>
                  </li>
                )}

              </styles.menuWrapper>
            )}
        
            {mobile && <MobileNav />}
          </styles.toolBar>
        </Container>
      </styles.outerContainer>
        </DropdownMenu>
      <Outlet />
    </>
  );
}
export default NavBar;
