import { Box, Container } from '@mui/material';
import Filter from './components/filter';
import JobListing from './components/JobListing';
import './App.css';

function App() {
  return (
    <Container maxWidth={'900'}>
      <Box width={'100%'}>
        <Filter />
        <JobListing />
      </Box>
    </Container>
  );
}

export default App;
