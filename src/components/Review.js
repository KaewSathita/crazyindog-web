import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {useReview} from "../context/ReviewContext";
import { timeSince } from "../utils/dateFormat";
import { useAuth } from "../context/AuthContext";
import Moment from 'moment';

function Review() {
  const { id } = useParams();
  const { reviews } = useReview();
  const [ review , setReview ] = useState({});
  const { user } = useAuth();


  useEffect(() => {
    const getReviewById = async () => {
      try {
        if (reviews && reviews.length > 0) {
          const review = reviews.find(item => item.id === parseInt(id));
          setReview(review)
        }
      } catch (err) {
        console.log(err);
      }
    };
    getReviewById();
  }, [reviews]);

  return (
    <div className="p-5 mb-4 bg-light rounded-3 "   >
      { review &&
        <>
          <img src={review.posterImage} alt="photoReview" className="img-fluid" width='100%'></img>
          <i className="calendar-date eye star" />
          <h1 className="display-5 fw-bold mt-5 mb-5">{review.title}</h1>
          <div>
            <i className="bi bi-clock" style={{fontSize: '2rem'}}></i>
            <span className="col-md-8 fs-4 mx-2">{Moment(review.createdAt).format('d MMM YYYY HH:mm')}</span>
          </div>
          <hr style={{borderTop: "1px dashed grey"}}  />
          {/* <h1>ผู้เขียน : {user.penName || user.firstName}</h1> */}
          
         
          <div className="d-flex">
            <p>{review.shortDesc}</p>
          </div>
          <div className="d-flex">
            <p dangerouslySetInnerHTML={{__html: review.description}}></p>
          </div>
        </>
      }
    </div>
  )
}

export default Review