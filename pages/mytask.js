import { useRouter } from 'next/dist/client/router';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import MyTask from '../Components/MyTask';
import { updateCompleteTask } from './api/api';



import { AuthContext } from './authProvider';


const mytask = () => {
  const [myTasks, setMyTasks] = useState([]);
  console.log(myTasks);
  const { user } = useContext(AuthContext);
  // console.log(user);
  const router = useRouter();

  useEffect(() => {
    fetch(`https://task-management-server-rho.vercel.app/tasks/${user?.email}?status=incomplete`)
      .then(res => res.json())
      .then(data => setMyTasks(data))
  }, [user?.email])


  const handleUpdateComplete = id => {
    updateCompleteTask(id)
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success('complete task updated')
          router.push('/completedtask');
        }
      })
  }


  const handleTaskDelete = id => {
    console.log(id);
    fetch(`https://task-management-server-rho.vercel.app/deleted/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("You have deleteted the task successfully")

        }
      })

  }
  return (

    <div>
      <h2 className='text-2xl text-emerald-800 text-center uppercase mt-8'>Incomplete Task</h2>
      <h3 className='text-xl text-amber-500 text-center my-4'>Check The Tasks You Need To Complete</h3>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
        {
          myTasks?.map(myTask => <MyTask
            key={myTask._id}
            myTask={myTask}
            handleTaskDelete={handleTaskDelete}
            handleUpdateComplete={handleUpdateComplete}
          ></MyTask>)
        }

      </div>
    </div>
  );
};

export default mytask;
// export const getStaticProps = async () => {


//   // console.log(user?.email);
//   const res = await fetch(`https://task-management-server-rho.vercel.app/tasks/preansaha@gmail.com?status=incomplete`);
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       myTasks: data
//     }
//   }
// }