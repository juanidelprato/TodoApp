import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

export const taskSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((st) => st.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    updateTask: (state, action) => {
      const { id, title, description } = action.payload;
      const taskFound = state.find((st) => st.id === id);
      taskFound.title = title;
      taskFound.description = description;
    },
  },
});

export const { addTask, deleteTask, updateTask, setTasks } = taskSlice.actions;
export default taskSlice.reducer;
