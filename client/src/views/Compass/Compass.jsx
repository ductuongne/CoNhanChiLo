import GetNumberEnergy from "../../components/layouts/GetNumberEnergy/GetNumberEnergy";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import SetTitle from "../../components/common/SetTitle";
import { Outlet } from "react-router-dom";


const Compass = () => {
    return (
        <>
            <SetTitle title="La bàn năng lượng" />
            <Header />
            <GetNumberEnergy 
                title="Tìm con số năng lượng" 
                description="Nhập thông tin của bạn để tra cứu la bàn năng lượng số của bạn" 
            />
            <Footer />
        </>
    );
}

export default Compass;