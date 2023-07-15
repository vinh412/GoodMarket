import {
  Route,
  BrowserRouter,
  Routes,
  Navigate
} from "react-router-dom";
import React from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import './App.css'
import Layout from "./layouts/Layout";
import SignUp from './pages/sign/SignUp';
import LogIn from './pages/sign/LogIn';
import Home from './pages/home/Home';

function App() {
  const { user } = useAuthContext();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="blogs" element={user ? <h1>Blogs</h1> : <Navigate to="/login"/>} />
          </Route>
          <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/"/>} />
          <Route path="/login" element={!user ? <LogIn /> : <Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
