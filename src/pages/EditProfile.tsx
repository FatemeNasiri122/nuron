import {useState} from 'react';
import TitlePage from '../components/TitlePage';
import { Link } from 'react-router-dom';
import {AiOutlineEye} from "react-icons/ai"
import { LuEdit } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { BiLockOpenAlt } from "react-icons/bi";
import EditPersonalInformation from '../components/edit/EditPersonalInformation';
import EditProfileCover from "../components/edit/EditProfileCover"
import EditProfileImage from "../components/edit/EditProfileImage"
import {motion} from "framer-motion";
import EditPassword from '../components/edit/EditPassword';

const EditProfile = () => {
  const [profileType, setProfileType] = useState(0);
  
  return (
      <>
      <TitlePage title="Edit Profile" /> 
      <div className="mt-20 mb-10 flex justify-between items-center lg:mx-14">
        <h2 className="text-[26px] font-bold dark:text-white">Edit Your Profile</h2>
        <Link to="/preview" className="w-[100px] btn"><span className="w-full flex justify-between items-center px-3"><AiOutlineEye /> Preview</span></Link>
      </div>
      <div className="lg:mx-14 flex mb-20 items-start flex-col lg:flex-row	">
        <nav className="bg-white border border-color-border px-2 rounded-md  pt-3 w-full mb-5 lg:w-3/12 dark:bg-background-color-1 mr-4">
          <button className={`${profileType === 0 && "btn1-active"} btn1`} onClick={() => setProfileType(0)}>
            <LuEdit style={{marginRight: "8px"}} />Edit Profile Image
          </button>
          <button className={`${profileType === 1 && "btn1-active"} btn1`} onClick={() => setProfileType(1)}>
            <GoPerson style={{marginRight: "8px"}} />Personal Information
          </button>
          <button className={`${profileType === 2 && "btn1-active"} btn1`} onClick={() => setProfileType(2)}>
            <BiLockOpenAlt style={{marginRight: "8px"}} />Change Password
          </button>
        </nav>
        <div className="w-full lg:w-9/12 bg-white dark:bg-background-color-1">
          {profileType === 0 && <motion.div animate={{ opacity: 1, transition: { duration: 1 } }} initial={{ opacity: 0 }}>
            <div className="p-6 border border-color-border rounded-md flex flex-col lg:flex-row">
              <EditProfileImage />
              <EditProfileCover />
            </div>
          </motion.div>}
          {profileType === 1 && <motion.div animate={{ opacity: 1, transition: { duration: 1 } }} initial={{ opacity: 0 }}>
            <EditPersonalInformation />
          </motion.div>
          }
          {profileType === 2 && <motion.div animate={{ opacity: 1, transition: { duration: 1 } }} initial={{ opacity: 0 }}>
            <EditPassword />
          </motion.div>
          }
        </div>        
      </div>
      </>
  )
}

export default EditProfile