import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import WebBody from "./Components/WebBody/WebBody";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Services from "./Pages/Services/Services";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import UserLayout from "./Pages/UserLayout/UserLayout";
import RtlLayout from "./layouts/rtl/index";
import AdminLayout from "./layouts/admin/index";
import AuthLayout from "./layouts/auth/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<WebBody />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>




        <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
