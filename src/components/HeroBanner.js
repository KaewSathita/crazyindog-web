import { useState } from "react";
import { useReview } from "../context/ReviewContext";

function HeroBanner() {
  const { reviews } = useReview();
  const [maxItems, setMaxItems] = useState(3);

  const getClassName = (index) => (index === 0 ? "active" : "");
  const getCarouselClassName = (index) =>
    index === 0 ? "carousel-item active" : "carousel-item";
  const getCurrent = (index) => (index === 0 ? "true" : "");

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        {reviews &&
          reviews.length > 0 &&
          reviews.slice(0, 3).map((review, index) => {
            return (
              <div key={index}>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={index}
                  className={getClassName(index)}
                  aria-current={getCurrent(index)}
                  aria-label={review.title}
                ></button>
              </div>
            );
          })}
      </div>
      <div className="carousel-inner">
        {reviews &&
          reviews.length > 0 &&
          reviews.slice(0, 3).map((review, index) => {
            return (
              <div key={index} className={getCarouselClassName(index)}>
                <img
                  src={review.posterImage}
                  className="d-block w-100"
                  style={{ height: "587px", overflow: "hidden" }}
                  alt={review.title}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{review.title}</h5>
                  <p>{review.shortDesc}</p>
                </div>
              </div>
            );
          })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HeroBanner;
