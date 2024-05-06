import React, { useCallback, useEffect } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Select from 'react-select';
import {
  employeExperience,
  employesOptions,
  jobTypeOptions,
  minbasePayOptions,
  roleOptions,
  techStackOptions,
} from '../filterData/filterData';
import { useDispatch } from 'react-redux';
import {
  setRoleFilter,
  setNoOfEmployeesFilter,
  setTechStackFilter,
  setCompanyNameFilter,
  setEmployeeExperienceFilter,
  setMinBasePayFilter,
  resetFilters,
} from '../features/jobs/jobsSlice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

export default function Filter() {
  const dispatch = useDispatch();

  const handleRoleChange = useCallback(
    selectedOptions => {
      dispatch(setRoleFilter(selectedOptions));
    },
    [dispatch]
  );

  const handleNoOfEmployeesChange = useCallback(
    selectedOptions => {
      dispatch(setNoOfEmployeesFilter(selectedOptions));
    },
    [dispatch]
  );

  const handleTechStackChange = useCallback(
    selectedOptions => {
      dispatch(setTechStackFilter(selectedOptions));
    },
    [dispatch]
  );

  const handleCompanyNameChange = useCallback(
    event => {
      dispatch(setCompanyNameFilter(event.target.value));
    },
    [dispatch]
  );

  const handleEmployeeExperienceChange = useCallback(
    selectedOption => {
      dispatch(setEmployeeExperienceFilter(selectedOption));
    },
    [dispatch]
  );

  const handleMinBasePayChange = useCallback(
    selectedOption => {
      dispatch(setMinBasePayFilter(selectedOption));
    },
    [dispatch]
  );

  return (
    <Box component="div" sx={{ p: 2 }} my={4} mx={4} gap={2}>
      <Grid container spacing={2}>
        <Box sx={{ flexGrow: 1, minWidth: '160px', gap: 2 }}>
          <Item>
            <Select
              isClearable={true}
              isMulti
              name="role"
              onChange={handleRoleChange}
              options={roleOptions}
              className="basic-multi-select"
              placeholder="Roles"
              classNamePrefix="select"
            />
          </Item>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: '160px', gap: 2 }}>
          <Item>
            <Select
              isMulti
              name="employees"
              isClearable={true}
              options={employesOptions}
              onChange={handleNoOfEmployeesChange}
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
              classNames={'custom-select'}
              isClearable={true}
              name="experience"
              options={employeExperience}
              onChange={handleEmployeeExperienceChange}
              className="basic-multi-select"
              placeholder="Experience"
              classNamePrefix="Experience"
            />
          </Item>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: '160px', gap: 2 }}>
          <Item>
            <Select
              name="remote"
              isClearable={true}
              options={jobTypeOptions}
              className="basic-multi-select"
              placeholder="Remote"
              classNamePrefix="Remote"
            />
          </Item>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: '160px', gap: 2 }}>
          <Item>
            <Select
              name="techstack"
              options={techStackOptions}
              isClearable={true}
              onChange={handleTechStackChange}
              isMulti
              className="basic-multi-select"
              placeholder="Tech Stack"
              classNamePrefix="Tech Stack"
            />
          </Item>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: '160px', gap: 2 }}>
          <Item>
            <Select
              name="minbasePaySalary"
              classNames={'custom-select'}
              options={minbasePayOptions}
              isClearable={true}
              onChange={handleMinBasePayChange}
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
                <input placeholder="Search Company Name" name="comp" onChange={handleCompanyNameChange} />
              </div>
            </div>{' '}
          </Item>
        </Box>
      </Grid>
    </Box>
  );
}
