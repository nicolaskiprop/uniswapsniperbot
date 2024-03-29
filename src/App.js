import { useState } from 'react';
import './App.css';
import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import Appbar from '../src/components/Appbar';
import axios from 'axios';

function App() {
	const [token, setToken] = useState('');
	const [buyAmount, setbuyAmount] = useState('');
	const [slippage, setslippage] = useState('');
	const [tokenAddress, setTokenAddress] = useState('');
	const [percentSell, setPercentSell] = useState('');
	const [logs, setLogs] = useState('');
	const [gas, setGas] = useState('');
	const [tokenAddress1, setTokenAddress1] = useState('');
	const [tokenAddress2, setTokenAddress2] = useState('');
	const [amount, setAmount] = useState('');
	const [profit, setProfit] = useState('');
	const [tokenAddress0, setTokenAddress0] = useState('');
	const [data, setData] = useState({
		token: '',
		buyAmount: '',
		slippage: '',
		tokentosell: '',
		tokenAddress: '',
		percentSell: '',
		gas: '',
		amount: '',
		profit: '',
		tokenAddress2: '',
		tokenAddress0:'',
	});

	const baseUrl = `http://127.0.0.1:3002`;

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
			buyAmount: parseFloat(data.buyAmount),
			slippage: parseFloat(data.slippage),
		});

		axios
			.post(`${baseUrl}/buy`, {
				token: data.token,
				buyAmount: parseFloat(data.buyAmount),
				slippage: parseFloat(data.slippage),
			})
			.then(async (res) => {
				console.log(res.data);
				const { token, buyAmount, slippage } = res.data.data;
				let log = `\ntokenAdress: ${token}`;
				log += `\nbuyAmount: ${buyAmount}`;
				log += `\nslippage: ${slippage}`;

				setLogs(log);
			});
	}

	function handleApprove(e) {
		e.preventDefault();
		console.log(data);
		setData({
			tokenAddress1: data.tokenAddress1,
		});

		axios
			.post(`${baseUrl}/approve`, {
				tokenAddress1: data.tokenAddress1,
			})
			.then(async (res) => {
				console.log(res.data);
				const { tokenAddress1 } = res.data.data;
				let log = `\ntokenAdress approved: ${tokenAddress1}`;

				setLogs(log);
			});
	}
	function handleSell(e) {
		e.preventDefault();
		console.log(data);
		setData({
			tokenAddress0: data.tokenAddress0,
			percentSell: parseFloat(data.percentSell),
			slippage: parseFloat(data.slippage),
		});

		axios
			.post(`${baseUrl}/sell`, {
				tokenAddress0: data.tokenAddress0,
				percentSell: parseFloat(data.percentSell),
				slippage: parseFloat(data.slippage),
			})
			.then(async (res) => {
				console.log(res.data);
				const { tokenAddress0, percentSell, slippage } = res.data.data;
				let log = `\ntoken_Adress: ${tokenAddress0}`;
				log += `\nAmount_to_sell: ${percentSell}`;
				log += `\nSlippage: ${slippage}`;

				setLogs(log);
			});
	}
	function handleSnipe(e) {
		e.preventDefault();
		console.log(data);
		console.log('Amount ', amount);
		setData({
			tokenAddress2: data.tokenAddress2,
			amount: parseFloat(data.amount),
			profit: parseFloat(data.profit)
		});

		axios
			.post(`${baseUrl}/snipe`, {
				tokenAddress2: tokenAddress2,
				amount: parseFloat(amount),
				profit: parseFloat(profit),
			})
			.then(async (res) => {
				console.log(res.data);
				if (res.data.status === 'Fail') {
					setLogs(res.data.data)
				} else {
				
				const { tokenAddress2, amount } = res.data.data;
				let log = `\ntoken_Adress: ${tokenAddress2}`;
				log += `\nBuy Amount in eth: ${amount}`;
				log += `\nProfit: ${profit}`;
				setLogs(log);
				}
			});
	}
	return (
		<>
			<Appbar />
			<Container maxWidth="xl">
				<Grid container spacing={2} sx={{ padding: '20px' }}>
					<Grid item xs={12} sm={6}>
						<Box sx={{ height: 'auto' }}>
							<form onSubmit={(e) => handleSubmit(e)}>
								<Card
									sx={{
										minWidth: 275,
										backgroundColor: 'aliceblue',
										borderRadius: '20px',
										marginBottom: '20px',
									}}
									onChange={(e) => handle(e)}
								>
									<CardContent>
										<Box sx={{ display: 'flex', justifyContent: 'center' }}>
											<Typography sx={{ mt: 3, mb: 3, fontWeight: 500 }}>
												BUY
											</Typography>
										</Box>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												marginBottom: '30px',
											}}
										>
											<Typography>Token Address &nbsp; </Typography>
											<TextField
												size="small"
												sx={{ background: 'white' }}
												id="token"
												value={token}
												onChange={(e) => setToken(e.target.value)}
											></TextField>
										</Box>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												marginBottom: '30px',
											}}
										>
											<Typography>Amount to buy &nbsp; </Typography>
											<TextField
												size="small"
												sx={{ background: 'white' }}
												id="buyAmount"
												value={buyAmount}
												onChange={(e) => setbuyAmount(e.target.value)}
											></TextField>
										</Box>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												marginBottom: '30px',
											}}
										>
											<Typography>Slippage &nbsp; </Typography>
											<TextField
												size="small"
												sx={{ background: 'white' }}
												id="slippage"
												value={slippage}
												onChange={(e) => setslippage(e.target.value)}
											></TextField>
										</Box>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												marginBottom: '30px',
											}}
										>
											<Button variant="contained" color="success" type="submit">
												BUY
											</Button>
										</Box>
									</CardContent>
								</Card>
							</form>
							<form onSubmit={(e) => handleApprove(e)}>
								<Card
									sx={{
										backgroundColor: 'aliceblue',
										borderRadius: '20px',
										marginBottom: '20px',
									}}
									onChange={(e) => handle(e)}
								>
									<CardContent>
										<Box sx={{ display: 'flex', justifyContent: 'center' }}>
											<Typography sx={{ mt: 3, mb: 3 }}>APPROVE</Typography>
										</Box>

										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												marginBottom: '30px',
											}}
										>
											<Typography> Token Address &nbsp;</Typography>
											<TextField
												size="small"
												sx={{ background: 'white' }}
												id="tokenAddress1"
												value={tokenAddress1}
												onChange={(e) => setTokenAddress1(e.target.value)}
											></TextField>
										</Box>

										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												marginBottom: '30px',
											}}
										>
											<Button variant="contained" color="success" type="submit">
												Approve
											</Button>
										</Box>
									</CardContent>
								</Card>
							</form>
							<form onSubmit={(e) => handleSell(e)}>
								<Card
									sx={{
										backgroundColor: 'aliceblue',
										borderRadius: '20px',
										marginBottom: '20px',
									}}
									onChange={(e) => handle(e)}
								>
									<CardContent>
										<Box sx={{ display: 'flex', justifyContent: 'center' }}>
											<Typography sx={{ mt: 3, mb: 3 }}>SELL</Typography>
										</Box>

										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												marginBottom: '30px',
											}}
										>
											<Typography> Token Address &nbsp;&nbsp;&nbsp;</Typography>
											<TextField
												size="small"
												sx={{ background: 'white' }}
												id="tokenAddress0"
												value={tokenAddress0}
												onChange={(e) => setTokenAddress0(e.target.value)}
											></TextField>
										</Box>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												marginBottom: '30px',
											}}
										>
											<Typography> Amount to sell(%) &nbsp;</Typography>
											<TextField
												size="small"
												sx={{ background: 'white' }}
												id="percentSell"
												value={percentSell}
												onChange={(e) => setPercentSell(e.target.value)}
											></TextField>
										</Box>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												marginBottom: '30px',
											}}
										>
											<Typography>Slippage &nbsp;&nbsp; &nbsp;</Typography>
											<TextField
												size="small"
												sx={{ background: 'white' }}
												id="slippage"
												value={slippage}
												onChange={(e) => setGas(e.target.value)}
											></TextField>
										</Box>

										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												marginBottom: '30px',
											}}
										>
											<Button variant="contained" color="success" type="submit">
												SELL
											</Button>
										</Box>
									</CardContent>
								</Card>
							</form>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<form onSubmit={(e) => handleSnipe(e)}>
							<Box sx={{ height: '76vh' }}>
								<Card
									sx={{
										backgroundColor: 'aliceblue',
										borderRadius: '20px',
										marginBottom: '20px',
									}}
									onChange={(e) => handle(e)}
								>
									<CardContent>
										<Box sx={{ display: 'flex', justifyContent: 'center' }}>
											<Typography sx={{ mt: 3, mb: 3 }}>SNIPE</Typography>
										</Box>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												marginBottom: '30px',
											}}
										>
											<Typography>Token Address &nbsp; </Typography>
											<TextField
												size="small"
												sx={{ background: 'white' }}
												id="tokenAddress2"
												value={tokenAddress2}
												onChange={(e) => setTokenAddress2(e.target.value)}
											></TextField>
										</Box>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												marginBottom: '30px',
											}}
										>
											<Typography>Buy Amount (eth) &nbsp; </Typography>
											<TextField
												size="small"
												sx={{ background: 'white' }}
												id="amount"
												value={amount}
												onChange={(e) => setAmount(e.target.value)}
											></TextField>
										</Box>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												marginBottom: '30px',
											}}
										>
											<Typography>Profit Margin &nbsp; </Typography>
											<TextField
												size="small"
												sx={{ background: 'white' }}
												id="profit"
												value={profit}
												onChange={(e) => setProfit(e.target.value)}
											></TextField>
										</Box>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'center',
												marginBottom: '30px',
											}}
										>
											<Button variant="contained" color="success" type="submit">
												SNIPE
											</Button>
										</Box>
									</CardContent>
								</Card>
								<Card
									sx={{
										backgroundColor: 'aliceblue',
										borderRadius: '20px',
										marginBottom: '20px',
									}}
								>
									<Box sx={{ display: 'flex', justifyContent: 'center' }}>
										<Typography sx={{ mt: 3, mb: 3 }}>LOGS</Typography>
									</Box>
									<Box
										sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}
									>
										<TextField
											label="logs"
											multiline
											maxRows={10}
											defaultValue={logs}
											inputProps={{ readOnly: true, }}
											sx={{
												width: '90%',
												cursor: 'pointer',
												background: 'white',

											}}
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
