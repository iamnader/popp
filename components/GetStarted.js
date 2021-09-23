import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Layout from 'components/Layout';
import passportPng from 'public/images/passport.png';
import WalletConnectButton from 'components/WalletConnectButton';

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
          <Image
            src={passportPng}
            alt="Personhood Passport"
            width={128}
            height={171}
          />
        </Box>
        <Typography variant="h5" align="center">
          💡 Proof of Personhood Passport (PoPP) is a transportable proof of
          personhood identity for the web3 space.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <WalletConnectButton
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
