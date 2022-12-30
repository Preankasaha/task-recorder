import React from 'react';

import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import Head from 'next/head'

const CompletedTask = ({ completeTask, handleUpdateInComplete, handleCompleteTaskDelete }) => {
  const { _id, title, description, status } = completeTask;
  console.log(_id);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const router = useRouter();

  return (
    <>

      <Head>
        <title>Completed Task</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mx-10 my-5'>
        <div className='w-50'>
          {/*<!-- Component: Basic image card --> */}
          <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
            {/*  <!--  Image --> */}
            <figure>
              <img
                src="https://picsum.photos/id/69/800/600"
                alt="card image"
                className="aspect-video w-full"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="">
                <h3 className="text-xl font-medium text-emerald-800 text-center uppercase my-3">
                  Task: {title}
                </h3>
                <p className="font-medium text-slate-800 text-left">
                  Description: {description}
                </p>
              </header>
            </div>

          </div>

          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label"> <span className="label-text text-black">Comment</span></label>
              <input type="text" placeholder='Enter Comment' {...register("comment")} className="input input-bordered border-4 w-full my-4 max-w-xs" />
              {errors.comment && <p>{errors.comment.message
              }</p>}
            </div>
            <div className="flex justify-end gap-2 p-6 pt-0 my-4">
              <button className="inline-flex h-8 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-500 px-4 text-xs font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Comment</span>
              </button>

            </div>
          </form>

          {/*<!-- End Basic image card --> */}
          {/*  <!-- Action base sized with lead icon buttons  --> */}
          <div className="flex justify-end gap-2 p-6 pt-0 my-4">
            <button onClick={() => handleUpdateInComplete(_id)} className="inline-flex h-8 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-4 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
              <span className="order-2">Not Complete</span>

            </button>

          </div>
          <div className="flex justify-end gap-2 p-6 pt-0 my-4">

            <button onClick={() => handleCompleteTaskDelete(_id)} className="inline-flex h-8 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-red-500 px-4 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-red-600 focus:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300 disabled:shadow-none">
              <span className="order-2">Delete</span>

            </button>


          </div>
          {/* <div className="flex justify-end gap-2 p-6 pt-0 my-4">

        </div> */}
        </div>
      </div>
    </>
  );
};

export default CompletedTask;