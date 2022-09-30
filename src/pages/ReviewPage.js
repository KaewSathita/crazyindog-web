import React from 'react'
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import ReviewPage from '../components/ReviewPage';

function WriteReviewPage() {
  return (
    <div>
      <Navbar></Navbar>
      <ReviewPage></ReviewPage>
      <Footer></Footer>
    </div>
  )
}

export default WriteReviewPage