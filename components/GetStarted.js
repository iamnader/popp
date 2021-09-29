import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CeramicConnectButton from './CeramicConnectButton';
// import WalletConnectButton from 'components/WalletConnectButton';

const GetStarted = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 4,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Proof of Personhood Passport
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <img src="./images/passportSmall.png" alt="Personhood Passport" />
        </Box>
        <Typography variant="h5" align="center">
          💡 Proof of Personhood Passport (PoPP) is a transportable proof of
          personhood identity for the web3 space.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CeramicConnectButton
            labelText="Connect Your Wallet to Get Started!"
            variant="contained"
            color="primary"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default GetStarted;
