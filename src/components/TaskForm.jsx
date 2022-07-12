import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useForm } from '../hooks/useForm';
import { addTask, updateTask } from '../features/tasks/taskSlice';

export const TaskForm = () => {
  const { formState, setFormState, title, description, onInputChange } =
    useForm({
      title: '',
      description: '',
    });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((st) => st.tasks);

  const onSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(updateTask(formState));
    } else {
      dispatch(addTask({ ...formState, id: uuid() }));
    }
    navigate('/');
  };

  useEffect(() => {
    if (params.id) {
      setFormState(tasks.find((tk) => tk.id === params.id));
    }
  }, []);

  return (
    <div className='flex justify-center items-center h-[80%] text-left'>
      <form onSubmit={onSubmit} className='bg-zinc-800 max-w-lg p-4 w-full'>
        <div className='flex justify-between items-center mt-2 mb-8'>
          <h2 className='text-2xl font-bold'>New Task</h2>
          <Link
            to='/'
            className='bg-red-700 px-4 py-2 rounded-md hover:bg-red-800'
          >
            Back
          </Link>
        </div>

        <label htmlFor='title' className='block font-bold text-sm'>
          Title:
        </label>
        <input
          type='text'
          name='title'
          placeholder='title'
          className='w-full p-2 rounded-md bg-zinc-600 mt-2 mb-4'
          onChange={onInputChange}
          value={title}
        />

        <label htmlFor='description' className='block font-bold text-sm'>
          Description:
        </label>
        <textarea
          name='description'
          id=''
          placeholder='description'
          className='w-full p-2 rounded-md bg-zinc-600 mt-2 mb-4'
          onChange={onInputChange}
          value={description}
        ></textarea>

        <div className='flex justify-center items-center'>
          <button className='bg-indigo-700 w-[40%] py-4 rounded-md hover:bg-indigo-800 '>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
