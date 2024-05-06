import { Box, Container } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';
import Filter from './components/filter';
import JobListing from './components/JobListing';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth={'900'}>
        {/* Fixed or Sticky Filter Bar on top */}
        <Box sx={{ position: 'sticky', top: 0, zIndex: 1000 }}>
          <Filter />
        </Box>

        {/* JobListing scrolls behind the Filter */}
        <Box sx={{ pt: '10px' }}>
          <JobListing />
        </Box>
      </Container>
    </Provider>
  );
}

export default App;
