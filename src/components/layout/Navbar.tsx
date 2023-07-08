import logo from "../../assets/image/logo-white.png";
import sun from "../../assets/icons/sun-01.svg";
import { Link } from "react-router-dom";
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
import { Input } from 'antd';

const Navbar = () => {
    
    
  return (
      <nav className="px-12 border-b border-b-gray-border flex justify-between items-center py-5">
          <div className="flex ">
              <div className="w-[120px] h-[30px] pr- border-r border-r-gray-border text-color-body">
                <img className="h-full" src={logo} alt="" />
              </div>
              <ul className="flex ml-4 child:mx-2">
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
              <Input style={{ backgroundColor: "transparent", color: "#acacac", width:"280px" }} size="large" placeholder="Search Here" suffix={<SearchOutlined style={{ color: "#acacac" }} />} />
              <Link to="/"><span className="inline-block text-white bg-primary-alta p-3 w-10 text-xs w-28 text-center rounded-md mx-4 hover:bg-color-primary transition duration-100 font-semibold">Wallet connect</span></Link>
              <Badge color="#00a3ff" count={6}>
                  <Avatar style={{border: "1px solid #2b2b33", display:"flex", alignItems:"center", cursor: "pointer"}} shape="circle" size="large" >
                      <BellOutlined style={{marginBottom: "15px", color:"#acacac"}} />
                 </Avatar>
              </Badge>
              <span className="inline-block rounded-full border border-gray-border p-2.5 ml-3 cursor-pointer">
                  <img className="w-full h-full" src={sun} alt="" />
              </span>
          </div>
          
      </nav>
  )
}

export default Navbar