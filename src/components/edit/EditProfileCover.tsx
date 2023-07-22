import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useSetUploadCoverImageMutation } from '../../services/userApi';

const EditProfileCover = () => {
    const user = useSelector(state => state.auth.user);
    const [setUploadCoverImage, f] = useSetUploadCoverImageMutation();
    const [cover, setCover] = useState("");

    const handleChange = async (e) => {
        let formData = new FormData();
        console.log(e.target.files[0]);
        setCover(URL.createObjectURL(e.target.files[0]));
        formData.append("cover", e.target.files[0]);
        console.log(formData);
        await setUploadCoverImage(formData);
  }
  return (
    <div className="lg:w-[60%] lg:ml-5">
        <h4 className="dark:text-white font-bold text-xl">Change Your Profile Picture</h4>
        <div className="border-3 border-color-border mt-4 max-w-full max-h-[250px]">
            {cover ? <img className="w-full h-full" src={cover} alt="a" /> : user["profile_image"] ? <img src={user["profile_image"]} alt="user profile" /> : <p className="dark:text-white w-full h-full">no profile photo</p> }
        </div>
        <label htmlFor="image-cover" className="w-[150px] cursor-pointer btn mt-5">Upload Cover</label>
        <input id="image-cover" className="hidden" type="file" accept="image/jpg, image/jpeg, image/png" onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default EditProfileCover