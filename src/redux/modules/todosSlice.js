import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    error: null,
    isLoading: false,
    isSuccess: false,
};
  
  export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
      clearTodo: (state, action) => {
        state.isSuccess = false;
      },
    },
   })


export const { clearTodo } = todoSlice.actions;
export default todoSlice.reducer;