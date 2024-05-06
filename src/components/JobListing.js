import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import JobCard from './JobCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../features/jobs/jobsSlice';
const JobListing = () => {
  const dispatch = useDispatch();
  const { items: jobs, totalCount } = useSelector(state => state.jobs);
  let offset = jobs.length;

  // Fetch initial jobs
  useEffect(() => {
    dispatch(fetchJobs({ limit: 10, offset: 0 }));
  }, [dispatch]);

  // Infinite scroll logic
  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (bottom && jobs.length < totalCount) {
      dispatch(fetchJobs({ limit: 10, offset }));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [jobs, totalCount, dispatch, handleScroll]);
  return (
    <Box sx={{ height: 'calc(100vh - 64px)', p: 1 }}>
      <Grid container spacing={0}>
        {jobs.map(job => (
          <Grid item xs={12} sm={6} md={3} key={job.id}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default JobListing;
