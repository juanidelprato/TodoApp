import { Routes, Route, Navigate } from 'react-router-dom';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';

export const TodoRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<TaskList />} />
      <Route path='/create-task' element={<TaskForm />} />
      <Route path='/edit-task/:id' element={<TaskForm />} />

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
