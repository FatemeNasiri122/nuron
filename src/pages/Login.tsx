import { Checkbox } from 'antd';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import  google from "../assets/images/icons/google.png";
import  facebook from "../assets/images/icons/facebook.png";
import  twitter from "../assets/images/icons/tweeter.png";
import  linkdin from "../assets/images/icons/linkedin.png";
import { useLoginUserMutation } from '../services/authApi';
import {useEffect} from "react"
import { useAppDispatch } from '../app/hooks';
import { setUser } from '../features/auth/authSlice';

type Props = {}

const Login = (props: Props) => {
  

    const [loginUser, { data, isSuccess, isError, isLoading, error }] = useLoginUserMutation();
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitData = async (data) => {
        console.log(data);
        const login = { email : data.email, password: data.password };
        await loginUser(login);
    }

    useEffect(() => {
        // ?!
        if (isSuccess) {
            dispatch(setUser({token: data.token, name: data.name}))
        }
    }, [isSuccess]);

  return (
      <>
          <div className="py-11 flex flex-col sm:flex-row items-center sm:justify-between border-b dark:border-b-gray-border border-b-color-border-white">
              <span className="inline-block sm:text-xl font-bold dark:text-white">Nuron Login</span>
              <span className="mt-2 sm:mt-0">
                  <span className="dark:text-color-body text-color-light-body">Home</span>
                  <span className="dark:text-color-body text-color-light-body mx-3">{" >"}</span>
                  <span className="dark:text-white">Nuron Login</span>  
              </span>
          </div>
          <div className="py-20 lg:px-36 flex flex-col lg:flex-row">
              <div className='border dark:border-gray-border border-color-border p-6 rounded-md bg-white dark:bg-background-color-2'>
                  <p className="sm:text-2xl font-bold dark:text-white mb-5">Login</p>
                  <form onSubmit={handleSubmit((data) => {submitData(data)})} noValidate>
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Email address</label>
                      <input type="email" className='input'
                        {...register("email", {
                        required: "Email is required",
                        validate: {
                        maxLength: (v) =>
                        v.length <= 50 || "The email should have at most 50 characters",
                        matchPattern: (v) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "Email address must be a valid address",
                        },
                      })} />
                      {errors?.email?.message && (
                            <small className="block text-[red] mb-2">{errors?.email?.message}</small>
                       )}
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Password</label>
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
                        }})} 
                      />
                      {errors?.password?.message && (
                            <small className="block text-[red] mb-2">{errors?.password?.message}</small>
                       )}   
                      <div className="flex items-center mb-4">
                          <input {...register("remember")} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="default-checkbox" className="ml-2 text-sm dark:text-color-body text-color-light">Remember me later</label>
                      </div>
                      <div className="flex mt-6">
                          <button type="submit" className="w-[90px] h-[45px] bg-color-primary transition  hover:bg-primary-alta rounded-lg flex justify-center items-center text-white">Log In</button>
                          <button type="submit" className="w-[90px] h-[45px] hover:bg-color-primary transition bg-primary-alta rounded-lg flex justify-center items-center text-white ml-6">Sign Up</button>
                      </div>
                  </form>
              </div>
              {/* <div className='w-1/2 border dark:border-gray-border border-color-border p-6 rounded-md bg-white dark:bg-background-color-2 ml-10'>
                  <p className="sm:text-2xl font-bold dark:text-white mb-5">Another way to log in</p>
                  <p className="dark:text-color-body text-color-light-body">Lorem ipsum dolor sit, amet sectetur adipisicing elit.cumque.</p>
                  <Link to="/">
                      <div className="another-login">
                          <img className="w-7 h-7 mr-5" src={google} alt="" />
                          Log in with google
                      </div>
                  </Link>
                  <Link to="/">
                      <div className="another-login">
                          <img className="w-7 h-7 mr-5" src={facebook} alt="" />
                          Log in with facebook
                      </div>
                  </Link>
                  <Link to="/">
                      <div className="another-login">
                          <img className="w-7 h-7 mr-5" src={twitter} alt="" />
                          Log in with twitter
                      </div>
                  </Link>
                  <Link to="/">
                      <div className="another-login">
                          <img className="w-7 h-7 mr-5" src={linkdin} alt="" />
                          Log in with linkdin
                      </div>
                  </Link>
              </div> */}
          </div>
    </>
  )
}

export default Login