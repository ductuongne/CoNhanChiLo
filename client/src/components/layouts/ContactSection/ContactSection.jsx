import { useState } from 'react';
import './ContactSection.css';
import CustomPopup from '../../common/CustomPopup';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [popup, setPopup] = useState({
        show: false,
        type: '',
        message: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            setPopup({
                show: true,
                type: 'error',
                message: 'Vui lòng điền đầy đủ thông tin!'
            });
            return;
        }

        try {
            const submit = await fetch('#', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (submit.ok) {
                setPopup({
                    show: true,
                    type: 'success',
                    message: 'Tin nhắn của bạn đã được gửi thành công!'
                });
                // Reset form
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            setPopup({
                show: true,
                type: 'error',
                message: 'Đã xảy ra lỗi. Vui lòng thử lại sau.'
            });
        }
    }
    return (
        <div id='contact-section' className='contact-section'>
            <h2 className='contact-section-title'>Liên hệ với chúng tôi</h2>
            <div className='contact-content'>
                <div className='contact-info'>
                    <img className='logo' src="../../assets/logo.png" alt="Cổ Nhân Chi Lộ" />
                    <h3 className='contact-info-title'>Thông tin liên hệ</h3>
                    <p>
                        Bạn có thể liên hệ với chúng tôi qua thông tin sau đây
                    </p>
                    <div className='contact-info-details'>
                        <div>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:info@example.com">info@example.com</a>
                        </div>
                        <div>
                            <i className='fas fa-phone'></i>
                            <a href="tel:+123456789">+123456789</a>
                        </div>
                        <div>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>123 Đường ABC, Quận XYZ, Thành phố HCM</span>
                        </div>
                    </div>
                </div>

                <form className='contact-form'>
                    <label className='contact-name' htmlFor="name">Tên của bạn</label>
                    <input id='name' type='text'
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    <label className='contact-email' htmlFor="email">Email</label>
                    <input id='email' type='email'
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <label className='contact-message' htmlFor="message">Nội dung</label>
                    <textarea id='message' rows='5'
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}>
                    </textarea>
                    <button type='submit' onClick={handleSubmit}>Gửi tin nhắn</button>
                </form>
            </div>

            <CustomPopup
                isOpen={popup.show}
                type={popup.type}
                message={popup.message}
                onClose={() => setPopup({ ...popup, show: false })}
            />
        </div>
    )

}

export default ContactSection;