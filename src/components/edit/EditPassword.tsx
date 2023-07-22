import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useSetEditPasswordMutation } from '../../services/userApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditPassword = () => {
  const notify = () => { toast.success('Password changed successfully', {
        theme: "colored",
  });
  }

  const [setEditPassword, { isError, isSuccess, error }] = useSetEditPasswordMutation();
  const [incorrectOldPassword, setIncorrectOldPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");

  const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
  } = useForm();
  
  const submitForm = async (data: object) => {
    setMatchPassword("");
    setIncorrectOldPassword("");
    if (data.password !== data.rePassword) {
      setMatchPassword("password does not match the confirm password");
      return;
    }
    await setEditPassword(data);
  }
  
  useEffect(() => {
    if (isSuccess) {
      notify();
      reset();
    }
    if (isError && error?.status === 400) {
      setIncorrectOldPassword(error?.data?.incorrectPassword);
    }
  }, [isError, isSuccess]);

  return (
    <>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
      <div className="p-6 border border-color-border rounded-md bg-white dark:bg-background-color-1">
      <h1 className="dark:text-white text-xl font-bold">Create Your Password</h1>
      <p className="dark:text-color-body text-color-light-body my-3 border-b border-b-light-gray dark:border-b-gray-border pb-5">Passwords are a critical part of information and network security. Passwords serve to protect user accounts but a poorly chosen password, if compromised, could put the entire network at risk.</p>
        <form onSubmit={handleSubmit((data) => submitForm(data))} noValidate>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Enter old password</label>
            <input type="password" className='input'
              {...register("oldPassword", {
                required: "Old password is required",
                minLength: {
                  value: 8,
                  message: "Old password must have at least 8 characters"
                },
                maxLength: {
                  value: 128,
                  message: "Old password must have at most 128 characters"
                }
              })}
            />
            {errors.oldPassword?.message && (
                  <small className="error-text">{errors?.oldPassword?.message}</small>
              )}
              {incorrectOldPassword && (
                  <small className="error-text">{incorrectOldPassword}</small>
             )}
          </div>  
          <div>
            <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Create New Password</label>
             <input type="password" className='input'
              {...register("password", {
                  required: "password is required",
                   minLength: {
                   value: 8,
                   message: "password must have at least 8 characters"
                   },
                   maxLength: {
                   value: 128,
                   message: "password must have at most 128 characters"
               },
               })}
            />
             {errors.password?.message && (
                  <small className="error-text">{errors?.password?.message}</small>
              )}
          </div>
          <div className="lg:col-span-2">
            <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Confirm Password </label>
              <input type="password" className='input'
              {...register("rePassword", {
                  required: "Confirm password is required",
                   minLength: {
                   value: 8,
                   message: "Confirm password must have at least 8 characters"
                   },
                   maxLength: {
                   value: 128,
                   message: "password must have at most 128 characters"
               },
               })}
            />
             {errors.rePassword?.message && (
                  <small className="error-text">{errors?.rePassword?.message}</small>
              )}
              {matchPassword && (
                  <small className="error-text">{matchPassword}</small>
             )}
          </div>
          <div className="flex justify-end mt-6 lg:col-span-2">
            <button type="submit" className="w-[90px] btn mr-4">cancel</button>
            <button type="submit" className="w-[90px] btn">save</button>
          </div>
        </div>  
      </form>
    </div>
  </>
    
  )
}

export default EditPassword;