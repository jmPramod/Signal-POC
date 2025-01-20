import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import {styles} from "./styles"
export default function CircularSize() {
  return (
    <styles.outerContainer>


    <Stack spacing={2} direction="row" alignItems="center">

      <CircularProgress size="3rem" />
    </Stack>
    </styles.outerContainer>
  );
}
