import styled from '@emotion/styled';
import { DynamicFeedTwoTone } from '@mui/icons-material';
import { AppBar, Button, Drawer, TextField, Toolbar } from '@mui/material';
import { Field, Form } from 'formik';
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
    formEle:styled(Form)`
      display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    /* gap: 20px; */
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
,inputField:styled(Field)`
border: 1px solid;
width: 100%;
padding: 10px;
margin-bottom: 10px;
border:1px solid gray;
border-radius: 5px;



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
padding-top: 10px;
    max-width: 350px;`
    
}