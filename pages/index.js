import GetStarted from 'components/GetStarted';
import Layout from 'components/Layout';
import ScoreCard from 'components/ScoreCard';
import state from 'utils/state';

export default function Home() {
  const { address } = state.useContainer();

  return <Layout>{address ? <ScoreCard /> : <GetStarted />}</Layout>;
}
