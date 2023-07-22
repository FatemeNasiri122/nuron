import React, {useEffect} from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContactUsMutation } from '../../services/norunApi';

const ContactForm = () => {

  const notify = () => { toast.success('Your message has been sent successfully', {
        theme: "colored",
  });
  }

  const notifyError = () => {
    toast.error('Your message was not sent successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });   
  }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
  } = useForm();

  const [contact, {isError, isSuccess}] = useContactUsMutation();
  
  const submitForm = async (data: object) => {
    await contact(data);
  }
  
  useEffect(() => {
    if (isSuccess) {
      notify();
      reset();
    }
    if (isError) {
      notifyError();
    }
  },[isSuccess,isError])

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
    <div className="p-7 bg-white dark:bg-background-color-1 rounded-md lg:w-1/2">
      <h3 className="dark:text-white text-[32px] font-bold mb-8">Contact Us</h3>
     <form onSubmit={handleSubmit((data) => submitForm(data))} noValidate>
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Your Name</label>
                      <input type="text" className='input'
                        {...register("name", {
                            required: "name is required",
                            minLength: {
                            value: 3,
                            message: "name must have at least 3 characters"
                            },
                            maxLength: {
                            value: 128,
                            message: "name must have at most 128 characters"
                        }
                        })} />
                      {errors.name?.message && (
                            <small className="error-text">{errors?.name?.message}</small>
                      )}
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Email address</label>
                      <input type="email" className='input'
                        {...register("email", {
                            required: "Email is required",
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
                      })} />
                      {errors.email?.message && (
                            <small className="error-text">{errors?.email?.message}</small>
                       )}
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">subject</label>
                      <input type="text" className='input'
                      {...register("subject", {
                        required: "subject is required",
                        minLength: {
                        value: 10,
                        message: "subject must have at least 10 characters"
                          },
                          maxLength: {
                            value: 64,
                            message: "subject must have at most 64 characters"
                          }
                      })} 
                      />
                      {errors.subject?.message && (
                            <small className="error-text">{errors?.subject?.message}</small>
                      )}
                      <label className="dark:text-color-body text-color-light-body pt-4" htmlFor="">Write Message </label>
                      <textarea
                        className="input"
                        name=""
                        id=""
                        {...register("message", {
                        required: "message is required",
                        minLength: {
                        value: 10,
                        message: "message must have at least 10 characters"
                          },
                          maxLength: {
                            value: 300,
                            message: "message must have at most 300 characters"
                          }
                      })} 
                        cols="30"
                        rows="4"
                        >
                      </textarea>
                      {errors.subject?.message && (
                            <small className="error-text">{errors?.message?.message}</small>
                      )}
                     <button type="submit" className="w-[140px] h-[45px] bg-color-primary transition  hover:bg-primary-alta rounded-lg flex justify-center items-center text-white">Send Message</button>
      </form>
    </div>
    </>
    
  )
}

export default ContactForm