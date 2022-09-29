import React from 'react'

function Register() {
  return (
    <div className={'login-bg'}>
      <form className="row gx-2 gy-3">
        <div className="mt-5 d-flex justify-content-center">
          <div className="card w-75" style={{maxWidth : "500px"}} >
            <h2 style={{color: "orange"}} className="mt-3 d-flex justify-content-center" 
            > สมัครสมาชิก </h2>
            <div className="card-body py-3 px-3">
              <div className="mb-3 d-flex justify-content-center">
                <div className="mt-3 -px-4">
                  <img src="https://res.cloudinary.com/fakebuck12/image/upload/v1664423791/crazyindog/girl_ell1gy.jpg" alt="ProfilePhoto" className="img-fluid" />
                </div>
              </div>
                <button
                  type="file"
                  className="m-auto btn d-flex justify-content-center align-items-center btn-primary text-4.5 h-9 tw-px-10 w-50 p-2"
                  >
                  อัพโหลดรูปภาพ
                </button>

                <div className="mt-3 mb-3 col-12">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="ชื่อ"
                    name="firstName"
                  />
                </div>

                <div className="mb-3 col-12">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="นามสกุล"
                    name="lastName"
                  />
                </div>

                <div className="mb-3 col-12">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="นามปากกา"
                    name="motto"
                  />
                </div>

                <div className="mb-3 col-12">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="สายพันธ์ุน้องหมาที่เลี้ยง"
                    name="petBleed"
                  />
                </div>

                <div className="mb-3 col-12">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="อีเมล"
                    name="email"
                  />
                </div>

                <div className="mb-3 col-12">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="รหัสผ่าน"
                    name="password"
                  />
                </div>

                <div className="mb-3 col-12">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="ยืนยันรหัสผ่าน"
                    name="confirmPassword"
                  />
                </div>

                <div className="mt-4 mb-3 d-flex justify-content-center">
                  <button
                    type="submit"
                    className="m-auto btn d-flex justify-content-center align-items-center btn-primary text-4.5 h-9 tw-px-10 w-50 p-2"
                  >
                    สมัครสมาชิก
                  </button>
                </div>
            </div>
          </div>
        </div>
      </form>
    </div>



  )
}

export default Register