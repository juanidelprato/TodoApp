import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask } from '../features/tasks/taskSlice';

export const TaskList = () => {
  const stateTasks = useSelector((st) => st.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(stateTasks));
  }, [stateTasks]);

  return (
    <div className='flex justify-center'>
      <div className='w-[70%]'>
        <header className='flex w-[80%] items-center justify-between mx-auto py-4'>
          <h2>
            Tasks:{' '}
            <span className='font-bold text-xl'>{stateTasks.length}</span>
          </h2>
          <Link
            to='/create-task'
            className='bg-indigo-600 px-4 py-2 rounded-md text-md hover:bg-indigo-700'
          >
            Add Task
          </Link>
        </header>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 flex-wrap'>
          {stateTasks.map((task) => (
            <div key={task.id} className='bg-neutral-700 p-4 rounded-md'>
              <header className='flex justify-between items-center mb-4 border-b-2 border-neutral-600/40'>
                <h3>{task.title}</h3>
                <div className='flex gap-x-2'>
                  <button
                    className='bg-red-600 px-2 py-1 rounded-md hover:bg-red-700'
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`edit-task/${task.id}`}
                    className='bg-zinc-600 px-2 py-1 rounded-md hover:bg-zinc-900'
                  >
                    Edit
                  </Link>
                </div>
              </header>

              <p className='text-left'>{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
