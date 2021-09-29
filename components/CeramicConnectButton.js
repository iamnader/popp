import { Button } from '@mui/material';
import { ceramicState } from 'utils/state/ceramic';

const CeramicConnectButton = ({
  color = 'inherit',
  labelText = 'Connect Wallet',
  variant = '',
}) => {
  const { name, ceramic, authenticate, authenticated } =
    ceramicState.useContainer();

  return (
    <Button variant={variant} color={color} onClick={authenticate}>
      {authenticated ? (
        // If authenticated
        <>
          {/* Render name or DID */}
          <span>{name ? name : ceramic.did.id}</span>
        </>
      ) : (
        // Else, display Connect Wallet prompt
        labelText
      )}
    </Button>
  );
};

export default CeramicConnectButton;
