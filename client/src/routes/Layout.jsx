import { ScrollToTop } from "../components/common/Scroll.jsx";

const Layout = ({ children }) => {
    return (
        <>
            <ScrollToTop />
            {children}
        </>
    );
};

export default Layout;