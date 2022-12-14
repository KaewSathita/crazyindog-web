import { useEffect, useCallback, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLoading } from "../context/LoadingContext";
import { useCategory } from "../context/CategoryContext";
import { useReview } from "../context/ReviewContext";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import * as reviewService from "../api/reviewApi";
import AddPhotoButton from "./ui/AddPhotoButton";
import { useParams } from "react-router-dom";

function EditReview() {
  let { id } = useParams();
  id = parseInt(id);
  const [input, setInput] = useState({
    title: "",
    categoryId: 0,
    shortDesc: "",
    description: "",
    posterImage: "",
  });

  const { startLoading, stopLoading } = useLoading();
  const { user } = useAuth();
  const { categories } = useCategory();
  const { reviews, updateReview } = useReview();

  const fileEl = useRef();

  useEffect(() => {
    const getReviewById = async () => {
      try {
        if (reviews && reviews.length > 0) {
          const review = reviews.find((item) => item.id === parseInt(id));
          setInput(review);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getReviewById();
  }, [reviews]);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSetPosterImage = (value) => {
    setInput({ ...input, ["posterImage"]: value });
  };

  const handleSetDescription = (value) => {
    setInput({ ...input, ["description"]: value });
  };

  const handleCreateReviewForm = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      if (!input.title) {
        return toast.error("title is required");
      }

      if (input.title) {
        formData.append("title", input.title);
      }
      if (input.categoryId) {
        formData.append("categoryId", input.categoryId);
      }
      if (input.shortDesc) {
        formData.append("shortDesc", input.shortDesc);
      }
      if (input.description) {
        formData.append("description", input.description);
      }
      if (input.posterImage) {
        formData.append("posterImage", input.posterImage);
      }

      startLoading();

      await updateReview(id, formData);
      setInput({
        title: "",
        categoryId: 0,
        shortDesc: "",
        description: "",
        posterImage: "",
      });

      // setImage(null);
      toast.success("review updated");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="p-5">
      {input && input.id && (
        <div>
          <h1>??????????????????????????????????????? :{user.penName || user.firstName}</h1>
          <form onSubmit={handleCreateReviewForm}>
            <div className="mb-3 pt-4">
              <label htmlFor="title" className="form-label">
                ?????????????????????????????????
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={input.title}
                onChange={handleChangeInput}
              />
            </div>

            <div className="mb-3 pt-4">
              <label htmlFor="categoryId" className="form-label">
                ????????????????????????
              </label>
              <select
                id="categoryId"
                name="categoryId"
                className="form-select"
                aria-label="Categories"
                value={input.categoryId}
                onChange={handleChangeInput}
              >
                <option value="0"> -- select category --</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="shortDesc" className="form-label">
                ????????????????????????????????????????????????
              </label>
              <textarea
                className="form-control"
                id="shortDesc"
                name="shortDesc"
                rows="3"
                value={input.shortDesc}
                onChange={handleChangeInput}
              ></textarea>
              <div className="col-auto">
                <span className="form-text">
                  less than 300 characters long.
                </span>
              </div>
            </div>

            <div className="mb-3" style={{ maxWidth: "300px" }}>
              <label htmlFor="posterImage" className="form-label">
                ????????????????????????????????????
              </label>
              <div
                className="position-relative"
                role="button"
                onClick={() => fileEl.current.click()}
              >
                {input.posterImage ? (
                  <>
                    <button
                      type="button"
                      className="btn-close position-absolute"
                      style={{ top: 6, right: 6 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSetPosterImage(null);
                        fileEl.current.value = "";
                      }}
                    />
                    {typeof input.posterImage === "string" ||
                    input.posterImage instanceof String ? (
                      <img
                        src={input.posterImage}
                        className="img-fluid"
                        alt="post"
                      />
                    ) : (
                      <img
                        src={URL.createObjectURL(input.posterImage)}
                        className="img-fluid"
                        alt="post"
                      />
                    )}
                  </>
                ) : (
                  <AddPhotoButton></AddPhotoButton>
                )}
              </div>
              <input
                type="file"
                className="d-none"
                ref={fileEl}
                onChange={(e) => {
                  console.log(e.target.value);
                  if (e.target.files[0]) {
                    handleSetPosterImage(e.target.files[0]);
                  }
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                ??????????????????????????????
              </label>
              <ReactQuill
                id="description"
                name="description"
                theme="snow"
                value={input.description}
                onChange={handleSetDescription}
                placeholder="?????????????????????????????????????????????..."
              />
            </div>

            <div className="d-grid gap-5 col-6 mx-auto pt-5">
              <button className="btn btn-primary">????????????????????????</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default EditReview;
