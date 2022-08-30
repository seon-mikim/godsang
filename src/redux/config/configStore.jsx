import { configureStore } from "@reduxjs/toolkit";
import todo from "../modules/todoSlice";
import todos from "../modules/todosSlice"
import user from '../modules/userSlice'

const store = configureStore({
    reducer: {
      todos,
      user,
      todo,
    },
  });
  
  export default store;
  