import { Box } from '@mui/material';
import React from 'react';

export default function JobListing() {
  return (
    <Box
      component="section"
      sx={{ p: 2, border: '1px dashed grey' }}
      my={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={100}
      gap={4}
      p={2}
      mx={4}
    >
      JobListing
    </Box>
  );
}
