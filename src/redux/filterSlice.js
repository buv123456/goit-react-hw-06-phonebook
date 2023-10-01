const { createSlice } = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export const filterReducer = slice.reducer;
