import { useState } from 'react';
import './TaoLaSo.css';
import CustomPopup from '../../common/CustomPopup';

const TaoLaSo = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        calendar: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        birthHour: '',
        birthMinute: ''
    });

    const [popup, setPopup] = useState({
        show: false,
        type: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.gender || !formData.calendar || !formData.birthDay || !formData.birthMonth || !formData.birthYear || !formData.birthHour || !formData.birthMinute) {
            setPopup({
                show: true,
                type: 'error',
                message: 'Vui lòng điền đầy đủ thông tin!'
            });
            return;
        }
        try {
            const khoitaoLaSo = await fetch('#', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                })
            });

            if (!khoitaoLaSo.ok) {
                throw new Error('Có lỗi xảy ra, vui lòng thử lại sau!');
            }
        } catch (error) {
            setPopup({
                show: true,
                type: 'error',
                message: error.message
            });
            return;
        }

        setPopup({
            show: true,
            type: 'success',
            message: 'Lá số của bạn đã được tạo thành công!'
        });

        console.log('Form data:', formData);
    };

    return (
        <div className="tao-la-so-section">
            <div className="tao-la-so-container">
                <h2 className="tao-la-so-title">Tạo Lá Số Tử Vi</h2>
                <p className="tao-la-so-subtitle">
                    Khám phá vận mệnh của bạn qua lá số tử vi cổ truyền
                </p>

                <form className="tao-la-so-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">
                            <i className="fas fa-user"></i>
                            Họ và tên
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Nhập họ tên của bạn (không bắt buộc)"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="gender">
                                <i className="fas fa-venus-mars"></i>
                                Giới tính
                            </label>
                            <select
                                id="gender"
                                value={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            >
                                <option value="">Chọn giới tính</option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="calendar">
                                <i className="fas fa-calendar-alt"></i>
                                Loại lịch
                            </label>
                            <select
                                id="calendar"
                                value={formData.calendar}
                                onChange={(e) => setFormData({ ...formData, calendar: e.target.value })}
                            >
                                <option value="">Chọn loại lịch</option>
                                <option value="solar">Dương lịch</option>
                                <option value="lunar">Âm lịch</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="birthDay">
                            <i className="fas fa-birthday-cake"></i>
                            Ngày sinh
                        </label>
                        <div className="time-select-wrapper">
                            <select
                                className="time-select"
                                id="birthDay"
                                value={formData.birthDay}
                                onChange={(e) => setFormData({ ...formData, birthDay: e.target.value })}
                            >
                                <option value="">Ngày</option>
                                {Array.from({ length: 31 }, (_, d) => (
                                    <option key={d + 1} value={String(d + 1).padStart(2, '0')}>
                                        {String(d + 1).padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="time-select"
                                id="birthMonth"
                                value={formData.birthMonth}
                                onChange={(e) => setFormData({ ...formData, birthMonth: e.target.value })}
                            >
                                <option value="">Tháng</option>
                                {Array.from({ length: 12 }, (_, m) => (
                                    <option key={m + 1} value={String(m + 1).padStart(2, '0')}>
                                        {String(m + 1).padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                            <input
                                className="time-select"
                                id="birthYear"
                                type="text"
                                placeholder="Năm"
                                value={formData.birthYear}
                                onChange={(e) => setFormData({ ...formData, birthYear: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="birthHour">
                            <i className="fas fa-clock"></i>
                            Giờ sinh (24h)
                        </label>
                        <div className="time-select-wrapper">
                            <select
                                className="time-select"
                                id="birthHour"
                                value={formData.birthHour}
                                onChange={(e) => setFormData({ ...formData, birthHour: e.target.value })}
                            >
                                <option value="">Giờ</option>
                                {Array.from({ length: 24 }, (_, h) => (
                                    <option key={h} value={String(h).padStart(2, '0')}>
                                        {String(h).padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="time-select"
                                id="birthMinute"
                                value={formData.birthMinute}
                                onChange={(e) => setFormData({ ...formData, birthMinute: e.target.value })}
                            >
                                <option value="">Phút</option>
                                {Array.from({ length: 60 }, (_, m) => (
                                    <option key={m} value={String(m).padStart(2, '0')}>
                                        {String(m).padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="tao-la-so-btn">
                        <i className="fas fa-star"></i>
                        Tạo Lá Số
                    </button>
                </form>
            </div>

            <CustomPopup
                isOpen={popup.show}
                type={popup.type}
                message={popup.message}
                onClose={() => setPopup({ ...popup, show: false })}
            />
        </div >
    );
};

export default TaoLaSo;
