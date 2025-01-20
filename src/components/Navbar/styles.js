import styled from '@emotion/styled';
import { AppBar, Button, Container, Drawer, Toolbar } from '@mui/material';


export const styles = {
    outerContainer:styled(AppBar)`
    `,
    innerContainer:styled(Container)``,
      toolBar:styled(Toolbar)`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 95%;
      margin: 0 auto;
    `,
    menuWrapper:styled("ul")`
    
    display:flex;
    align-items: center;
    gap: 10px;
    /* flex-direction: column; */
    `,
    menuButton:styled(Button)`
    color:white;
    /* font-weight: bold; */
    background-color: #ff9f00;
    :hover{
        background-color: #fb641b;
        
    }    
    `
    ,
    menuWrapperMob:styled("ul")`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    
    `,
    outputDrawer:styled(Drawer)`
    width:50%;`
    
}