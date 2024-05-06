import * as React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';

import JobCardDescription from './JobDescription';
import getSymbolFromCurrency from 'currency-symbol-map';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const JobCard = ({ job }) => {
  return (
    <Card
      sx={{
        maxWidth: 360,
        boxShadow: 3,
        m: 2,
        borderRadius: '4px',
        padding: '10px 5px',
        overflow: 'hidden',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        backgroundColor: 'rgb(255, 255, 255)',
      }}
    >
      <Box sx={{ p: 1 }}>
        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '9px' }}>
          ⏳ Posted 4 days ago
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
        <Box component="img" src={job.logoUrl} alt={job.companyName} sx={{ width: '25%', maxWidth: '100%' }} />
        <Box sx={{ ml: 2 }}>
          <Typography
            className="info-container"
            sx={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '1px',
              marginBottom: '3px',
              color: '#8b8b8b',
              '&:hover': {
                color: '#8b8b8b',
                textDecoration: 'underline',
              },
            }}
            variant="h6"
            component="h3"
          >
            {job?.companyName}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{ fontWeight: 300, fontSize: '14px', lineHeight: 1.5, fontFamily: 'Lexend, sans-serif' }}
          >
            {job?.jobRole}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {job?.location ? job.location : ''}
            {job?.minExp && job?.maxExp ? '| Exp: ' + job?.minExp + '-' + job?.maxExp + ' years' : '-'}
          </Typography>
          {job?.salaryCurrencyCode && job?.minJdSalary && job?.maxJdSalary ? (
            <Typography className="card-salary" variant="body2" color="textSecondary" sx={{ display: 'flex', alignItems: 'center' }}>
              Estimated Salary: {getSymbolFromCurrency(job?.salaryCurrencyCode ?? 'USD')}
              {job?.minJdSalary + '-' + job?.maxJdSalary + ' LPA'}
              <span role="img" aria-label="Offered salary range" style={{ marginLeft: '5px', verticalAlign: 'middle' }}>
                ✅
              </span>
            </Typography>
          ) : (
            ''
          )}
        </Box>
      </Box>
      <CardContent>
        <JobCardDescription job={job} />
      </CardContent>
      <Box className="status-container">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 1,
            width: '100%',
            gap: '0.5rem',
          }}
        >
          <Button
            variant="contained"
            startIcon={'⚡'} // Ensure you have an icon component here
            style={{
              backgroundColor: 'rgb(85, 239, 196)',
              color: 'black',
              lineHeight: 1.75,
              minWidth: '64px',
              cursor: 'pointer',
              userSelect: 'none',
              verticalAlign: 'middle',
              appearance: 'none',
              textDecoration: 'none',
              display: 'inline-flex',
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
              fontFamily: 'Lexend, sans-serif',
              textTransform: 'capitalize',
              fontSize: '16px !important',
            }}
            id="custom-button"
          >
            Easy Apply
          </Button>
          <Button
            variant="contained"
            startIcon={
              <>
                <Stack direction="row" spacing={1}>
                  <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                    <Avatar
                      sx={{ height: 20, width: 20 }}
                      alt="Remy Sharp"
                      src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
                    />
                  </StyledBadge>
                  <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                    <Avatar
                      sx={{ height: 20, width: 20 }}
                      alt="Remy Sharp"
                      src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
                    />
                  </StyledBadge>
                </Stack>
              </>
            }
            style={{
              backgroundColor: '#4943da',
              color: 'white',
              lineHeight: 1.75,
              minWidth: '64px',
              cursor: 'pointer',
              userSelect: 'none',
              verticalAlign: 'middle',
              appearance: 'none',
              textDecoration: 'none',
              display: 'inline-flex',
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
              fontFamily: 'Lexend, sans-serif',
              textTransform: 'capitalize',
              fontSize: '16px !important',
            }}
            id="custom-button"
          >
            Unlock referral asks
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default JobCard;
