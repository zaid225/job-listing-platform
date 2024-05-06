import * as React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';

const JobCardDescription = ({ job }) => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: '250px',
          overflow: 'hidden',
          // maskImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))',
        }}
      >
        {/* Job Description */}
        <Typography variant="body2" component="p" sx={{ fontSize: '1rem', lineHeight: 1.5, fontWeight: 500 }}>
          About Company:
        </Typography>
        <Box sx={{ whiteSpace: 'pre-wrap', fontSize: '14px' }}>
          <strong>About us:</strong>
        </Box>
        <Typography variant="body2" component="div">
          {job.jobDetailsFromCompany}
        </Typography>

        {/* Fade Out Overlay */}

        <Box
          sx={{
            position: 'absolute',
            bottom: '0px',
            left: 0,
            right: 0,
            height: '50px',
            backgroundImage: 'linear-gradient(to bottom, transparent, white)',
          }}
        />

        {/* View Job Button */}
        <Button
          sx={{
            position: 'absolute',
            bottom: '10px', // Adjust based on your preference
            right: '10px',
            textDecoration: 'none',
            color: '#4943da',
            backgroundColor: 'white',
            width: '100%',
            '&:hover': {
              backgroundColor: 'white',
            },
            fontSize: '0.900rem',
            fontWeight: '400',
            fontFamily: 'Lexend, sans-serif',
            p: '6px 16px',
            textTransform: 'none',
            borderRadius: 1,
            boxShadow: 'white', // Remove or adjust the box-shadow as per your design
            zIndex: 2, // Ensure the button is above the fade-out overlay
          }}
          href={job?.jdLink}
          target="_blank"
        >
          View Job
        </Button>
      </Box>
      {/* Skills and Experience Section */}
      {job?.skills && (
        <Box sx={{ mt: 1 }}>
          <Typography
            variant="subtitle2"
            sx={{ mt: 1, fontSize: '0.8125rem', fontWeight: 600, color: '#8b8b8b', fontFamily: 'Lexend, sans-serif' }}
          >
            Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', my: 1 }}>
            {/* Replace with actual skills */}
            <Chip
              label="Typescript"
              size="small"
              sx={{
                m: '1px',
                bgcolor: '#d9fed3',
                color: '#4943da',
                borderRadius: '50px',
                fontSize: '0.5625rem',
                fontWeight: 500,
                fontFamily: 'Lexend, sans-serif',
              }}
            />
            <Chip
              label="Founding Engineer"
              size="small"
              sx={{
                m: '1px',
                bgcolor: '#d9fed3',
                color: '#4943da',
                borderRadius: '50px',
                fontSize: '0.5625rem',
                fontWeight: 500,
                fontFamily: 'Lexend, sans-serif',
              }}
            />
            <Chip
              label="Senior Engineer"
              size="small"
              sx={{
                m: '1px',
                bgcolor: '#d9fed3',
                color: '#4943da',
                borderRadius: '50px',
                fontSize: '0.5625rem',
                fontWeight: 500,
                fontFamily: 'Lexend, sans-serif',
              }}
            />
          </Box>
          <Typography
            variant="subtitle2"
            sx={{ mt: 1, fontSize: '0.8125rem', fontWeight: 600, color: '#8b8b8b', fontFamily: 'Lexend, sans-serif' }}
          >
            Minimum Experience
          </Typography>
          <Typography variant="h6" component="h2" sx={{ fontSize: '14px', fontFamily: 'Lexend, sans-serif', fontWeight: 400 }}>
            {job.minExp} years
          </Typography>
        </Box>
      )}
    </>
  );
};

export default JobCardDescription;
