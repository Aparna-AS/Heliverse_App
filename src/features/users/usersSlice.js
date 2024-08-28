import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import users from '../../mockdata.json';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return users; // Replace with API call if needed
});

const initialState = {
  users: [],
  filteredUsers: [],
  searchQuery: '',
  filters: {
    domain: [],
    gender: [],
    availability: [],
  },
  status: 'idle',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredUsers = filterUsers(state);
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
      state.filteredUsers = filterUsers(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
        state.filteredUsers = filterUsers(state);
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

function filterUsers(state) {
  const { users, searchQuery, filters } = state;
  return users.filter(user => {
    const matchesSearch = searchQuery === '' || `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchQuery);
    const matchesDomain = filters.domain.length === 0 || filters.domain.includes(user.domain);
    const matchesGender = filters.gender.length === 0 || filters.gender.includes(user.gender);
    const matchesAvailability = filters.availability.length === 0 || filters.availability.includes(user.available);
    return matchesSearch && matchesDomain && matchesGender && matchesAvailability;
  });
}

export const { setSearchQuery, setFilters } = usersSlice.actions;

export default usersSlice.reducer;
