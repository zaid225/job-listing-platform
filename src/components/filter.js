import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Select from 'react-select';
import { employeExperience, employesOptions, jobTypeOptions, minbasePayOptions, roleOptions } from '../filterData/filterData';

const Item = styled()(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
}));

export default function Filter() {
  return (
    <Box component="div" sx={{ p: 2, border: '1px dashed grey' }} my={4} mx={4} gap={2}>
      <Grid container spacing={2}>
        <Box sx={{ flexGrow: 1, minWidth: '160px', gap: 2 }}>
          <Item>
            <Select isMulti name="role" options={roleOptions} className="basic-multi-select" placeholder="Roles" classNamePrefix="select" />
          </Item>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: '160px', gap: 2 }}>
          <Item>
            <Select
              isMulti
              name="employees"
              options={employesOptions}
              classNames={'custom-select'}
              className="basic-multi-select"
              placeholder="Number Of Employees"
              classNamePrefix="Number Of Employees"
            />
          </Item>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: '160px', gap: 2 }}>
          <Item>
            <Select
              isMulti
              classNames={'custom-select'}
              name="experience"
              options={employeExperience}
              className="basic-multi-select"
              placeholder="Experience"
              classNamePrefix="Experience"
            />
          </Item>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: '160px', gap: 2 }}>
          <Item>
            <Select name="remote" options={jobTypeOptions} className="basic-multi-select" placeholder="Remote" classNamePrefix="Remote" />
          </Item>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: '160px', gap: 2 }}>
          <Item>
            <Select
              isMulti
              name="min"
              classNames={'custom-select'}
              options={minbasePayOptions}
              className="basic-multi-select"
              classNamePrefix="Minimum Base Pay Salary"
              placeholder="Minimum Base Pay Salary"
            />
          </Item>
        </Box>

        <Box sx={{ flexGrow: 1, minWidth: '160px', gap: 2 }}>
          <Item>
            <div class="custom-select-container">
              <div class="custom-select-display">
                <input placeholder="Search Company Name" />
              </div>
            </div>{' '}
          </Item>
        </Box>
      </Grid>
    </Box>
  );
}
