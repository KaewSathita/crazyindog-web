// import { useState } from "react";
import { useAuth } from '../context/AuthContext';


function MyProfile() {
  const { user } = useAuth();
  // const [ input ] = useState();

  return (
    <div className="p-4 mb-4 rounded-3">
      <div className="container-fluid py-1">
        <div className="controls">
          <div className="d-flex align-items-center mb-3 mt-3 justify-content-center ">
            <img
              className="avatar"
              src='https://placehold.jp/300x300.png'
              alt="Avatar"
              style={{ maxWidth: "100%", maxHeight: "200px" }}                
            />
            <h1 className="display-6 ms-5">
              <strong>
              Welcome to {user.penName || user.firstName} page.
              </strong>
            </h1>
          </div>
        </div>
      </div>
      <hr className="featurette-divider"></hr>
        <h2>My review</h2>
        <div className="row row-cols-1 row-cols-sm- row-cols-md-3 g-3 mt-2 ">
        <div className="col">
          <div className="card shadow-sm">
            <img
              className="bd-placeholder-img card-img-top border rounded overflow-hidden"
              width="100%"
              height="360"
              style={{'objectFit': 'cover'}}
              src="https://placehold.jp/320x360.png"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
            <div className="card-body">
              <p className="card-text ">พาน้องหมาล่องเรือพาย</p>
              <div className="d-flex justify-content-end align-items-center">
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    



    
  )
}

export default MyProfile