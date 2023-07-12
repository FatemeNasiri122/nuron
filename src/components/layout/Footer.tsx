import React from 'react';
import logoDark from "../../assets/images/logo/logo-dark.png";
import logoLight from "../../assets/images/logo/logo-white.png";
 

export const Footer = () => {
  return (
    <footer className="dark:bg-background-color-1">
          <div className="py-24 flex max-w-[1420px] m-auto">
              <div className="">
                  <img className="h-[40px] w-[120px]" src={logoLight} alt="logo" />
                  <p className="dark:text-color-body text-color-light-body mt-5 border-b border-b-black pb-8">Created with the collaboration of over 60 of the world's best Nuron Artists.</p>
                  <p className="dark:text-white mt-5">Get The Latest Nuron Updates</p>
                  <div className="flex mt-5">
                      <input type="text" className="dark:bg-background-color-2 border-none outline-none dark:placeholder-color-body dark:text-color-body text-color-light-body placeholder-colot-light-body p-2" placeholder="Your username" />
                      <button className="w-[90px] h-[45px] hover:bg-color-primary transition bg-primary-alta rounded-tr-lg rounded-br-lg flex justify-center items-center text-white">
                        Subscribe  
                      </button>
                  </div>
                  <p className="text-color-light-body dark:text-color-body mt-3">Email is safe. We don't spam.</p>
              </div>
              <div>
                  <p className="font-bold dark:text-white">Nuron</p>
                  <ul>
                      li>Link*7
                  </ul>
              </div>  
          </div>
    </footer>
  )
}
