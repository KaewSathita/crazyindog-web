import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useReview } from "../context/ReviewContext";
import { Link, useParams } from "react-router-dom";
import { timeSince } from '../utils/dateFormat';

function LatestReviews(props) {
  const { user } = useAuth();
  const { reviews } = useReview();

  return (
    <div>
      <hr className="featurette-divider"></hr>
      <p className="fs-3 mt-3 mb-3 pt-3"> <strong style={{color: 'blue'}}>รีวิวล่าสุด</strong></p>
      {/* <hr className="featurette-divider"></hr> */}

      { reviews && reviews[0] &&
        <div className="row featurette">
          <div className="col-md-7 order-md-2 ">
            <h2 className="featurette-heading fw-normal lh-1 my-title">{ reviews[0].title }</h2>
            <div className="lead my-short-desc">
              { reviews[0].shortDesc }
            </div>
            {/* <p className="lead">{ reviews[0].shortDesc }</p> */}
            <Link to={`/reviews/${reviews[0].id}`}>อ่านต่อ...</Link>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={ reviews[0].posterImage } style={{width:'100%', overflow: "hidden"}} alt={ reviews[0].title } />
          </div>
        </div>
      }

      {/* <hr className="featurette-divider"></hr> */}
      {reviews && reviews[1] &&
        <div className="row featurette">
          
          <div className="col-md-7 pt-5">
            <h2 className="featurette-heading fw-normal lh-1 my-title">{ reviews[1].title }</h2>
            <div className="lead my-short-desc">
              { reviews[1].shortDesc }
            </div>
            {/* <p className="lead">{ reviews[1].shortDesc }</p> */}
            <Link to={`/reviews/${reviews[1].id}`}>อ่านต่อ...</Link>
          </div>
          <div className="col-md-5 pt-5 mb-5">
            <img src={ reviews[1].posterImage } style={{width:'100%', overflow: "hidden"}} alt={ reviews[0].title } />
          </div>
          <hr className="featurette-divider"></hr>
        </div>
      }


    </div>

  )
}

export default LatestReviews