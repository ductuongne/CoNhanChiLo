import Header from "../components/layouts/Header/Header";
import Footer from "../components/layouts/Footer/Footer";
import GetNumberEnergy from "../components/layouts/GetNumberEnergy/GetNumberEnergy";
import SetTitle from "../components/common/SetTitle";
const ThanSoHoc = () => {
    return (
        <>
            <SetTitle title="Tra cứu thần số học" />
            <Header />
            <GetNumberEnergy 
                title="Tra cứu thần số học" 
                description="Nhập thông tin của bạn để tra cứu thần số học của bạn" 
            />
            <Footer />
        </>
    );
};
export default ThanSoHoc;
