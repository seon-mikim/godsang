import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    todo: {
      id: 0,
      content: "",
      username: "",
      title: "",
    },
    
  };



  export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
      clearTodo: (state) => {
        state.todo = {
          id: 0,
          content: "",
          username: "",
          title: "",
        };
      },
    }
})

export const { clearTodo } = todoSlice.actions;
export default todoSlice.reducer;