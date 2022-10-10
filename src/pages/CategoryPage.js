import React from 'react'
import ReviewsByCategory from '../components/ReviewsByCategory';
import Footer from '../components/Footer';
import {useParams} from "react-router-dom";

function HomePage() {
  const { categoryId } = useParams();

  return (
    <div>
      { categoryId ? <ReviewsByCategory maxItems={-1}></ReviewsByCategory> : '' }
      
    </div>
  )
}

export default HomePage;