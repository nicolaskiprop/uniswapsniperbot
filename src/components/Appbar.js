import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


export default function ButtonAppBar() {


  return (
    <Box >
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'end' }}>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
