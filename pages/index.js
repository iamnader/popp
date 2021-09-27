import GetStarted from 'components/GetStarted';
import Layout from 'components/Layout';
import ScoreCard from 'components/ScoreCard';
import { eth } from 'utils/state/eth';

export default function Home() {
  const { address } = eth.useContainer();

  return <Layout>{address ? <ScoreCard /> : <GetStarted />}</Layout>;
}
