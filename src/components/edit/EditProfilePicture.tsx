import EditProfileCover from "./EditProfileCover"
import EditProfileImage from "./EditProfileImage"

const EditProfilePicture = () => {
  

  return (
    <>
      <div className="p-6 border border-color-border rounded-md flex flex-col lg:flex-row">
        <EditProfileImage />
        <EditProfileCover />
      </div>
    </>
    
  )
}

export default EditProfilePicture