import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useReview } from "../context/ReviewContext";
import { Link, useParams } from "react-router-dom";
import { timeSince } from "../utils/dateFormat";
import { useCategory } from "../context/CategoryContext";

function ReviewsByCategory(props) {
  const { user } = useAuth();
  const { reviews } = useReview();
  const { categories } = useCategory();

  const [theReviews, setTheReviews] = useState([]);
  const [category, setCategory] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    const getReviewsByCategoryId = async (categoryId) => {
      try {
        if (reviews && reviews.length > 0) {
          const newReviews = reviews.filter(
            (review) => review.categoryId === categoryId
          );
          setTheReviews(newReviews);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const getCategoryById = async (categoryId) => {
      try {
        if (categories && categories.length > 0) {
          const newCategory = categories.find(
            (category) => category.id === categoryId
          );
          setCategory(newCategory);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (typeof props.categoryId === "undefined") {
      getCategoryById(parseInt(categoryId));
      getReviewsByCategoryId(parseInt(categoryId));
    } else {
      getCategoryById(props.categoryId);
      getReviewsByCategoryId(props.categoryId);
    }
  }, [reviews, categories, categoryId]);

  const getReviews = (allReviews) => {
    if (props.maxItems === -1) {
      return allReviews;
    } else {
      return allReviews.slice(0, props.maxItems);
    }
  };

  const getCategoryName = (theCategory) =>
    theCategory ? theCategory.name : "";

  return (
    <>
      <p className="fs-3 mt-3 mb-3 fw-bold">
        รีวิวล่าสุดในหมวด {getCategoryName(category)}{" "}
      </p>
      <hr className="featurette-divider"></hr>
      <div className="row mb-2">
        {theReviews &&
          theReviews.length > 0 &&
          getReviews(theReviews).map((review, index) => {
            return (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="card mb-4">
                  <img
                    src={review.posterImage}
                    className="card-img-top"
                    alt={review.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title my-title">{review.title}</h5>
                    <p className="card-text my-short-desc2">
                      {review.shortDesc}
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <span className="text-muted fs-6 fw-light fst-italic">
                          {timeSince(review.createdAt)} ago
                        </span>
                      </div>
                      <div className="col-6 text-end">
                        <Link to={`/reviews/${review.id}`}>อ่านต่อ...</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ReviewsByCategory;
