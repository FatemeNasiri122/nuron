import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useSetEditProfileInformationMutation } from '../../services/userApi';
import { useAppDispatch } from '../../app/hooks';
import { setUser } from '../../features/auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditPersonalInformation = () => {
  const notify = () => { toast.success('The information was edited successfully', {
        theme: "colored",
  });
  }
  const user = useSelector(state => state.auth.user);
  console.log(user)
  const [setEditProfileInformation, { isError, isSuccess, error }] = useSetEditProfileInformationMutation();
  const dispatch = useAppDispatch();
  const [editedUser, setEditedUser] = useState();

  const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty },
  } = useForm();
  
  const submitForm = async (data: object) => {
    setEditedUser(data);
    await setEditProfileInformation(data);
  }
  
  useEffect(() => {
    if (isSuccess) {
      const { firstName: first_name, lastName: last_name, phoneNumber: phone_number, ...other } = editedUser;
      const newUser = { ...user, first_name, last_name, phone_number, ...other };
      dispatch(setUser(newUser));
      notify();
    }
    if (isError) {
      console.log(error);
    }
  }, [isError, isSuccess]);
  console.log(isDirty);
  
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
    <div className="p-6 border border-color-border rounded-md">
        <form onSubmit={handleSubmit((data) => submitForm(data))} noValidate>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">First name*</label>
            <input type="text" className='input'
              {...register("firstName", {
                      required: "First name is required",
                      minLength: {
                      value: 3,
                      message: "first name must have at least 3 characters"
                      },
                      maxLength: {
                      value: 64,
                      message: "first name must have at most 64 characters"
                  }
                  })}
                  defaultValue={user["first_name"]}
            />
                {errors.firstName?.message && (
                      <small className="error-text">{errors?.firstName?.message}</small>
                )}
          </div>
          <div>
            <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Last name*</label>
            <input type="text" className='input'
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 3,
                  message: "last name must have at least 3 characters"
                },
                maxLength: {
                  value: 64,
                  message: "last name must have at most 64 characters"
                }
              })}
              defaultValue={user["last_name"]}
            />
            {errors.lastName?.message && (
                  <small className="error-text">{errors?.lastName?.message}</small>
             )}
          </div>  
          <div className="lg:col-span-2">
            <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Email address*</label>
             <input type="email" className='input'
              {...register("email", {
                  required: "email is required",
                   minLength: {
                   value: 3,
                   message: "email must have at least 3 characters"
                   },
                   maxLength: {
                   value: 254,
                   message: "email must have at most 254 characters"
               },
               pattern: {
               value: /\S+@\S+\.\S+/,
               message: "Entered value does not match email format"
               }
               })}
              defaultValue={user.email}
            />
             {errors.email?.message && (
                  <small className="error-text">{errors?.email?.message}</small>
             )}
          </div>
          <div className="lg:col-span-2">
            <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Edit Your Bio</label>
              <textarea
                className="input"
                name=""
                id=""
                {...register("bio", {
                minLength: {
                value: 0,
                message: ""
                  },
                  maxLength: {
                    value: 300,
                    message: "bio must have at most 300 characters"
                  }
              })} 
                cols="30"
                rows="4"
                defaultValue={user.bio}
                >
              </textarea>
              {errors.bio?.message && (
                    <small className="error-text">{errors?.bio?.message}</small>
              )}
          </div>
          <div>
            <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Your Role</label>
              <input type="text" className='input'
              {...register("role", {
                minLength: {
                value: 0,
                message: ""
                  },
                  maxLength: {
                    value: 64,
                    message: "role must have at most 64 characters"
                  }
              })}
              defaultValue={user.role}
              />
              {errors.password?.message && (
                    <small className="error-text">{errors?.password?.message}</small>
              )}
          </div>              
          <div>
            <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Gender*</label>
            <select defaultValue={user.gender} className="input" {...register("gender",{required: "gender is required"})}>
                <option value="">Select Your Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Third Gender">Third Gender</option>
            </select>
            {errors.gender?.message && (
                    <small className="error-text">{errors?.gender?.message}</small>
              )}
          </div>
          <div>
            <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Currency*</label>
            <select defaultValue={user.currency} className="input" {...register("currency",{required: "currency is required"})}>
                <option value="">Select Your Currency</option>
                <option value="($)USD">($)USD</option>
                <option value="wETH">wETH</option>
                <option value="BIT Coin">BIT Coin</option>
            </select>
            {errors.currency?.message && (
                    <small className="error-text">{errors?.currency?.message}</small>
              )}
          </div>
          <div>
            <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Phone Number*</label>
              <input type="text" className='input'
              {...register("phoneNumber", {
                required: "phone number is required",
                pattern: {
                  // value: /^\\+\\d+$/,
                  // value: /^\\+?[0-9]\d{1,20}$/,
                  message: "fails to match the required pattern"
                }
              })}
              defaultValue={user["phone_number"]}
              />
              {errors.phoneNumber?.message && (
                    <small className="error-text">{errors?.phoneNumber?.message}</small>
              )}
          </div>
          <div>
            <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Location*</label>
            <select defaultValue={user.location} className="input"  {...register("location",{required: "location is required"})}>
                <option value="">Select Your Location</option>
                <option value="United State">United State</option>
                <option value="KATAR">KATAR</option>
                <option value="Canada">Canada</option>
            </select>
            {errors.location?.message && (
                    <small className="error-text">{errors?.location?.message}</small>
              )}
          </div>
          <div>
            <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Address</label>
              <input type="text" className='input'
              {...register("address", {
                minLength: {
                value: 0,
                message: ""
                  },
                  maxLength: {
                    value: 128,
                    message: "role must have at most 128 characters"
                  }
              })}
                defaultValue={user.address}
              />
          </div>
          <div className="flex justify-end mt-6 lg:col-span-2">
            <button onClick={() => reset()} disabled={!isDirty} type="submit" className={`w-[90px] mr-5 ${isDirty ? "btn" : "text-white bg-[#5f8794] rounded-md h-[45px]"}`}>cancel</button>
              <button disabled={!isDirty} type="submit" className={`w-[90px] ${isDirty ? "btn" : "text-white bg-[#5f8794] rounded-md h-[45px]"}`}>save</button>
          </div>
        </div>  
      </form>
    </div>
    </>
    
  )
}

export default EditPersonalInformation;