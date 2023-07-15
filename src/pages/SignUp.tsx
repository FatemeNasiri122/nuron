import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignupUserMutation } from "../services/authApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
const SignUp = () => {
    const notify = () => { toast.success('The registration operation was completed successfully', {
        theme: "colored",
    });}

    const [signupUser, { data, isSuccess, isError, isLoading, error }] = useSignupUserMutation();

    const [validPass, setValidPass] = useState(true);

    const [userExist, setUserExist] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const submitForm = async (data: object) => {
        
        if (data?.password !== data?.rePassword) {
            setValidPass(false);
        } else {
            setValidPass(true);
            await signupUser({ firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password, rePassword: data.rePassword, agree: data.agree });
            console.log(data);
            console.log(data,isSuccess,isError,isLoading,error)
        }
    }
console.log(error);
     useEffect(() => {
        // ?! 
         if (isSuccess) {
             debugger;
             console.log(data);
             notify();
             navigate("/login");
         }
         if (error?.status === 400) {
             setUserExist(error?.data?.userExist);
         } else {
             setUserExist("");
         }

    }, [isSuccess]);

  return (
      <>
          <ToastContainer />
          <div className="py-11 flex flex-col sm:flex-row items-center sm:justify-between border-b dark:border-b-gray-border border-b-color-border-white">
              <span className="inline-block sm:text-xl font-bold dark:text-white"> Sign up</span>
              <span className="mt-2 sm:mt-0">
                  <span className="dark:text-color-body text-color-light-body">Home</span>
                  <span className="dark:text-color-body text-color-light-body mx-3">{" > "}</span>
                  <span className="dark:text-white">Sign up</span>  
              </span>
          </div>
          <div className="py-20 lg:w-1/2 m-auto">
              <div className='border dark:border-gray-border border-color-border p-6 rounded-md bg-white dark:bg-background-color-2'>
                  <p className="sm:text-2xl font-bold dark:text-white mb-5">Sign up</p>
                  <form onSubmit={handleSubmit((data) => submitForm(data))} noValidate>
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">First name</label>
                      <input type="text" className='input'
                        {...register("firstName", {
                            required: "First name is required",
                            minLength: {
                            value: 3,
                            message: "first name must have at least 8 characters"
                            },
                            maxLength: {
                            value: 64,
                            message: "first name must have at most 128 characters"
                        }
                        })} />
                      {errors.firstName?.message && (
                            <small className="error-text">{errors?.firstName?.message}</small>
                      )}
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Last name</label>
                      <input type="text" className='input'
                        {...register("lastName", {
                            required: "Last name is required",
                            minLength: {
                            value: 3,
                            message: "last name must have at least 8 characters"
                            },
                            maxLength: {
                            value: 64,
                            message: "last name must have at most 128 characters"
                        }
                        })} />
                      {errors.firstName?.message && (
                            <small className="error-text">{errors?.lastName?.message}</small>
                       )}
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Email address</label>
                      <input type="email" className='input'
                        {...register("email", {
                            required: "Email is required",
                            minLength: {
                            value: 3,
                            message: "email must have at least 8 characters"
                            },
                            maxLength: {
                            value: 264,
                            message: "email must have at most 128 characters"
                        },
                        pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                        }
                      })} />
                      {errors.email?.message && (
                            <small className="error-text">{errors?.email?.message}</small>
                       )}
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Create password</label>
                      <input type="password" className='input'
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters"
                          },
                          maxLength: {
                            value: 128,
                            message: "Password must have at most 128 characters"
                          }
                      })} 
                      />
                      {errors.password?.message && (
                            <small className="error-text">{errors?.password?.message}</small>
                      )}
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Re password</label>
                      <input type="password" className='input'
                      {...register("rePassword", {
                        required: "Re password is required",
                        minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters"
                          },
                          maxLength: {
                            value: 128,
                            message: "Password must have at most 128 characters"
                        }
                        },  
                        )} 
                      />
                      {errors.password?.message && (
                            <small className="error-text">{errors?.rePassword?.message}</small>
                      )}
                      {!validPass && (
                            <small className="error-text">password and re pasword does not match</small>
                       )}
                      <div className="flex items-center mb-4">
                          <input {...register("agree", { required: "check this box is required", })} id="default-checkbox" type="checkbox" value="" className="check-box"/>
                        <label htmlFor="default-checkbox" className="ml-2 text-sm dark:text-color-body text-color-light">Allow to all tearms & condition</label>
                      </div>
                      {errors.agree?.message && (
                            <small className="error-text">{errors?.agree?.message}</small>
                      )}
                      {userExist && (
                            <small className="error-text">{userExist}</small>
                      )}
                      <div className="flex mt-6">
                          <button type="submit" className="w-[90px] h-[45px] bg-color-primary transition  hover:bg-primary-alta rounded-lg flex justify-center items-center text-white">Sign Up</button>
                          <Link to="/login" className="w-[90px] h-[45px] hover:bg-color-primary transition bg-primary-alta rounded-lg flex justify-center items-center text-white ml-6">Log In</Link>
                      </div>
                  </form>
              </div>
          </div>
    </>
  )
}

export default SignUp