import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function WriteReview() {
  const { user } = useAuth();

  const [value, setValue] = useState('');

  // const handleEditorChange = e => {
  //   console.log(e)
  // }

  return (
    <div className="p-5">
      <div>
        <h1>มาเขียนรีวิวกัน :
          { user.penName || user.firstName} 
        </h1>
        <div className="mb-3 pt-4">
          <label for="title" className="form-label">หัวข้อรีวิว</label>
          <input type="text" className="form-control" id="title"/>
        </div>

        <div className="mb-3">
          <label for="shortDesc" className="form-label">รายละเอียดโดยย่อ</label>
          <textarea className="form-control" id="shortDesc" rows="3"></textarea>
          <div className="col-auto">
            <span className="form-text">
              less than 300 characters long.
            </span>
          </div>
        </div>

        <div className="mb-3">
          <label for="description" className="form-label">รายละเอียด</label>
          <ReactQuill id="description"
            theme="snow" value={value} onChange={setValue} style={{height:"450px"}} placeholder="เริ่มเขียนรีวิว..." 
          />
        </div>


      <div className="container mt-5 pt-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="float-left"><strong>รูปภาพ</strong> </div>
              </div>
              <div className="card-body card-block">
                <form action="" method="post" enctype="multipart/form-data" className="form-horizontal">
                  <div className="row form-group">
                    <div className="col-12 col-md-12">
                      {/* <div className="control-group" id="fields">
                        <label className="control-label" for="field1">
                          Requests
                        </label>
                      </div> */}
                        <div className="controls">
                          <div className="mb-3">
                            <img
                              className="avatar"
                              src='https://placehold.jp/300x300.png'
                              alt="Avatar"
                              style={{ maxWidth: "100%", maxHeight: "100px" }}                
                            />

                          </div>
                          <div className="entry input-group upload-input-group">
                            <input className="form-control" name="fields[]" type="file"/>
                            <button className="btn btn-upload btn-success btn-add" type="button">
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                        <button className="btn btn-primary mt-3">อัพโหลดรูปภาพ</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
         <div className="d-grid gap-5 col-6 mx-auto pt-5">
          <button className="btn btn-primary" type="button">ส่งรีวิว</button>
         </div>
    
  </div>

  );
}

export default WriteReview;