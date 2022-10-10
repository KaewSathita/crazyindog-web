import { createContext, useContext, useEffect, useState } from 'react';
import * as reviewService from '../api/reviewApi';

const ReviewContext = createContext();

function ReviewContextProvider({ children }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        await getReviews()
      } catch (err) {
        console.log(err);
      } finally {
      }
    };
    fetchReviews();
  }, []);

  const getReviews = async () => {
    const res = await reviewService.getAll();
    setReviews(res.data.reviews)
  }

  const createReview = async (payload) => {
    const res = await reviewService.create(payload);
    setReviews([res.data.review, ...reviews])
  }

  const updateReview = async (id, payload) => {
    const res = await reviewService.update(id, payload);
    const idx = reviews.findIndex(item => item.id === id);
    const newReviews = [...reviews];
    if (idx >= 0) {
      newReviews.splice(idx, 1, res.data.review);
    } else { // impossible
      newReviews.push(res.data.review);
    }
    setReviews(newReviews);
  }

  const deleteReview = async (id) => {
    const res = await reviewService.destroy(id);
    const idx = reviews.findIndex(item => item.id === id);
    const newReviews = [...reviews];
    if (idx >= 0) {
      newReviews.splice(idx, 1);
    }
    setReviews(newReviews);
  }

  return (
    <ReviewContext.Provider value={{ reviews, getReviews, createReview, updateReview, deleteReview }}>
      {children}
    </ReviewContext.Provider>
  );
}

export const useReview = () => {
  return useContext(ReviewContext);
};

export default ReviewContextProvider;