import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useReview } from "../context/ReviewContext";
import { toast } from "react-toastify";

function MyProfile() {
  const { user } = useAuth();
  const { reviews, deleteReview } = useReview();
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    const getMyReviews = async () => {
      try {
        if (user && reviews && reviews.length > 0) {
          const newReviews = reviews.filter(
            (review) => review.userId === user.id
          );
          setMyReviews(newReviews);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getMyReviews();
  }, [reviews, user]);

  const handleDeleteReview = async (review) => {
    if (
      window.confirm(`Are you sure you want to delete review '${review.title}'`)
    ) {
      await deleteReview(review.id);
      toast.success("Successfully deleted.");
    } else {
      console.log("cancel");
    }
  };

  return (
    <div className="p-4 mb-4 rounded-3">
      <div className="container-fluid py-1">
        <div className="controls">
          <div className="d-flex align-items-center mb-3 mt-3 justify-content-center ">
            {user && (
              <>
                <img
                  className="avatar"
                  src={user.profilepicture}
                  alt="Avatar"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
                <h1 className="display-6 ms-5">
                  <strong>
                    Welcome to {user.penName || user.firstName} page.
                  </strong>
                </h1>
              </>
            )}
          </div>
        </div>
      </div>
      <hr className="featurette-divider"></hr>
      <h2>My reviews</h2>
      <div className="row g-3 mt-2">
        {myReviews &&
          myReviews.length > 0 &&
          myReviews.map((review, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card shadow-sm">
                  <img
                    className="bd-placeholder-img card-img-top border rounded overflow-hidden"
                    width="100%"
                    src={review.posterImage}
                    alt={review.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title my-title">{review.title}</h5>
                    <p className="card-text my-short-desc2">{review.shortDesc}</p>
                    <div className="d-flex justify-content-end align-items-center">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Link to={`/reviews/${review.id}`}>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                          </Link>
                          <Link
                            to={`/reviews/${review.id}/edit`}
                            className="mx-2"
                          >
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary"
                            >
                              Edit
                            </button>
                          </Link>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDeleteReview(review)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MyProfile;
