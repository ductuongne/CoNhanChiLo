import Compass from "../views/Compass/Compass.jsx";
import Layout from "./Layout.jsx";
import CompassNumber1 from "../views/Compass/CompassNumber1.jsx";

const compassRoutes = [
    {
    path: "/labannangluong",
    element: <Layout><Compass /></Layout>,
    },
    {
    path: "/labannangluong/1",
    element: <Layout><CompassNumber1 /></Layout>,
    },
];

export default compassRoutes;