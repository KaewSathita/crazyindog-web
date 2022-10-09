import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import AuthContextProvider from './context/AuthContext';
import LoadingContextProvider from './context/LoadingContext';
import CategoryContextProvider from "./context/CategoryContext";
import ReviewContextProvider from "./context/ReviewContext";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <LoadingContextProvider>
      <AuthContextProvider>
        <CategoryContextProvider>
          <ReviewContextProvider>
            <App />
          </ReviewContextProvider>
        </CategoryContextProvider>
      </AuthContextProvider>
    </LoadingContextProvider>
  </BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
