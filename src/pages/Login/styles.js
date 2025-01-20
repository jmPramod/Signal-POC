import styled from '@emotion/styled';
import { DynamicFeedTwoTone } from '@mui/icons-material';
import { AppBar, Button, Drawer, TextField, Toolbar } from '@mui/material';
import { motion } from 'framer-motion';


export const styles = {
    outerContainer:styled("div")`
    
    margin-top: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
    /* gap: 10px; */
    padding: 30px;
    height: 90.8vh;
    background-color: #DDDDDD;

    `,
    rightContainer:styled("div")`
    width:50%;
    height: 100%;
    /* border:1px solid red; */
    /* background-color:#1976D2; */
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    
  
    `
    ,
    formEle:styled("form")`
      display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    gap: 20px;
  `,
    leftContainer:styled("div")`
    width:50%;
    /* border:1px solid blue; */
    height: 100%;
    `,
    image:styled('img')`
    width: 100%;
    height: 100%;
    `
,inputField:styled(TextField)`
background-color: white;
width: 100%;
`
,
loginButton:styled(Button)`
color: #463380;

`,

passwordAnimation:styled(motion.div)`
width: 100%;
    max-width: 350px;`,
emailAnimation:styled(motion.div)`
width: 100%;
    max-width: 350px;`
  ,
  buttonAnimation:styled(motion.div)`
width: 100%;
    max-width: 350px;`
    
}