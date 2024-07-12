/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Appointment from "./pages/Appointment.jsx";
import AboutUs from "./pages/Aboutus.jsx";
import Register from "./pages/Register.jsx";

import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main.jsx";
import Login from "./pages/Loginn.jsx";
const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);
// yaha ek function banaya hai fetch user ye user ki detail get karega  agar user ki value true hai to value apan ko t
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        //yaha jab hame user ki detail milegi tab hame true karna hai setisauthenticated ko aur hame set user ke anad us user ko store kia hai 
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
     
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;