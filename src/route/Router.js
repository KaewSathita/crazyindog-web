import React from 'react';
import { Routes, Route } from 'react-router-dom'
import WebLayout from "../pages/layouts/WebLayout";
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';
import ReviewPage from '../pages/ReviewPage';
import WriteReviewPage from '../pages/WriteReviewPage';
import { useAuth } from '../context/AuthContext';


function Router() {
  const { user } = useAuth();
  return <Routes>
      <Route path= "/" element={<WebLayout />}>
        <Route path= "/" element={<HomePage />} />
        <Route path= "/profile" element={<ProfilePage />} />
        <Route path= "/review" element={<ReviewPage />} />
        { user ? <Route path= "/writeReview" element={<WriteReviewPage />} /> : '' }
      </Route>
      <Route path= "/login" element={<LoginPage />} />
      <Route path= "/register" element={<RegisterPage />} />
    <Route/>

  </Routes>
}

export default Router;