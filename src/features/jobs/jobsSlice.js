// jobSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async ({ limit, offset }) => {
  const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ limit, offset }),
  });
  const data = await response.json();
  return data;
});
const initialState = {
  role: [],
  noOfEmployees: [],
  employeeExperience: null,
  jobType: null,
  techStack: [],
  minBasePay: null,
  companyName: '',
  items: [],
  allItems: [],
  totalCount: 0,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};
const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    // add reducers for filtering if needed
    setRoleFilter: (state, action) => {
      state.role = action.payload;
      if (action.payload.length !== 0)
        state.items = [...state?.allItems?.filter(item => action?.payload?.map(i => i.value).includes(item.jobRole))];
      else state.items = state.allItems;
    },
    setNoOfEmployeesFilter: (state, action) => {
      state.noOfEmployees = action.payload;
      if (action.payload.length === 0) state.items = state.allItems;
      else state.items = [...state?.allItems?.filter(item => action?.payload?.map(i => i.value).includes(item.employees))];
    },
    setTechStackFilter: (state, action) => {
      state.techStack = action.payload;
      if (action.payload.length === 0) state.items = state.allItems;
      else state.items = [...state?.allItems?.filter(item => action?.payload?.map(i => i.value).includes(item.techstack))];
    },
    setCompanyNameFilter: (state, action) => {
      state.companyName = action.payload;
      if (!action.payload) state.items = state.allItems;
      else
        state.items = [
          ...state?.allItems?.filter(
            item =>
              item?.companyName?.toLowerCase() === action.payload?.toLowerCase() ||
              item?.companyName?.toString().toLowerCase()?.includes(action.payload?.toLowerCase())
          ),
        ];
    },
    setEmployeeExperienceFilter: (state, action) => {
      state.employeeExperience = action.payload;
      if (!action.payload) state.items = state.allItems;
      else
        state.items = [
          ...state?.allItems?.filter(item =>
            action?.payload?.value >= item?.minExp && action?.payload?.value <= item?.maxExp ? true : false
          ),
        ];
    },
    setMinBasePayFilter: (state, action) => {
      state.minBasePay = action.payload;
      if (!action.payload) state.items = state.allItems;
      else
        state.items = [
          ...state?.allItems?.filter(item =>
            action?.payload?.value >= item.minJdSalary && action?.payload?.value <= item?.maxJdSalary ? true : false
          ),
        ];
    },
    resetFilters: state => {
      // Reset filters but keep the items and allItems
      return {
        ...state,
        ...initialState,
        items: state.allItems,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchJobs.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = [...state.items, ...action?.payload?.jdList];
        state.allItems = [...state.allItems, ...action?.payload?.jdList];
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const {
  setRoleFilter,
  setNoOfEmployeesFilter,
  setTechStackFilter,
  setCompanyNameFilter,
  resetFilters,
  setEmployeeExperienceFilter,
  setMinBasePayFilter,
} = jobSlice.actions;
export default jobSlice.reducer;
