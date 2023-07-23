import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useSetUploadProfileImageMutation } from '../../services/userApi';
import ToastLayout from '../layout/ToastLayout';
import { useAppDispatch } from '../../app/hooks';
import { showErrorNotification, showSuccessNotification } from '../../features/notifSlice';

const EditProfileImage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();
  console.log(user);
  const [setUploadProfileImage, {isSuccess, isError, error}] = useSetUploadProfileImageMutation();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (isSuccess) {
      dispatch(showSuccessNotification());
    }
    if (isError) {
      dispatch(showErrorNotification());
    }
  }, [isSuccess, isError]);

    const handleChange = async (e) => {
      const formData = new FormData();
      console.log(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
      formData.append("profile", e.target.files[0]);
      await setUploadProfileImage(formData);
  }
  return (
    <ToastLayout>
    <div className="lg:border-r lg:border-r-color-border lg:border-dashed pr-4">
          <h4 className="dark:text-white font-bold text-xl">Change Your Profile Picture</h4>
          <div className="border-3 border-color-border mt-4 w-[250px] h-[250px]">
          {preview ? <img className="w-full h-full" src={preview} alt="preview" /> : user["profile_image"] ?
          <img src={user["profile_image"]} className="w-full h-full" alt="user profile" /> : <p className="dark:text-white">no profile photo</p>}
          </div>
          <label htmlFor="image-file" className="w-[150px] cursor-pointer btn mt-5">Upload Profile</label>
          <input id="image-file" className="hidden" type="file" accept="image/jpg, image/jpeg, image/png" onChange={(e) => handleChange(e)} />
    </div>
    </ToastLayout>
    
  )
}

export default EditProfileImage