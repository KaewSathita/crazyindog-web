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
          <h1>มาเขียนรีวิวกัน 
            { user.penName || user.firstName} 
          </h1>
          <div class="mb-3">
            <label for="title" class="form-label">หัวข้อรีวิว</label>
            <input type="text" class="form-control" id="title" placeholder="หัวข้อรีวิว" />
          </div>
          <div class="mb-3">
            <label for="shortDesc" class="form-label">รายละเอียดโดยย่อ</label>
            <input type="text" class="form-control" id="shortDesc" placeholder="รายละเอียดโดยย่อ" />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">รายละเอียด</label>
            <ReactQuill id="description"
              theme="snow" value={value} onChange={setValue} style={{height:"450px"}} placeholder="เริ่มเขียนรีวิว..." 
            />
          </div>
        </div>
        <div class="d-grid gap-5 col-6 mx-auto pt-5">
        {/* <div class="d-flex justify-content-center align-self-end"> */}
          <button class="btn btn-primary" type="button">Button</button>

        </div>


    </div>

    

  );
}

export default WriteReview