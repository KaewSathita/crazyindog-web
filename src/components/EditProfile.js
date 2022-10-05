import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { useLoading } from "../context/LoadingContext";

function EditProfile() {
  const { user, updateMe, updateProfileImg } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    penName: "",
    petBreed: "",
    email: "",
  });

  const [file, setFile] = useState(null);

  const inputEl =useRef();

  useEffect(() => {
    if (user) {
      setInput(user);
    }
  }, [user]);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await updateMe(input);
      toast.success("success updated");
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };

  const handleFileUploadForm = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      const formData = new FormData();
      formData.append('profileImage', file)
      await updateProfileImg(formData);
      toast.success('successfully uploaded photo.')
      setFile(null); 
 
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }    
  };

  return (
    <div className={"login-bg"}>
      <div className="row vh-100 pt-5" style={{ background: "white" }}>
        <div className="offset-md-2 col-md-4">
          <form onSubmit={handleFileUploadForm}>
            <div className="mb-3">
              <img
                className="avatar"
                src={input.profilepicture?input.profilepicture:'https://placehold.jp/300x300.png'}
                alt="Avatar"
                style={{ maxWidth: "100%", maxHeight: "300px" }}                
              />

            </div>
            <div className="mb-3" style={{ maxWidth: "300px" }}>
              <label htmlFor="formFile" className="form-label">
                Browse your new avatar
              </label>
              <input className="form-control" ref={inputEl} type="file" id="formFile" 
                onChange={e => {
                  // console.dir(e.target.files);
                  if (e.target.files[0]){
                    setFile(e.target.files[0]);
                  }
                }} 
              />
              
            </div>
            <div className="mb-2">
              <button className="btn btn-primary">Upload</button>
            </div>
          </form>
        </div>




        
        <div className="col-md-4">
          <form onSubmit={handleSubmitForm}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                id="email"
                type="text"
                className="form-control rounded-md h-13"
                placeholder="Email address"
                name="email"
                value={input.email}
                onChange={handleChangeInput}
                disabled={true}
              />
              <div id="emailHelp" className="form-text">
                Email cannot be changed.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="form-control rounded-md h-13"
                placeholder="First Name"
                name="firstName"
                value={input.firstName}
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="form-control rounded-md h-13"
                placeholder="Last Name"
                name="lastName"
                value={input.lastName}
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="penName" className="form-label">
                Pen Name
              </label>
              <input
                id="penName"
                type="text"
                className="form-control rounded-md h-13"
                placeholder="penName"
                name="penName"
                value={input.penName}
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="petBreed" className="form-label">
                Pet Breed
              </label>
              <input
                id="petBreed"
                type="text"
                className="form-control rounded-md h-13"
                placeholder="Pet Breed"
                name="petBreed"
                value={input.petBreed}
                onChange={handleChangeInput}
                autoComplete={"off"}
              />
            </div>

            <div className="mb-2 d-grid">
              <button className="btn btn-primary fw-bold rounded-md h-12 text-4.5">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      {/*<div className="d-flex vh-100 justify-content-center align-items-center">*/}
      {/* */}
      {/*</div>*/}
    </div>
  );
}

export default EditProfile;
