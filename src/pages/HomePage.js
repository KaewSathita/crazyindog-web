import React from 'react'
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import ReviewsByCategory from '../components/ReviewsByCategory';
import LatestReviews from '../components/LatestReviews';



function HomePage() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <LatestReviews maxItems={6}></LatestReviews>
      <ReviewsByCategory categoryId={1} maxItems={6}></ReviewsByCategory>
      <ReviewsByCategory categoryId={2} maxItems={6}></ReviewsByCategory>
      
    </div>
  )
}

export default HomePage;