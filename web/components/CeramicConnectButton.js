import { Button } from '@mui/material';
import { ceramicState } from 'utils/state/ceramic';

const CeramicConnectButton = ({
  color = 'inherit',
  labelText = 'Connect Wallet',
  variant = '',
}) => {
  const { name, ceramic, authenticate, authenticating, authenticated } =
    ceramicState.useContainer();

  return (
    <Button variant={variant} color={color} onClick={authenticate}>
      {authenticated ? (
        // If authenticated
        <>
          {/* Render name or DID */}
          <span>{name ? name : ceramic.did.id}</span>
        </>
      ) : authenticating ? (
        'Connecting...'
      ) : (
        // Else, display Connect Wallet prompt
        labelText
      )}
    </Button>
  );
};

export default CeramicConnectButton;
