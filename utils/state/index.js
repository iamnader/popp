import { eth } from 'utils/state/eth'; // Eth state provider

export default function StateProvider({ children }) {
  return <eth.Provider>{children}</eth.Provider>;
}
