import React from 'react'
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import LatestHotelReviews from '../components/LatestHotelReviews';
import LatestPlaceReviews from '../components/LatestPlaceReviews';
import Navbar from "../components/Navbar";


function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <LatestPlaceReviews></LatestPlaceReviews>
      <LatestHotelReviews></LatestHotelReviews>
      <Footer/>
      
    </div>
  )
}

export default HomePage;