import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useSetUploadCoverImageMutation } from '../../services/userApi';
import ToastLayout from '../layout/ToastLayout';
import { useAppDispatch } from '../../app/hooks';
import { showErrorNotification, showSuccessNotification } from '../../features/notifSlice';

const EditProfileCover = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();
  const [setUploadCoverImage, {isSuccess, isError, error}] = useSetUploadCoverImageMutation();
  const [cover, setCover] = useState("");
  const [sizeError, setSizeError] = useState("");
  
  useEffect(() => {
    if (isSuccess) {
      dispatch(showSuccessNotification());
    } 
    if (isError) {
      dispatch(showErrorNotification());
    }
  },[isSuccess, isError])

  const handleChange = async (e) => {
    setSizeError("");
    let formData = new FormData();
    console.log(e.target.files[0]);
    if (e.target.files[0].size <= 200000) {
      setCover(URL.createObjectURL(e.target.files[0]));
      formData.append("cover", e.target.files[0]);
      console.log(formData);
      await setUploadCoverImage(formData);
    } else {
      setSizeError("The size of the photo must be at most 200 kilobytes");
    }
    
  }
  return (
    <ToastLayout>
     <div className="lg:w-[60%] lg:ml-5">
        <h4 className="dark:text-white font-bold text-xl">Change Your Profile Picture</h4>
        <div className="border-3 border-color-border mt-4 w-full h-[250px]">
        {cover ? <img className="w-full h-full" src={cover} alt="a" /> : user["profile_image"] ?
          <img src={user["profile_image"]} className="w-full h-full" alt="user profile" /> : <p className="dark:text-white w-full h-full">no profile photo</p>}
        </div>
        <label htmlFor="image-cover" className="w-[150px] cursor-pointer btn mt-5">Upload Cover</label>
        <input id="image-cover" className="hidden" type="file" accept="image/jpg, image/jpeg, image/png" onChange={(e) => handleChange(e)} />
        {sizeError && <small className="error-text">{ sizeError }</small> }
    </div>
    </ToastLayout>
   
  )
}

export default EditProfileCover