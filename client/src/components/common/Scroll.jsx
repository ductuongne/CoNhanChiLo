import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const scrollbyId = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};
export { ScrollToTop };

export { scrollbyId };
