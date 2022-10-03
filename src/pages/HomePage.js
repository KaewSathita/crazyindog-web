import React from 'react'
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import LatestHotelReviews from '../components/LatestHotelReviews';
import LatestPlaceReviews from '../components/LatestPlaceReviews';



function HomePage() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <LatestPlaceReviews></LatestPlaceReviews>
      <LatestHotelReviews></LatestHotelReviews>
      <Footer/>
      
    </div>
  )
}

export default HomePage;