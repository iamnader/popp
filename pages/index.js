import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Layout from 'components/Layout';
import passportPng from 'public/images/passport.png';

export default function Home() {
  return (
    <Layout>
      <Capture />
    </Layout>
  );
}

/**
 * Capture top CTA
 * @returns {HTMLElement}
 */
function Capture() {
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
            width={257}
            height={342}
          />
        </Box>
        <Typography variant="h5" align="center">
          💡 Proof of Personhood Passport (PoPP) is a transportable proof of
          personhood identity for the web3 space.
        </Typography>
      </Box>
    </Container>
  );
}
