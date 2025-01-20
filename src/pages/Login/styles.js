import styled from "@emotion/styled";
import { DynamicFeedTwoTone } from "@mui/icons-material";
import { AppBar, Button, Drawer, TextField, Toolbar } from "@mui/material";
import { motion } from "framer-motion";

export const styles = {
  outerContainer: styled("div")`
    margin-top: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    height: 90.8vh;
    background-color: #dddddd;
    @media(0px<width<780px){
      width: 100%;
      overflow-y: auto;
    }
  `,
  rightContainer: styled("div")`
    width: 50%;
    height: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    @media(0px<width<780px){
      width: 100%;
    }
  `,
  formEle: styled("form")`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    gap: 20px;
    @media(0px<width<780px){
      width: 95%;
      gap:4px;
    }
  `,
  leftContainer: styled("div")`
    width: 50%;
    height: 100%;
    @media(0px<width<780px){
      width: 100%;
    }
  `,
  image: styled("img")`
    width: 100%;
    height: 100%;
  `,
  inputField: styled(TextField)`
    background-color: white;
    width: 100%;
  `,
  loginButton: styled(Button)`
    color: #463380;
  `,

  passwordAnimation: styled(motion.div)`
    width: 100%;
    max-width: 350px;
  `,
  emailAnimation: styled(motion.div)`
    width: 100%;
    max-width: 350px;
  `,
  buttonAnimation: styled(motion.div)`
    width: 100%;
    max-width: 350px;
  `,
};
