import logoDark from "../../assets/images/logo/logo-dark.png";
import logoWhite from "../../assets/images/logo/logo-white.png";
import { Link } from 'react-router-dom';
import useDarkSide from "../theme/useDarkSide";
import profolio1 from "../../assets/images/portfolio/portfolio-01.jpg"; 
import profolio2 from "../../assets/images/portfolio/portfolio-02.jpg";
import profolio3 from "../../assets/images/portfolio/portfolio-03.jpg";
import { TbBrandFacebook, TbMail, TbBrandTwitter,TbBrandInstagram, TbBrandLinkedin } from "react-icons/tb";  

const Footer = () => {

  const [colorTheme, setTheme] = useDarkSide();

  return (
    <footer className="dark:bg-background-color-1 bg-white px-8 xl:px-1">
          <div className="py-24 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 max-w-[1420px] m-auto justify-between">
              <div className="mr-12">
                  <img className="h-[40px] w-[120px]" src={colorTheme === "light" ? logoWhite : logoDark} alt="logo" />
                  <p className="dark:text-color-body text-color-light-body mt-5 border-b border-b-black pb-8 gap-4 justify-between">Created with the collaboration of over 60 of the world's best Nuron Artists.</p>
                  <p className="dark:text-white mt-5">Get The Latest Nuron Updates</p>
                  <div className="flex mt-5"> 
                      <input type="text" className="dark:bg-background-color-2  outline-none dark:placeholder-color-body dark:text-color-body text-color-light-body placeholder-colot-light-body p-2 border-2 border-primary-alta dark:border-none" placeholder="Your username" />
                      <button className="w-[90px] h-[45px] hover:bg-color-primary transition bg-primary-alta rounded-tr-lg rounded-br-lg flex justify-center items-center text-white">
                        Subscribe  
                      </button>
                  </div>
                  <p className="text-color-light-body dark:text-color-body mt-3">Email is safe. We don't spam.</p>
              </div>
              <div className="">
                  <p className="font-bold dark:text-white lg:text-2xl">Nuron</p>
                  <ul className="text-color-light-body dark:text-color-body child:my-3">
                      <li>
                        <Link to="/" className="hover:text-color-primary relative">Protocol Explore</Link>
                      </li>
                      <li>
                          <Link to="/" className="hover:text-color-primary">System Token</Link>
                      </li>
                      <li>
                       <Link to="/" className="hover:text-color-primary">Otimize Time</Link>
                      </li>
                      <li>
                        <Link to="/" className="hover:text-color-primary">Visual Checking</Link>
                      </li>
                      <li>
                        <Link to="/" className="hover:text-color-primary">Fadeup System</Link>
                      </li>
                      <li>
                        <Link to="/" className="hover:text-color-primary">Activity Log</Link>
                      </li>
                      <li>
                        <Link to="/" className="hover:text-color-primary">System Auto Since</Link>
                      </li>
                  </ul>
                  </div>
              <div>
                  <p className="font-bold dark:text-white lg:text-2xl">Information</p>
                  <ul className="text-color-light-body dark:text-color-body child:my-3">
                      <li >
                        <Link to="/" className="hover:text-color-primary">Market Explore</Link>
                      </li>
                      <li>
                          <Link to="/" className="hover:text-color-primary">Ready Token</Link>
                      </li>
                      <li>
                       <Link to="/" className="hover:text-color-primary">Main Option</Link>
                      </li>
                      <li>
                        <Link to="/" className="hover:text-color-primary">Product Checking</Link>
                      </li>
                      <li>
                        <Link to="/" className="hover:text-color-primary">Blog Grid</Link>
                      </li>
                      <li>
                        <Link to="/" className="hover:text-color-primary">About Us</Link>
                      </li>
                      <li  >
                        <Link to="/" className="hover:text-color-primary">Fix Bug</Link>
                      </li>
                  </ul>
                  </div>
                  <div>
                  <p className="font-bold dark:text-white lg:text-2xl">Recent Sold Out</p>
                  <ul className="text-color-light-body dark:text-color-body child:my-5 text-sm">
                      <li className="border-b dark:border-b-gray-color border-b-color-border-white pb-4">
                          <Link to="/">
                              <span className="flex items-center">
                                <img src={profolio1} className="w-[60px] h-[60px] rounded-full mr-2.5" alt="" />
                                  <span className="flex flex-col">
                    <span className="dark:text-white">
                      <span className='hover:text-color-primary'>#21 The Wonder</span></span>
                                      <span>Highest bid 1/20</span>
                                      <span className="text-color-primary">0.244wETH</span>
                                  </span>
                              </span>                
                          </Link>
                      </li>
                      <li className="border-b dark:border-b-gray-color border-b-color-border-white pb-4">
                            <Link to="/">
                              <span className="flex items-center">
                                <img src={profolio2} className="w-[60px] h-[60px] rounded-full mr-2.5" alt="" />
                                  <span className="flex flex-col">
                                      <span className="dark:text-white hover:text-color-primary"><span className='hover:text-color-primary'>#21 The Wonder</span></span>
                                      <span>Highest bid 1/20</span>
                                      <span className="text-color-primary">0.244wETH</span>
                                  </span>
                                </span>
                            </Link>
                      </li>
                      <li className="border-b dark:border-b-gray-color border-b-color-border-white pb-4">
                        <Link to="/">
                              <span className="flex items-center pr-16">
                                <img src={profolio3} className="w-[60px] h-[60px] rounded-full mr-2.5" alt="" />
                                  <span className="flex flex-col">
                                      <span className="dark:text-white hover:text-color-primary"><span className='hover:text-color-primary'>#21 The Wonder</span></span>
                                      <span>Highest bid 1/20</span>
                                      <span className="text-color-primary">0.244wETH</span>
                                  </span>
                              </span> 
                       </Link>
                      </li>
                  </ul>
              </div>
              
      </div>
      <div className='border-t border-t-gray-border dark:text-color-body text-color-light-body'>
        <div className="max-w-[1420px] m-auto py-6 flex justify-between flex-col lg:flex-row">
          <div className="flex items-center flex-col lg:flex-row">
            <p className="lg:border-r lg:border-r-gray-border lg:pr-6 lg:mr-6">©2022 Nuron, Inc. All rights reserved.</p>
            <div className="my-5 lg:my-0">
              <Link to="/">Terms</Link>
              <span className="mx-3 mb-4">.</span>
              <Link to="/">Privacy Policy</Link>
            </div>
          </div>
          <div className="flex justify-center child:mx-2">
            <Link to="/" >
              <span className="logo-container">
                <span className="logo-inside">
                  <TbBrandFacebook />
                </span>
                
              </span>
              </Link>
            <Link to="/">
              <span className="logo-container">
                <span className="logo-inside">
                  <TbBrandTwitter />
                </span>
                
              </span>
              </Link>
            <Link to="/" className="logo-container">
              <span className="logo-inside">
                <TbBrandInstagram />
              </span>
            </Link>
            <Link to="/">
              <span className="logo-container">
                <span className="logo-inside">
                  <TbBrandLinkedin />
                </span>
                
              </span>
              </Link>
            <Link to="/">
              <span className="logo-container">
                <span className="logo-inside">
                  <TbMail />
                </span>
                
              </span>
              </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer