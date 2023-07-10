import logoDark from "../../assets/images/logo/logo-dark.png";
import logoWhite from "../../assets/images/logo/logo-white.png";
import sun from "../../assets/images/icons/sun-01.svg";
import { Link } from "react-router-dom";
import { SearchOutlined, BellOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
import { Input } from 'antd';
import { useState } from "react";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    
  return (
      <nav className="border-b border-b-gray-border py-5 backdrop-blur-[10px] relative sticky top-0 z-10">
          <div className="flex justify-between items-center max-w-[1420px] m-auto flex-col sm:flex-row">
            <div className="flex mb-4 sm:mb-0">
              <div className="sm:w-[140px] h-[35px] sm:pr-8 sm:border-r sm:border-r-gray-border text-color-body">
                <img className="h-full" src={logoWhite} alt="" />
              </div>
              <ul className="hidden xl:flex ml-4 child:mx-2 items-center">
                  <li>
                      <Link to="/"><span className="text-color-body">Home</span></Link>
                  </li>
                  <li>
                      <Link to="/"><span className="text-color-body">About</span></Link>
                  </li>
                  <li>
                      <Link to="/"><span className="text-color-body">Explore</span></Link>
                  </li>
                  <li>
                      <Link to="/"><span className="text-color-body">Pages</span></Link>
                  </li>
                  <li>
                      <Link to="/"><span className="text-color-body">Blog</span></Link>
                  </li>
                  <li>
                      <Link to="/"><span className="text-color-body">Contact</span></Link>
                  </li>
              </ul>
          </div>
        <div className="flex items-center">
                  <Input className="hidden lg:flex" style={{ backgroundColor: "transparent", color: "#acacac", width: "280px" }} size="large" placeholder="Search Here" suffix={<SearchOutlined style={{ color: "#acacac" }} />} />
                  <span className="lg:hidden rounded-full border border-gray-border w-[40px] h-[40px] flex justify-center items-center ml-3 cursor-pointer">
                      <SearchOutlined style={{ color: "#acacac" }} />
              </span> 
              <Link to="/"><span className="inline-block text-white bg-primary-alta p-3 w-10 text-xs w-28 text-center rounded-md mx-4 hover:bg-color-primary transition duration-100 font-semibold">Wallet connect</span></Link>
              <Badge color="#00a3ff" count={6}>
                  <Avatar style={{border: "1px solid #2b2b33", display:"flex", alignItems:"center", cursor: "pointer"}} shape="circle" size="large" >
                      <BellOutlined style={{marginBottom: "15px", color:"#acacac"}} />
                 </Avatar>
              </Badge>
              <span onClick={() => setMobileMenu(!mobileMenu)} className="inline-block xl:hidden rounded-full border border-gray-border w-[40px] h-[40px] flex justify-center items-center ml-3 cursor-pointer">
                  <MenuOutlined style={{ color:"#acacac"}} />
              </span>    
              <span className="inline-block rounded-full border border-gray-border p-2.5 ml-3 cursor-pointer">
                  <img className="w-full h-full" src={sun} alt="" />
              </span>
              
        </div>
          </div>
              <div className={`absolute top-0 h-screen dark:bg-background-color-3 w-[90%] lg:w-[40%] xl:hidden ${mobileMenu ? "translate-x-0" : "-translate-x-full"} transition duration-700 dark:text-color-body`}>
              <div className="flex justify-between items-center px-6 py-4">
                      <img className="w-[120px] h-[40px]" src={logoWhite} alt="" />
                      <span onClick={() => setMobileMenu(false)} className="inline-block flex justify-center items-center rounded-full w-[35px] h-[35px] bg-color-dark cursor-pointer">
                          <CloseOutlined className="dark:text-white" />
                      </span>
                </div>
                <ul className="child:py-2 px-6 child:border-b child:border-b-gray-border mt-2">
                  <li>
                      <Link to="/"><span className="text-color-body">Home</span></Link>
                  </li>
                  <li>
                      <Link to="/"><span className="text-color-body">About</span></Link>
                  </li>
                  <li>
                      <Link to="/"><span className="text-color-body">Explore</span></Link>
                  </li>
                  <li>
                      <Link to="/"><span className="text-color-body">Pages</span></Link>
                  </li>
                  <li>
                      <Link to="/"><span className="text-color-body">Blog</span></Link>
                  </li>
                  <li>
                      <Link to="/"><span className="text-color-body">Contact</span></Link>
                  </li>
              </ul>
            </div>
            <div onClick={() => setMobileMenu(false)} className={`${mobileMenu ? "block" : "hidden"} w-[10%] lg:w-[60%] xl:hidden h-screen absolute top-0 bg-background-dark right-0`}>    
            </div>
          
        
          
      </nav>
  )
}

export default Navbar