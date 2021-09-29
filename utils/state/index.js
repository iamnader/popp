// import { eth } from 'utils/state/eth'; // Eth state provider
import { ceramicState } from 'utils/state/ceramic'; // Ceramic state provider

export default function StateProvider({ children }) {
  return <ceramicState.Provider>{children}</ceramicState.Provider>;
}
