import { Navigate, Route, Routes } from "react-router";
import WebBody from "./Components/WebBody/WebBody";
import Services from "./Pages/Services/Services";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import UserLayout from "./Pages/UserLayout/UserLayout";
import RtlLayout from "./layouts/rtl/index";
import AdminLayout from "./layouts/admin/index";
import AuthLayout from "./layouts/auth/index";
import Protected from "./components_admin/Protected/Protected";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
function App() {

  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        once: true,
      });
    }, 500);
  }, []);

  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<WebBody />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="auth/*" element={<AuthLayout />} />
        <Route element={<Protected />}>
          <Route path="admin/*" element={<AdminLayout />} />
        </Route>
        <Route path="rtl/*" element={<RtlLayout />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </>
  );
}

export default App;
