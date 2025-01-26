import { Card } from '@/components/ui/card';
import styled from '@emotion/styled';
import { DynamicFeedTwoTone } from '@mui/icons-material';
import {
  AppBar,
  Button,
  Drawer,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';

export const styles = {
  outerContainer: styled('div')`
    display: flex;
    width: 100%;
    margin-top: 66px;
    gap: 15px;
    padding: 20px;
    flex-direction: row;
    background-color: #e5e7eb;
    @media (0px<width<780px) {
      flex-direction: column;
    }
    /* height: 90vh; */
  `,
  leftContainer: styled('div')`
    width: 25%;
    /* border: 1px solid red; */
    height: 100%;
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (0px<width<780px) {
      width: 100%;
    }
  `,
  rightContainer: styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    /* border: 1px solid blue; */
    gap: 20px;
    align-items: center;
    flex-direction: column;
    @media (0px<width<780px) {
      width: 100%;
    }
  `,
  leftTop: styled('div')`
    height: 60%;
    width: 100%;
    /* border: 1px solid green; */
    display: flex;
    flex-wrap: wrap;
    @media (0px<width<780px) {
    }
  `,

  leftbottom: styled('div')`
    width: 100%;
    /* height: 100%; */
    /* border: 1px solid gainsboro; */
  `,

  rightTop: styled('div')`
    /* height: 70%; */
    width: 100%;
    /* border: 1px solid green; */
    display: flex;
    flex-wrap: wrap;
    align-items: normal;
    /* padding: 10px; */
    gap: 30px;
    @media (0px<width<780px) {
    }
  `,

  rightBottom: styled('div')`
    width: 100%;
    height: 30%;
    /* border: 1px solid gainsboro; */
  `,

  image: styled('img')`
    width: 200px;
    height: 200px;
    flex-wrap: wrap;
  `,
  image2: styled('img')`
    width: 50px;
    height: 50px;
    flex-wrap: wrap;
  `,
  info: styled('div')`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    @media (0px<width<780px) {
      width: 100%;
      align-items: center;
    }
  `,
  WelcomeText: styled(Typography)``,
  welcomeCard: styled(Card)`
    padding: 13px;

    @media (0px<width<780px) {
      width: 100%;
    }
  `,
};
