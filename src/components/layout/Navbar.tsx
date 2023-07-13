import logoDark from "../../assets/images/logo/logo-dark.png";
import logoWhite from "../../assets/images/logo/logo-white.png";
import { Link } from "react-router-dom";
import { GoBell } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBrightnessHigh, BsMoon } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import useDarkSide from "../theme/useDarkSide";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const [colorTheme, setTheme] = useDarkSide();

    useEffect(() => {
        setTheme("dark");
    },[])
    
  return (
      <nav className="border-b border-b-gray-border  py-5 backdrop-blur-[10px] relative sticky top-0 z-10">
          <div className="flex justify-between items-center max-w-[1420px] m-auto flex-col sm:flex-row px-4 xl:px-0">
            <div className="flex mb-4 sm:mb-0">
              <div className="sm:w-[140px] h-[35px] sm:pr-8 sm:border-r sm:border-r-gray-border text-color-body">
                <img className="h-full" src={colorTheme === "light" ? logoWhite : logoDark} alt="logo" />
              </div>
              <ul className="hidden xl:flex ml-4 child:mx-2 items-center text-color-light-body dark:text-color-body">
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/">About</Link>
                  </li>
                  <li>
                      <Link to="/">Explore</Link>
                  </li>
                  <li>
                      <Link to="/">Pages</Link>
                  </li>
                  <li>
                      <Link to="/">Blog</Link>
                  </li>
                  <li>
                      <Link to="/">Contact</Link>
                  </li>
              </ul>
          </div>
              <div className="flex items-center">
                  <div className="input-logo items-center hidden lg:flex">
                      <input style={{background: "inherit"}} type="text" className="border-none outline-none mr-2" placeholder="Search Here" />
                      <BiSearch />
                  </div>
                        <span className="icon-container lg:hidden"><BiSearch /></span>                    
                  <Link to="/">
                      <span className="inline-block text-white bg-primary-alta p-3 w-10 text-xs w-28 text-center rounded-md mx-4 hover:bg-color-primary transition duration-100 font-semibold">Wallet connect</span>
                  </Link>
                  <span className="icon-container mr-2 relative">
                      <span className="inline-block w-[20px] h-[20px] bg-color-primary absolute rounded-full -top-2 right-0 text-white flex justify-center items-center text-[8px]">
                          6
                    </span>
                    <GoBell />
              </span>
                  <span onClick={() => setMobileMenu(!mobileMenu)} className="xl:hidden icon-container text-color-body mr-2">
                  <AiOutlineMenu />
              </span>    
                  <span onClick={() => { colorTheme === "light" ? setTheme("light") : setTheme("dark") }} className="icon-container text-color-body">
                  {colorTheme === "dark" ? <BsMoon /> : <BsBrightnessHigh />} 
              </span>
              
        </div>
          </div>
              <div className={`absolute top-0 h-screen bg-white dark:bg-background-color-3 w-[90%] lg:w-[40%] xl:hidden ${mobileMenu ? "translate-x-0" : "-translate-x-full"} transition duration-700 dark:text-color-body`}>
              <div className="flex justify-between items-center px-6 py-4">
                      <img className="w-[120px] h-[40px]" src={colorTheme === "light" ? logoWhite : logoDark} alt="" />
                      <span onClick={() => setMobileMenu(false)} className="logo-container cursor-pointer">
                          <AiOutlineClose />
                      </span>
                </div>
                <ul className="child:py-2 px-6 child:border-b child:border-b-gray-border mt-2 dark:text-color-body text-color-light-body">
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/">About</Link>
                  </li>
                  <li>
                      <Link to="/">Explore</Link>
                  </li>
                  <li>
                      <Link to="/">Pages</Link>
                  </li>
                  <li>
                      <Link to="/">Blog</Link>
                  </li>
                  <li>
                      <Link to="/">Contact</Link>
                  </li>
              </ul>
            </div>
            <div onClick={() => setMobileMenu(false)} className={`${mobileMenu ? "h-screen opacity-100" : "h-0 opacity-0"} w-[10%] lg:w-[60%] xl:hidden  absolute top-0  right-0 rgba transition-opacity	 duration-1000	`}>    
            </div>
          
        
          
      </nav>
  )
}

export default Navbar