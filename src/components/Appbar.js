import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useState } from 'react';

const web3Modal = new Web3Modal({
  cacheProvider: true,

});



export default function ButtonAppBar() {





  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [error, setError] = useState();

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      setLibrary(library);

    } catch (error) {
      setError(error)

    }
  };







  return (
    <Box >
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'end' }}>
          {/* <Button variant="outlined" color='inherit' startIcon={<AccountBalanceWalletIcon />} onClick={connectWallet} >
            Connect wallet
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
