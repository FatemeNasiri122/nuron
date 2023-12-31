import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from '../services/norunApi';
import {useEffect, useState} from "react"
import { useAppDispatch } from '../app/hooks';
import { setLoginUser, setUser } from '../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useGetUserQuery } from '../services/userApi';
import TitlePage from '../components/TitlePage';
import { useSelector } from 'react-redux';

const Login = () => {
  
    const [loginUser, { data: userData, isSuccess: userSuccess, isError: userError, error }] = useLoginUserMutation();
    const dispatch = useAppDispatch();
    const {user, token} = useSelector(state => state.auth);
    console.log(user);
    const [incorrectEmailOrPassword, setIncorrectEmailOrPassword] = useState("");
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitData = async (data: object) => {
        console.log(data);
        await loginUser({ email : data.email , password: data.password });
    }
    const { isSuccess, data, status } = useGetUserQuery(token);

    useEffect(() => {
        // ?!
        if (userSuccess) {
            console.log(userData);
            dispatch(setLoginUser({ token: userData.token }));
        }
        console.log(error);
        if (error?.data?.userOrPassword) {
            setIncorrectEmailOrPassword(error?.data?.userOrPassword);
        } else {
            setIncorrectEmailOrPassword("");
        }
    }, [error, userData, userSuccess, userError]);

    useEffect(() => {
        debugger
        if (status === "fulfilled") {
            debugger
            dispatch(setUser(data));
            navigate("/")
        }
    },[status])

  return (
      <>
          <TitlePage title="Nuron Login" />
          <div className="py-20 lg:w-1/2 m-auto">
              <div className='border dark:border-gray-border border-color-border p-6 rounded-md bg-white dark:bg-background-color-2'>
                  <p className="sm:text-2xl font-bold dark:text-white mb-5">Login</p>
                  <form onSubmit={handleSubmit((data) => {submitData(data)})} noValidate>
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
                      {errors?.email?.message && (
                            <small className="error-text">{errors?.email?.message}</small>
                       )}
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Password</label>
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
                        }
                        },  
                        )}  
                      />
                      {errors?.password?.message && (
                            <small className="error-text">{errors?.password?.message}</small>
                       )}   
                      
                      <small className="error-text">{incorrectEmailOrPassword}</small>
                      <div className="flex mt-6">
                          <button type="submit" className="w-[90px] h-[45px] bg-color-primary transition  hover:bg-primary-alta rounded-lg flex justify-center items-center text-white">Log In</button>
                          <Link to="/signup" className="w-[90px] h-[45px] hover:bg-color-primary transition bg-primary-alta rounded-lg flex justify-center items-center text-white ml-6">Sign Up</Link>
                      </div>
                  </form>
              </div>
          </div>
    </>
  )
}

export default Login;