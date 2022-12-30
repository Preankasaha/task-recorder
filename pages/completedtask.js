import React, { useContext, useEffect, useState } from 'react';
import CompletedTask from '../Components/CompletedTask';
import { updateInCompleteTask } from './auth/api';
import { AuthContext } from './authProvider';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/dist/client/router';
const completedtask = () => {

  const [completeTasks, setCompleteTasks] = useState([]);

  const { user } = useContext(AuthContext);
  // console.log(user);
  const router = useRouter();
  useEffect(() => {
    fetch(`https://task-management-server-rho.vercel.app/tasks/${user?.email}?status=completed`)
      .then(res => res.json())
      .then(data => setCompleteTasks(data))
  }, [user?.email])

  const handleUpdateInComplete = id => {
    updateInCompleteTask(id)
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success('Incomplete task updated')
          router.push('/mytask');
        }
      })
  }
  return (
    <div>
      <h2 className='text-2xl text-emerald-500 font-bold text-center uppercase mt-8'>Completed Task</h2>
      <h3 className='text-xl text-amber-500 text-center my-4'>Check The Completed Tasks</h3>

      <div className='grid sm:grid-cols-1 mmd:grid-cols-2 lg:grid-cols-3'>
        {
          completeTasks?.map(completeTask => <CompletedTask
            key={completeTask._id}
            completeTask={completeTask}
            handleUpdateInComplete={handleUpdateInComplete}
          ></CompletedTask>)
        }

      </div >
    </div>
  );
};

export default completedtask;

// export const getStaticProps = async () => {
//   const res = await fetch(`https://task-management-server-rho.vercel.app/tasks/preansaha@gmail.com?status=completed`);
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       completeTasks: data
//     }
//   }
// }