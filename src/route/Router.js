import React from 'react';
import { Routes, Route } from 'react-router-dom'
import WebLayout from "../pages/layouts/WebLayout";
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import EditProfilePage from '../pages/EditProfilePage';
import RegisterPage from '../pages/RegisterPage';
import ReviewPage from '../pages/ReviewPage';
import WriteReviewPage from '../pages/WriteReviewPage';
import EditReviewPage from "../pages/EditReviewPage";
import { useAuth } from '../context/AuthContext';
import MyProfilePage from '../pages/MyProfilePage';
import CategoryPage from '../pages/CategoryPage';



function Router() {
  const { user } = useAuth();
  return <Routes>
      <Route path= "/" element={<WebLayout />}>
        <Route path= "/" element={<HomePage />} />
        <Route path= "/myprofile" element={<MyProfilePage />} />
        <Route path= "/editprofile" element={<EditProfilePage />} />
        <Route path= "/categories/:categoryId/reviews" element={<CategoryPage />} />
        <Route path= "/reviews/:id" element={<ReviewPage />} />
        { user ? <Route path= "/reviews/:id/edit" element={<EditReviewPage />} />: ''}
        { user ? <Route path= "/write-review" element={<WriteReviewPage />} /> : '' }
      </Route>
     
      <Route path= "/login" element={<LoginPage />} />
      <Route path= "/register" element={<RegisterPage />} />
    <Route/>

  </Routes>
}

export default Router;