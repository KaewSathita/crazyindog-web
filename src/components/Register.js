import React from 'react'

function Register() {
  return (
    <form className="row gx-2 gy-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Profile Picture</h5>
          <input 
            type="file" 
            className="d-none" 
          />
      </div>
      <div className="col-6">
        <input
          className="form-control"
          type="text"
          placeholder="ชื่อ"
          name="firstName"
        />
      </div>

      <div className="col-6">
        <input
          className="form-control"
          type="text"
          placeholder="นามสกุล"
          name="lastName"
        />
      </div>

      <div className="col-6">
        <input
          className="form-control"
          type="text"
          placeholder="นามปากกา"
          name="motto"
        />
      </div>

      <div className="col-6">
        <input
          className="form-control"
          type="text"
          placeholder="สายพันธ์ุน้องหมาที่เลี้ยง"
          name="petBleed"
        />
      </div>
 
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="อีเมล"
          name="email"
        />
      </div>

      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="รหัสผ่าน"
          name="password"
        />
      </div>

      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="ยืนยันรหัสผ่าน"
          name="confirmPassword"

        />
      </div>
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="ยืนยันรหัสผ่าน"
          name="confirmPassword"
        />
      </div>


      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn d-flex justify-content-center align-items-center btn-green text-4.5 h-9 tw-px-10"
        >
          Sign Up
        </button>
      </div>
    </form>
  )
}

export default Register