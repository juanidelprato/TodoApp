import { TodoRouter } from './router/TodoRouter';

export const App = () => {
  return (
    <div className='bg-zinc-900 h-screen text-white'>
      <h1 className='text-3xl font-bold py-8 mx-auto'>Todo App</h1>
      <TodoRouter />
    </div>
  );
};
