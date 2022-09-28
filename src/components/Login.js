function Login() {
  return (
    <div className={'login-bg'}>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="card">
          <div className="card-body py-5 px-3">
            <div className="d-flex justify-content-center">
              <img className="crazyindog-logo" src="https://res.cloudinary.com/fakebuck12/image/upload/v1664351088/crazyindog/1663515867348_fgwvrn.png" alt="Crazy in Dog"/>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;