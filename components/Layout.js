import Head from 'next/head'; // Head + meta
import state from 'utils/state'; // Global state
import NextNProgress from 'nextjs-progressbar'; // Navigation progress bar
import { Box } from '@mui/system';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WalletConnectButton from './WalletConnectButton';

export default function Layout({ children }) {
  return (
    <div>
      {/* Navigation progress bar */}
      <NextNProgress
        color="#282846"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{
          showSpinner: false,
        }}
      />

      {/* HTML Meta + Header */}
      <Meta />
      <Header />

      {/* Inject child content */}
      {children}

      {/* Footer */}
      <Footer />
    </div>
  );
}

// HTML Head
function Meta() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Proof of Personhood Passport</title>
      <meta name="title" content="proof of personhood passport" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta
        name="description"
        content="Proof of Personhood Passport (PoPP) is a transportable proof of personhood identity for the web3 space"
      />

      {/* OG + Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://personhoodpassport.com/" />
      <meta property="og:title" content="proof of personhood passport" />
      <meta
        property="og:description"
        content="Proof of Personhood Passport (PoPP) is a transportable proof of personhood identity for the web3 space."
      />
      <meta
        property="og:image"
        content="https://daochess.org/images/meta.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://personhoodpassport.com/" />
      <meta property="twitter:title" content="proof of personhood passport]" />
      <meta
        property="twitter:description"
        content="Proof of Personhood Passport (PoPP) is a transportable proof of personhood identity for the web3 space."
      />
      <meta
        property="twitter:image"
        content="https://personhoodpassport.com/images/passport.png"
      />
    </Head>
  );
}

// Header (+ auth management)
function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Personhood Passport
          </Typography>
          <WalletConnectButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// Footer
function Footer() {
  return (
    <Box mx={5} sx={{ display: 'flex', p: 1 }}>
      <Box sx={{ p: 1, flexGrow: 1 }}>
        <Box>
          Developed by{' '}
          <a
            href="https://twitter.com/iamnader"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nader Akhnoukh
          </a>{' '}
          &{' '}
          <a
            href="https://gitcoin.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gitcoin
          </a>
          .
        </Box>
      </Box>
      <Box sx={{ p: 1 }}>
        <a
          href="https://github.com/iamnader/popp"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </Box>
    </Box>
  );
}
