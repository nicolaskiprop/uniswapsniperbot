import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';




export default function ButtonAppBar() {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar sx={{ display:'flex', justifyContent:'end'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="wallet"
          >
            <AccountBalanceWalletIcon />
            <Button color="inherit">Connect wallet</Button>
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
