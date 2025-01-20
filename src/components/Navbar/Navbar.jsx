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
function NavBar() {
  const { user, setUser } = React.useContext(GlobalContext);
  
  const [theam,setTheam]=React.useState(true)
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const mobile = useMediaQuery(theme.breakpoints.down(700));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  React.useEffect(() => {
    // localStorage.setItem("User", JSON.stringify(user?.data));
    let res = localStorage.getItem("User");
    if (res) {
      setUser(JSON.parse(res));
      console.log("user1", res);
    } 
    else if(location.pathname=="/sign-up"){
      
    }
    else {
      console.log("login redir");
      
      navigate("/login");
    }
  }, []);
  React.useEffect(() => {
    let res = localStorage.getItem("User");
    console.log(location);
    if(location.pathname=="/login"||location.pathname=="/sign-up"){
      console.log("login");
      
      setTheam(true)
    }
    else{
      // setTheam(false)
    }
    if (!res&&location.pathname!="/sign-up") {
      navigate("/login");
      
      console.log("login redir");
      return
    }
    if (res && location.pathname === "/login") {
      navigate("/home");
      return
    }
  
  }, []);

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
                  <img src={user.images.imageUrl} className="w-[70px] cursor-pointer"/>
                    {/* <styles.menuButton
                      variant="contained"
                      onClick={() => navigate("/home")}
                    >
                      Signal
                    </styles.menuButton> */}
                    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{
          
          navigate("/profile")
          handleClose();}}>Profile</MenuItem>
        <MenuItem onClick={()=>{
          handleLogin()
          handleClose();}}>Logout</MenuItem>
      </Menu>
    
                  </li>
                )}
              </styles.menuWrapper>
            )}
            {mobile && <MobileNav />}
          </styles.toolBar>
        </Container>
      </styles.outerContainer>
      <Outlet />
    </>
  );
}
export default NavBar;
