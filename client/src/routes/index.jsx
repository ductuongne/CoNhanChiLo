import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import LaSoTuViPage from "../views/LaSoTuVi";
import Contact from "../views/Contact.jsx";
import Layout from "./Layout.jsx";
import About from "../views/About";
import ThanSoHoc from "../views/ThanSoHoc";
import compassRoutes from "./compassRoutes.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Home /></Layout>,

    },
    {
        path: "/lasotuvi",
        element: <Layout><LaSoTuViPage /></Layout>,
    },
    {
        path: "/contact",
        element: <Layout><Contact /></Layout>,
    },
    {
        path: "/about",
        element: <Layout><About /></Layout>,
    },
    ...compassRoutes,
    {
        path: "/thansohoc",
        element: <Layout><ThanSoHoc /></Layout>,
    },
]);

export default router;

