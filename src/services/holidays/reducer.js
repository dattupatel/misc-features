import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    holidays: [new Date()]
};

const holidaysSlice = createSlice({
  name: 'holidays',
  initialState,
  reducers: {
    setHolidays(state, action) {
      return {
          ...state,
          holidays: [...action.payload]
      }
    },
  },
})

export const { setHolidays } = holidaysSlice.actions;
export default holidaysSlice.reducer;