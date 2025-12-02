import React from "react";
import './HeroSection.css';
import { scrollbyId } from '../../common/Scroll';

const HeroSection = () => {


    return (
        <>
            <div className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1>Khám Phá Cổ Nhân Chi Lộ</h1>
                        <p>
                            Chào mừng bạn đến với Cổ Nhân Chi Lộ - Nơi khám phá những bí ẩn về con số đường đời và vận mệnh của bạn thông qua các phương pháp huyền học cổ xưa.
                        </p>
                        <button className="btn-primary" onClick={() => scrollbyId("feature")}>Tìm Hiểu Ngay</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;