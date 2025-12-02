import ContactSection from "../components/layouts/ContactSection/ContactSection";
import SetTitle from "../components/common/SetTitle";
import Header from "../components/layouts/Header/Header";
import Footer from "../components/layouts/Footer/Footer";

const Contact = () => {
    return (
        <>
            <SetTitle title="Liên Hệ Với Chúng Tôi" />
            <Header />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Contact;