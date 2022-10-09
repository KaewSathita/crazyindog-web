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
  }, [reviews, categoryId]);

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
      <p className="fs-3 mt-3 mb-3">
        รีวิวล่าสุดในหมวด {getCategoryName(category)}{" "}
      </p>
      <hr className="featurette-divider"></hr>
      <div className="row mb-2">
        {theReviews &&
          theReviews.length > 0 &&
          getReviews(theReviews).map((review, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">{review.title}</h3>
                    <div className="mb-1 text-muted">
                      {timeSince(review.createdAt)}
                    </div>
                    <p className="card-text mb-auto">{review.shortDesc}</p>
                    <Link
                      className="stretched-link"
                      to={`/reviews/${review.id}`}
                    >
                      อ่านต่อ...
                    </Link>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <div className="picDog col-auto d-none d-lg-block">
                      <img src={review.posterImage} alt={review.title} />
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
