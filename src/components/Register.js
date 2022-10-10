import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { useLoading } from '../context/LoadingContext';
import { useNavigate } from "react-router-dom";
import { validateRegister } from '../validations/userValidate';

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    penName: '',
    petBreed: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChangeInput = e => {
    setInput({...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    const { error } = validateRegister(input);
    if (error) {
      return toast.error(error.message);
    }
    try {
      startLoading();
      await register(input);

      navigate("/");
      toast.success('success registered');
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  }


  return (
    <div className={'login-bg'}>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="card w-50" style={{maxWidth : "600px"}}  >
          <div className="card-body py-5 px-3">
            <div className="d-flex justify-content-center">
              <img className="crazyindog-logo" src="https://res.cloudinary.com/crazyindog/image/upload/v1664351088/crazyindog/1663515867348_fgwvrn.png" alt="Crazy in Dog"/>
            </div>
            <form onSubmit={handleSubmitForm}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-md h-13"
                  placeholder="First Name"
                  name="firstName"
                  value={input.firstName}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-md h-13"
                  placeholder="Last Name"
                  name="lastName"
                  value={input.lastName}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-md h-13"
                  placeholder="Pen Name"
                  name="penName"
                  value={input.penName}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-md h-13"
                  placeholder="Pet Breed"
                  name="petBreed"
                  value={input.petBreed}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-md h-13"
                  placeholder="Email address"
                  name="email"
                  value={input.email}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control rounded-md h-13"
                  placeholder="Password"
                  name="password"
                  value={input.password}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control rounded-md h-13"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-2 d-grid">
                <button
                  className="btn btn-primary fw-bold rounded-md h-12 text-4.5"
                >
                  Register
                </button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  )
}




export default Register;