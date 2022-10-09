import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useReview } from "../context/ReviewContext";
import { Link, useParams } from "react-router-dom";
import { timeSince } from '../utils/dateFormat';

function LatestReviews(props) {
  const { user } = useAuth();
  const { reviews } = useReview();
  const [travelReviews, setTravelReviews] = useState([]);

  const [theReviews, setTheReviews] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getTravelReviews = async () => {

      // try {
      //   if (reviews && reviews.length > 0) {
      //     const newReviews = reviews.filter(
      //       (review) => review.categoryId === categoryId
      //     );
      //     setTheReviews(newReviews);
      //   }
      // } catch (err) {
      //   console.log(err);
      // }
    
      try {
        if (reviews && reviews.length > 0) {
          const categoryId = 2; // Travel
          const newReviews = reviews.filter(review => review.categoryId === categoryId);
          setTravelReviews(newReviews);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getTravelReviews();
  }, [reviews, categoryId]);

  return (
    <div>
      <p className="fs-3 mt-3 mb-3">รีวิวล่าสุด</p>
      <hr className="featurette-divider"></hr>

      { travelReviews && travelReviews[0] &&
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">{ travelReviews[0].title }</h2>
            <p className="lead">{ travelReviews[0].shortDesc }</p>
            <Link to={`/reviews/${travelReviews[0].id}`}>อ่านต่อ...</Link>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={ travelReviews[0].posterImage } style={{maxHeight: "300px", overflow: "hidden"}} alt={ travelReviews[0].title } />
          </div>
        </div>
      }

      <hr className="featurette-divider"></hr>

      {travelReviews && travelReviews[1] &&
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">{ travelReviews[1].title }</h2>
            <p className="lead">{ travelReviews[1].shortDesc }</p>
            <Link to={`/reviews/${travelReviews[1].id}`}>อ่านต่อ...</Link>
          </div>
          <div className="col-md-5">
            <img src={ travelReviews[1].posterImage } style={{height: "300px", overflow: "hidden"}} alt={ travelReviews[0].title } />
          </div>
          <hr className="featurette-divider"></hr>
        </div>
      }


    </div>

  )
}

export default LatestReviews