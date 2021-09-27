import { Button } from '@mui/material';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { eth } from 'utils/state/eth';

const WalletConnectButton = ({
  color = 'inherit',
  labelText = 'Connect Wallet',
  variant = '',
}) => {
  const { address, unlock } = eth.useContainer();

  return (
    <Button variant={variant} color={color} onClick={unlock}>
      {address ? (
        // If authenticated
        <>
          {/* Render avatar */}
          <Jazzicon diameter={16} seed={jsNumberForAddress(address)} />
          {/* Render address */}
          <span>
            {address.startsWith('0x')
              ? // If ETH address, render truncated address
                address.substr(0, 6) + '...' + address.slice(address.length - 4)
              : // Else, render ENS name
                address}
          </span>
        </>
      ) : (
        // Else, display Connect Wallet prompt
        labelText
      )}
    </Button>
  );
};

export default WalletConnectButton;
