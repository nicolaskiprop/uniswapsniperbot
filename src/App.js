import { useState } from 'react';
import './App.css';
import { Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';
import Appbar from '../src/components/Appbar'
import axios from 'axios'

function App() {


  const [token, setToken] = useState('');
  const [buyAmount, setbuyAmount] = useState('');
  const [slippage, setslippage] = useState('');


  const [logs, setLogs] = useState('');



  const [data, setData] = useState({
    token: '',
    buyAmount: '',
    slippage: ''
  })

  const baseUrl = `http://127.0.0.1:5000/buy`;

  function handle(e) {
    console.log(data);
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    setData({
      token: data.token,
      buyAmount: parseInt(data.buyAmount),
      slippage: parseInt(data.slippage)
    });
    axios.post(baseUrl, {
      token: data.token,
      buyAmount: parseInt(data.buyAmount),
      slippage: parseInt(data.slippage)
    }).then(async (res) => {
      console.log(res.data);
      const {
        token,
        buyAmount,
        slippage
    } = res.data.data
    let log = `\ntokenAdress: ${token}`;
    log += `\nbnbAmount: ${buyAmount}`;
    log += `\nslippage: ${slippage}`;
    setLogs(log);
    })

  }
  return (
    <>
      <Appbar />
      <Container maxWidth='xl'>
        <Grid container spacing={2} sx={{ padding: '20px' }} onChange={(e) => handle(e)}>

          <Grid item xs={12} sm={6}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Box sx={{ height: 'auto' }}>

                <Card sx={{ minWidth: 275, backgroundColor: 'aliceblue', borderRadius: '20px', marginBottom: '20px' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Typography sx={{ mt: 3, mb: 3, fontWeight: 500 }}>BUY</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }} >
                      <Typography>Token Address &nbsp; </Typography>
                      <TextField size="small" sx={{ background: "white" }} id='token' value={token} onChange={(e) => setToken(e.target.value)}></TextField>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                      <Typography>Amount to buy &nbsp; </Typography>
                      <TextField size="small" sx={{ background: "white" }} id='buyAmount' value={buyAmount} onChange={(e) => setbuyAmount(e.target.value)}></TextField>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                      <Typography>Slippage &nbsp; </Typography>
                      <TextField size="small" sx={{ background: "white" }} id='slippage' value={slippage} onChange={(e) => setslippage(e.target.value)}></TextField>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                      <Button variant='contained' color='success' type='submit'>
                        BUY
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
                <Card sx={{ backgroundColor: 'aliceblue', borderRadius: '20px', marginBottom: '20px' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Typography sx={{ mt: 3, mb: 3 }}>APPROVE</Typography>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                      <Typography> Token Address &nbsp;</Typography>
                      <TextField size="small" sx={{ background: "white" }}></TextField>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                      <Button variant='contained' color='success'>
                        Approve
                      </Button>
                    </Box>
                  </CardContent>
                </Card>

                <Card sx={{ backgroundColor: 'aliceblue', borderRadius: '20px', marginBottom: '20px' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Typography sx={{ mt: 3, mb: 3 }}>SELL</Typography>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                      <Typography> Token Address &nbsp;&nbsp;&nbsp;</Typography>
                      <TextField size="small" sx={{ background: "white" }}></TextField>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                      <Typography> Amount to sell(%) &nbsp;</Typography>
                      <TextField size="small" sx={{ background: "white" }}></TextField>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                      <Typography>Gas  &nbsp;&nbsp; &nbsp;</Typography>
                      <TextField size="small" sx={{ background: "white" }}></TextField>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                      <Button  variant='contained' color='success' >
                        SELL
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form>
              <Box sx={{ height: '76vh' }}>
                <Card sx={{ backgroundColor: 'aliceblue', borderRadius: '20px', marginBottom: '20px' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Typography sx={{ mt: 3, mb: 3 }}>SNIPE</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }} >
                      <Typography>Token Address &nbsp; </Typography>
                      <TextField size="small" sx={{ background: "white" }}></TextField>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }} >
                      <Typography>Buy Amount (eth) &nbsp; </Typography>
                      <TextField size="small" sx={{ background: "white" }}></TextField>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                      <Button variant='contained' color='success'>
                        SNIPE
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
                <Card sx={{ backgroundColor: 'aliceblue', borderRadius: '20px', marginBottom: '20px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ mt: 3, mb: 3 }}>LOGS</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>

                    <TextField
                      label='logs'
                      multiline
                      maxRows={10}
                      defaultValue={logs}
                      inputProps={{ readOnly: true }}
                      sx={{ width: '90%', cursor: 'pointer', background: 'white' }}
                    />
                  </Box>
                </Card>
              </Box>
            </form>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}

export default App;
