
import './App.css';
import { Box, Button, Card, CardContent, Container, Divider, Grid, Paper, TextareaAutosize, TextField, Typography } from '@mui/material';
import Appbar from '../src/components/Appbar'
import { borderRadius } from '@mui/system';

function App() {
  return (
    <>
      <Appbar />
      <Container maxWidth='xl'>
        <Grid container spacing={2} sx={{ padding: '20px' }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ height: 'auto' }}>
              <Card sx={{ minWidth: 275, backgroundColor: 'aliceblue', borderRadius: '20px', marginBottom: '20px' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ mt: 3, mb: 3, fontWeight: 500 }}>BUY</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }} >
                    <Typography>Amount In &nbsp; </Typography>
                    <TextField size="small"></TextField>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                    <Typography>Slippage &nbsp; </Typography>
                    <TextField size="small"></TextField>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                    <Button variant='contained' color='success'>
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
                    <TextField size="small"></TextField>
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
                    <TextField size="small"></TextField>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                    <Typography> Amount to sell(%) &nbsp;</Typography>
                    <TextField size="small"></TextField>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                    <Typography>Gas  &nbsp;&nbsp; &nbsp;</Typography>
                    <TextField size="small"></TextField>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                    <Button variant='contained' color='success'>
                      SELL
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ height: '76vh' }}>
              <Card sx={{ backgroundColor: 'aliceblue', borderRadius: '20px', marginBottom: '20px' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ mt: 3, mb: 3 }}>SNIPE</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }} >
                    <Typography>Token Address &nbsp; </Typography>
                    <TextField size="small"></TextField>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }} >
                    <Typography>Buy Amount (eth) &nbsp; </Typography>
                    <TextField size="small"></TextField>
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
                    multiline
                    maxRows={10}
                    defaultValue="https://etherscan.io/ https://etherscan.io/"
                    inputProps={{readOnly:true}}
                    sx={{width:'90%', cursor:'pointer'}}
                  />
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
