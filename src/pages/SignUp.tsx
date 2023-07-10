import { useState } from "react";
import { Checkbox } from 'antd';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import  google from "../assets/images/icons/google.png";
import  facebook from "../assets/images/icons/facebook.png";
import  twitter from "../assets/images/icons/tweeter.png";
import  linkdin from "../assets/images/icons/linkedin.png";

type Props = {}

const SignUp = (props: Props) => {
    const [validPass, setValidPass] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitForm = (data) => {
        console.log(data);
        if (data?.password !== data?.rePassword) {
            setValidPass(false);
        } else {
            setValidPass(true);
        }
    }

  return (
      <>
          <div className="py-11 flex flex-col sm:flex-row items-center sm:justify-between border-b dark:border-b-gray-border border-b-color-border-white">
              <span className="inline-block sm:text-xl font-bold dark:text-white"> Sign up</span>
              <span className="mt-2 sm:mt-0">
                  <span className="dark:text-color-body text-color-light-body">Home</span>
                  <span className="dark:text-color-body text-color-light-body mx-3">></span>
                  <span className="dark:text-white">Sign up</span>  
              </span>
          </div>
          <div className="py-20 lg:px-36 flex flex-col lg:flex-row">
              <div className='w-1/2 border dark:border-gray-border border-color-border p-6 rounded-md bg-white dark:bg-background-color-2'>
                  <p className="sm:text-2xl font-bold dark:text-white mb-5">Sign up</p>
                  <form onSubmit={handleSubmit((d) => submitForm(d))} noValidate>
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">First name</label>
                      <input type="text" className='input'
                        {...register("firstName", {
                            required: "First name is required",
                        })} />
                      {errors.firstName?.message && (
                            <small className="block text-[red]">{errors.firstName.message}</small>
                      )}
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Last name</label>
                      <input type="text" className='input'
                        {...register("lastName", {
                            required: "Last name is required",
                        })} />
                      {errors.firstName?.message && (
                            <small className="block text-[red]">{errors.lastName.message}</small>
                       )}
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
                      {errors.email?.message && (
                            <small className="block text-[red]">{errors.email.message}</small>
                       )}
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Create password</label>
                      <input type="password" className='input'
                      {...register("password", {
                        required: "Password is required"})} 
                      />
                      {errors.password?.message && (
                            <small className="block text-[red]">{errors.password.message}</small>
                      )}
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Re password</label>
                      <input type="password" className='input'
                      {...register("rePassword", {
                        required: "Re   password is required"})} 
                      />
                      {errors.password?.message && (
                            <small className="block text-[red]">{errors.rePassword.message}</small>
                      )}
                      {!validPass && (
                            <small className="block text-[red]">password and re pasword does not match</small>
                       )}
                      <div className="mt-6">
                          <Checkbox className='text-color-light-body dark:text-color-body text-xs'>Remember me leter</Checkbox>
                      </div>
                      <div className="flex mt-6">
                          <button type="submit" className="w-[90px] h-[45px] bg-color-primary transition  hover:bg-primary-alta rounded-lg flex justify-center items-center text-white">Log In</button>
                          <button type="submit" className="w-[90px] h-[45px] hover:bg-color-primary transition bg-primary-alta rounded-lg flex justify-center items-center text-white ml-6">Sign Up</button>
                      </div>
                  </form>
              </div>
              <div className='w-1/2 border dark:border-gray-border border-color-border p-6 rounded-md bg-white dark:bg-background-color-2 ml-10'>
                  <p className="sm:text-2xl font-bold dark:text-white mb-5">Another way to sign up</p>
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
              </div>
          </div>
    </>
  )
}

export default SignUp