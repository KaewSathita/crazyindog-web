function Login() {
  return (
    <div className=".bg-light" >
    <div
      className=" mx-auto p-4 border border-1 bg-primary mt-1 rounded-5 shadow"
      style={{ maxWidth: 500, minHeight: 500 }}
    >
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>

    </div>
    </div>
    
  )
}

export default Login;