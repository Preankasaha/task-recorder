import React from 'react';
import { useForm } from 'react-hook-form';
import { taskfunc } from './auth/api';
import toast from 'react-hot-toast';

const addtask = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const imageHostKey = process.env.NEXT_PUBLIC_Imagebb_key;
  // console.log(imageHostKey);

  const handleAddTask = data => {
    console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url =
      fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
        method: 'POST',
        body: formData
      })
    //   .then(res => res.json())
    //   .then(imgData => console.log(imgData.data.url))
    // if (imgData.success) {
    //   console.log(imgData.data.url);
    const taskInfo = {
      title: data.title,
      description: data.description,
      status: "incomplete"
      // image: imgData.data.url
    }
    // }
    // taskfunc(formData)
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))

    fetch('http://localhost:5000/addtasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(taskInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          console.log(task);
          toast.success('Thanks for adding tasks')

        }
      })

      .catch(error => console.error(error));

  }
  return (
    <div className='flex justify-center my-8'>

      <form onSubmit={handleSubmit(handleAddTask)}>
        <h2 className='uppercase text-center text-2xl my-8'>Keep Record of Your Task</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label"> <span className="label-text">Task Title</span></label>
          <input type="text" {...register("title", {
            required: "task title is Required"
          })} className="input input-bordered border-4 w-full max-w-xs my-4" />
          {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label"> <span className="label-text">Task Description</span></label>
          <input type="text" {...register("description", {
            required: "task title is Required"
          })} className="input input-bordered border-4 w-full max-w-xs my-4" />
          {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
        </div>
        {/* <div className="form-control w-full max-w-xs my-4">
          <label className="label"> <span className="label-text">Photo</span></label>
          <input type="file" {...register("image", {
            required: "Photo is Required"
          })} className="input input-bordered w-full max-w-xs my-4" />
          {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
        </div> */}

        <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap bg-emerald-50 text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
          <span>Add Task</span>
        </button>

      </form>
    </div >
  );
};

export default addtask;

// export const getStaticProps = () => {
//   const imageKey = process.env.NEXT_APP_Imagebb_key;
//   return {
//     props: {
//       key: imageKey
//     }
//   }
// }