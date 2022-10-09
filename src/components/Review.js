import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useReview } from "../context/ReviewContext";
import { timeSince } from "../utils/dateFormat";

function Review() {
  const { id } = useParams();
  const { reviews } = useReview();
  const [review, setReview] = useState({});

  useEffect(() => {
    const getReviewById = async () => {
      try {
        if (reviews && reviews.length > 0) {
          const review = reviews.find((item) => item.id === parseInt(id));
          setReview(review);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getReviewById();
  }, [reviews]);

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      {review && (
        <>
          <img
            src={review.posterImage}
            alt="photoReview"
            className="img-fluid"
          ></img>
          <i className="calendar-date eye star" />
          <h1 className="display-5 fw-bold mt-5 mb-5">{review.title}</h1>
          <p className="col-md-8 fs-4">{timeSince(review.createdAt)}</p>
          <div className="d-flex">
            <p>{review.shortDesc}</p>
          </div>
          <div className="d-flex">
            <p dangerouslySetInnerHTML={{ __html: review.description }}></p>
          </div>
        </>
      )}
    </div>
  );
}

export default Review;
