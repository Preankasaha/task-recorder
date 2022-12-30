import React from 'react';
import { useRouter } from 'next/dist/client/router';

const HomeMyTask = () => {
  const router = useRouter();
  const handleTask = () => {
    router.push('/addtask')
  }
  return (
    <div className="flex justify-center gap-2 py-14 my-24">
      <>

        {/*<!-- Component: Basic card --> */}
        <div className="overflow-hidden rounded bg-white text-slate-500 ">
          < div className="p-6" >

            <h3 className="mb-4 text-3xl text-center font-medium text-emerald-800 uppercase">
              Welcome to Task Recoder
            </h3>
            <p className='text-amber-700 text-xl text-center my-4'>
              Task Recoder Is A Task Management App.<br></br>
              You Can Easily Keep Record Of Your Tasks.
            </p>
            <div className="flex justify-end gap-2 p-6 pt-0 my-4">
              <button onClick={handleTask} className="inline-flex h-8 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-500 px-4 text-xs font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span className="order-2">Add Task</span>

              </button>

            </div>
          </div >
        </div >
        {/*<!-- End Basic card --> */}
      </>
    </div >
  );
};

export default HomeMyTask;