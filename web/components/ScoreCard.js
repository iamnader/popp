import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ScoreCard = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Proof of Personhood Scorecard
        </Typography>
        <Typography variant="subtitle">Todo: Display score</Typography>
      </Box>
    </Container>
  );
};

export default ScoreCard;
