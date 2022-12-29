import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signUpError, setSignUpError] = useState('');
  return (
    <div className='h-[800px] flex justify-center items-center text-white' style={{ backgroundImage: `url("")` }}>
      <div className='w-96 p-7'>
        <h2 className='text-5xl text-center text-emerald-500 font-bold uppercase'>Sign Up</h2>
        <p className='text-xl text-center text-emerald-500 my-4'>If You Are New To This Site, Please Register First</p>
        {/* onSubmit={handleSubmit(handleSignUp)} */}
        <form>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text text-white">Name</span></label>
            <input type="text" placeholder='Enter Name' {...register("name", { required: 'Name is required' })} className="input input-bordered border-4 w-full max-w-xs" />
            {errors.name && <p>{errors.name.message
            }</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text text-white">Email</span></label>
            <input type="email" placeholder='Enter Email' {...register("email", {
              required: 'email is required'
            })} className="input input-bordered border-4 w-full max-w-xs" />
            {errors.email && <p className='text-warning'>{errors.email.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text text-white">Password</span></label>
            <input type="password" placeholder='Enter Password' {...register("password", {
              required: 'password is required',
              minLength: { value: 6, message: "password must be 6 charaters long" },
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/


            })} className="input input-bordered border-4 w-full max-w-xs" />
            {errors.password && <p className='text-warning'>{errors.password.message}</p>}
          </div>

          <div className="flex justify-end gap-2 p-6 pt-0 my-4">
            {/* {loading ? <PrimaryButton>
              <SpinnerXs></SpinnerXs>
            </PrimaryButton>
              :
              <PrimaryButton>Sign Up</PrimaryButton> */}

            <button className="inline-flex h-8 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-500 px-4 text-xs font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <span>Sign Up</span>
            </button>
            {/* } */}
          </div>
        </form>

        <p className='text-emerald-500 text-center'>Already have an account? <Link className='text-secondary' href="/signin">Plz Sign In</Link></p>
        <div className="divider text-emerald-500 my-4 text-center">OR</div>
        {/* onClick={handleGoogleSignIn} */}
        <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-5 text-xs font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">CONTINUE WITH GOOGLE</button>

      </div>
    </div>
  );
};

export default Register;