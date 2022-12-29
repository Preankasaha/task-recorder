import React from 'react';
import MyTask from '../Components/MyTask';

const mytask = ({ myTasks }) => {
  console.log(myTasks);

  const handleDelete = seller => {

    fetch(` https://resale-mobile-server.vercel.app/sellers/${seller._id}`, {
      method: 'DELETE',

    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          console.log('deleted');
          // toast.success(`seller deleted successfully`)

        }
      })
  }
  return (
    <div className='grid grid-cols-1 grid-cols-2 grid-cols-3'>
      {
        myTasks?.map(myTask => <MyTask
          key={myTask._id}
          myTask={myTask}
        ></MyTask>)
      }

    </div>
  );
};

export default mytask;
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/tasks");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      myTasks: data
    }
  }
}