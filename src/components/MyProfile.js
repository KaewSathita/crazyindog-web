// import { useState } from "react";
import { useAuth } from '../context/AuthContext';


function MyProfile() {
  const { user } = useAuth();
  // const [ input ] = useState();

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        {/* <img src="{input.profilepicture}" class="img-fluid" ></img> */}
        <h1 className="display-5 fw-bold">This is {user.firstName} Profile</h1>

      </div>
    </div>
  )
}

export default MyProfile