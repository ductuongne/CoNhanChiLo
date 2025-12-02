import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="logo-footer">
                        <img className='logo' src="../../assets/logo.png" alt="Cổ Nhân Chi Lộ" />
                        <p>
                            Chúng tôi hy vọng rằng Website Cổ Nhân Chi Lộ sẽ giúp các bạn có thêm bức tranh toàn cảnh hơn để khám phá về vận mệnh của bản thân. Từ đó nắm bắt và làm chủ cuộc đời của chính mình.
                        </p>
                        <div className="social-media">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div className="about-us">
                        <span className="title">Về chúng tôi</span>
                        <li className="menu-item">
                            <Link to="/about">Giới thiệu</Link>
                        </li>
                        <li className="menu-item"><Link to="/blog">Blog</Link></li>
                        <li className="menu-item"><Link to="/contact">Liên hệ</Link></li>
                    </div>
                    <div className="service">
                        <span className="title">Dịch vụ</span>
                        <li className="menu-item"><Link to="/lasotuvi">Lá Số Tử Vi</Link ></li>
                        <li className="menu-item"> <Link to="/thongdiep"> Thông Điệp</Link></li>
                        <li className="menu-item"> <Link to="/tarot">Tarot</Link></li>
                    </div>
                    <div className='author'>
                        <p className="copyright">© 2025 by Cổ Nhân Chi Lộ. All rights reserved.</p>
                        <p className="dev">Vận hành và phát triển bởi <a href="https://github.com/ductuongne" target='blank'>Ductuongne</a></p>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer;