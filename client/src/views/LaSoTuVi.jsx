import { createRoot } from "react-dom/client";
import React from "react";
import { useEffect } from "react";
import LaSoTuVi from "../components/layouts/TaoLaSo/TaoLaSo";
import Footer from "../components/layouts/Footer/Footer";
import Header from "../components/layouts/Header/Header";
import SetTitle from "../components/common/SetTitle";

const LaSoTuViPage = () => {

    return (
        <>
            <Header />
            <SetTitle title="Tạo Lá Số Của Bạn" />
            <LaSoTuVi />
            <Footer />
        </>
    );
}

export default LaSoTuViPage;