import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import Messages from "./components/Messages";
import Doctors from "./components/Doctors";
import AddNewAdmin from "./components/AddNewAdmin";
import Sidebar from "./components/Sidebar";
import { Context } from "./main";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, admin, setAdmin } =
    useContext(Context);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/admin/me",
          {
            withCredentials: true,
          }
        );

        if (response.data && response.data.user) {
          setIsAuthenticated(true);
          setAdmin(response.data.user);
        } else {
          setIsAuthenticated(false);
          setAdmin({});
        }
      } catch (error) {
        setIsAuthenticated(false);
        setAdmin({});
        console.error(
          "Error fetching admin:",
          error.response?.data?.message || error.message
        );
      }
    };

    fetchAdmin();
  }, [setIsAuthenticated, setAdmin]);

  return (
    <Router>
      {isAuthenticated && <Sidebar />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/doctor/addnew"
          element={isAuthenticated ? <AddNewDoctor /> : <Login />}
        />
        <Route
          path="/admin/addnew"
          element={isAuthenticated ? <AddNewAdmin /> : <Login />}
        />
        <Route
          path="/messages"
          element={isAuthenticated ? <Messages /> : <Login />}
        />
        <Route
          path="/doctors"
          element={isAuthenticated ? <Doctors /> : <Login />}
        />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
