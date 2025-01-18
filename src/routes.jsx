
// Admin Imports
import MainDashboard from "./views/admin/default";
import CommonComponents from "./views/admin/CommonComponents/index";
import Services from "./views/admin/Services/index";
import HomeHero from "./views/admin/Landingpage/HomeHero";
import RTLDefault from "./views/rtl/default";
import Partners from "./views/admin/Partners/Partners";
import Contact from "./views/admin/Contact/index";
import About from "./views/admin/About/index";
import Blog from "./views/admin/Blog/index";
import { FaHandshake } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";



import { RiContactsFill } from "react-icons/ri";
import { GrContactInfo } from "react-icons/gr";
import { ImBlog } from "react-icons/im";
// Auth Imports
import SignIn from "./views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdBarChart,
  MdLock,
} from "react-icons/md";
import { TbHomeEdit } from "react-icons/tb";
import ContactUs from "./views/admin/ContactUs";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "common components",
    layout: "/admin",
    path: "common-components",
    icon: <TbHomeEdit className="h-6 w-6" />,
    component: <CommonComponents />,

    secondary: true,
  },
  {
    name: "Landing Page",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "landingpage",
    component: <HomeHero />,
  },
  {
    name: "Services Page",
    layout: "/admin",
    path: "services",
    icon: <GrServices className="h-6 w-6" />,
    component: <Services />,
  },
  {
    name: "Partners Page",
    layout: "/admin",
    path: "partners",
    icon: <FaHandshake className="h-6 w-6" />,
    component: <Partners />,
  },
  {
    name: "Contact Page",
    layout: "/admin",
    path: "contact",
    icon: <RiContactsFill className="h-6 w-6" />,
    component: <Contact />,
  },

  {
    name: "About Page",
    layout: "/admin",
    path: "about",
    icon: <GrContactInfo className="h-6 w-6" />,
    component: <About />,
  },
  {
    name: "Blog Page",
    layout: "/admin",
    path: "blog",
    icon: <ImBlog className="h-6 w-6" />,
    component: <Blog />,
  },
  {
    name: "Contact Us",
    layout: "/admin",
    path: "contactus",
    icon: <RiContactsFill className="h-6 w-6" />,
    component: <ContactUs />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
