import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import { useAuth } from "@pangeacyber/react-oauth";

import Header from "@components/Header";
import Footer from "@components/Footer";

import Status from "@components/Status";
import Home from "@features/Home";
import Profile from "@features/Profile";

const Router = () => {
  const { authenticated, loading, error, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !error && !authenticated) {
      const redirectPath = `/${window.location.search}`;
      navigate(redirectPath);
    }
  }, [navigate, error, authenticated, loading]);

  if (loading) {
    return (<Status message="Loading" />);
  } else if (error) {
    logout();
  }
  
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Router;