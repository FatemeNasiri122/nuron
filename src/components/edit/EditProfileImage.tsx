import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useSetUploadProfileImageMutation } from '../../services/userApi';

const EditProfileImage = () => {
  const user = useSelector(state => state.auth.user);
  console.log(user);
    const [setUploadProfileImage, b] = useSetUploadProfileImageMutation();
    const [preview, setPreview] = useState("");
  console.log(b);
    const handleChange = async (e) => {
      const formData = new FormData();
      console.log(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
      formData.append("profile", e.target.files[0]);
      console.log(formData);
      await setUploadProfileImage(formData);
  }
  return (
    <div className="lg:border-r lg:border-r-color-border lg:border-dashed pr-4">
          <h4 className="dark:text-white font-bold text-xl">Change Your Profile Picture</h4>
          <div className="border-3 border-color-border mt-4 max-w-[250px] max-h-[250px]">
          {preview ? <img className="w-full h-full" src={preview} alt="preview" /> : user["profile_image"] ?
          <img src={user["profile_image"]} alt="user profile" /> : <p className="dark:text-white">no profile photo</p>}
          </div>
          <label htmlFor="image-file" className="w-[150px] cursor-pointer btn mt-5">Upload Profile</label>
          <input id="image-file" className="hidden" type="file" accept="image/jpg, image/jpeg, image/png" onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default EditProfileImage