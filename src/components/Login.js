import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { useLoading } from '../context/LoadingContext';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const handleChangeInput = e => {
    setInput({...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    console.log(input)
    e.preventDefault();
    try {
      startLoading();
      await login(input);

      navigate("/");
      toast.success('success login');
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  }


  return (
    <div className={'login-bg'}>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="card w-45" style={{maxWidth : "600px"}}  >
          <div className="card-body py-5 px-3">
            <div className="d-flex justify-content-center">
              <img className="crazyindog-logo" src="https://res.cloudinary.com/crazyindog/image/upload/v1664351088/crazyindog/1663515867348_fgwvrn.png" alt="Crazy in Dog"/>
            </div>
            <form onSubmit={handleSubmitForm}>
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
              <div className="mb-2 d-grid">
                <button
                  className="btn btn-primary fw-bold rounded-md h-12 text-4.5"
                >
                  Log In
                </button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  )
}




export default Login;