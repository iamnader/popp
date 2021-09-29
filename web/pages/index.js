import GetStarted from 'components/GetStarted';
import Layout from 'components/Layout';
import ScoreCard from 'components/ScoreCard';
import { ceramicState } from 'utils/state/ceramic';

export default function Home() {
  const { authenticated } = ceramicState.useContainer();

  return <Layout>{authenticated ? <ScoreCard /> : <GetStarted />}</Layout>;
}
