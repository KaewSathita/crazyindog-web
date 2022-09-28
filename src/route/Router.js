import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';
import ReviewPage from '../pages/ReviewPage';
import WriteReviewPage from '../pages/WriteReviewPage';
import Navbar from '../components/Navbar';

function Router() {
  return (
    <Routes>
      {/* <Route path= "/" element={<Navbar />} /> */}
      <Route path= "/" element={<LoginPage />} />
        <Route path= "/register" element={<RegisterPage />} />
        <Route path= "/home" element={<HomePage />} />
        <Route path= "/profile" element={<ProfilePage />} />
        <Route path= "/review" element={<ReviewPage />} />
        <Route path= "/writeReview" element={<WriteReviewPage />} />

      <Route/>
    </Routes>
  )
}

export default Router;