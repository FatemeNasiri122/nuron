import React from 'react'
import { CiHeadphones } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import contact from "../assets/images/collection/contact1.png";
import ContactForm from '../components/contact/ContactForm';
import Scroll from '../components/animation/Scroll';
import ContactMap from '../components/contact/ContactMap';
import TitlePage from '../components/TitlePage';

const Contact = () => {

  return (
    <>
      <TitlePage title="Contact With Us" />
      <Scroll>
      <div className='mt-20'>
        <h1 className="dark:text-white text-center text-xl lg:text-4xl font-bold">Quick Contact Address</h1>
        <p className="m-auto text-center dark:text-color-body text-color-light-body mt-5 text-lg">There are many variations of passages of Lorem Ipsum available,</p>
        <p className="m-auto text-center dark:text-color-body text-color-light-body text-lg">but the majority have suffered alteration.
        </p>
      </div>
      </Scroll>
      <Scroll>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-5 mt-5">
          <div className="py-10 px-7 bg-white dark:bg-background-color-1 rounded-lg dark:border border-color-border"> 
            <div className="child:text-color-primary">
              <CiHeadphones size="40px" />
          </div>
          <p className="dark:text-white font-bold mt-2 text-lg">Contact Phone Number</p>
          <a className="block dark:text-white mt-4" href="tel:+444555666777">+444 555 666 777</a>
          <a className="block dark:text-white" href="tel:+222222222333">+222 222 222 333</a>
        </div>
        <div className="py-10 px-7 bg-white dark:bg-background-color-1 rounded-lg dark:border border-color-border"> 
            <div className="child:text-color-primary">
              <AiOutlineMail size="40px" />
          </div>
          <p className="dark:text-white font-bold mt-2 text-lg">Our Email Address</p>
          <a className="block dark:text-white mt-4" href="mailto:nuron@nuron.com">nuron@nuron.com</a>
          <a className="block dark:text-white" href="mailto:admin@nuron.com  ">admin@nuron.com</a>
        </div>
        <div className="py-10 px-7 bg-white dark:bg-background-color-1 rounded-lg dark:border border-color-border"> 
            <div className="child:text-color-primary">
              <HiOutlineLocationMarker size="40px" />
          </div>
          <p className="dark:text-white font-bold mt-2 text-lg">Our Location</p>
          <p className="text-color-light-body dark:text-color-body mt-4">5678 Bangla Main Road, cities 580</p>
          <p className="text-color-light-body dark:text-color-body"> GBnagla, example 54786</p>
        </div>
      </div>
      </Scroll>
      <Scroll>
        <div className=" flex flex-col lg:flex-row mt-12 ">
          <div className="p-5 bg-white dark:bg-background-color-1 rounded-md lg:w-1/2 lg:mr-6">
            <div className="overflow-hidden w-full">
              <img src={contact} alt="Nft_Profile" className="rounded-md hover:scale-105 w-full h-full	duration-1000" />
            </div>
          </div>
            <ContactForm />
        </div>
      </Scroll>
      <div className='mt-10'>
        <Scroll>
            <ContactMap />
        </Scroll>
        </div>
          
    </>
  )
}

export default Contact