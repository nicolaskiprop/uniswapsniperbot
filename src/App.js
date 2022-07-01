
import './App.css';
import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';

function App() {
  return (
    <Grid container spacing={2} sx={{ padding: '20px' }}>
      <Grid item xs={12} sm={6}>
        <Box sx={{ border: '1px dashed grey', height: 'auto' }}>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography sx={{ mt: 5, mb: 5 }}>BUY</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
              <Typography>Amount In :</Typography>
              <TextField size="small"></TextField>
            </Box>
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
              <Typography>Slippage :</Typography>
              <TextField size="small"></TextField>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant='outlined'>
                BUY
              </Button>
            </Box>
          </Box>

          <Divider />
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography sx={{ mt: 5, mb: 5 }}>SELL</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
              <Typography>Amount In :</Typography>
              <TextField size="small"></TextField>
            </Box>
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
              <Typography>Slippage :</Typography>
              <TextField size="small"></TextField>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', }}>
              <Button variant='outlined'>
                BUY
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={{ border: '1px dashed grey', height: 'auto' }}>

        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
