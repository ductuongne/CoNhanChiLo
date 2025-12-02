import "./SoonSection.css";
import { useNavigate } from "react-router-dom";
const SoonSection = () => {
    const navigate = useNavigate();
    return (
        <div className="soon-section">
            <h2 className="soon-section-title">Tính năng sắp ra mắt</h2>
            <p className="soon-section-description">Chúng tôi đang phát triển tính năng mới nhất cho bạn. Vui lòng quay lại sau.</p>
            <button className="soon-section-button" onClick={() => navigate ("/")}>Quay lại trang chủ</button>
        </div>
    )};

export default SoonSection;