import { useState } from "react";
import "./getNumberEnergy.css";
import CustomPopup from "../../common/CustomPopup";

const GetNumberEnergy = ({title, description}) => {

    const [formData, setFormData] = useState({
        birthday: '',
        gender: '',
        birthmonth: '',
        birthyear: '',
    });
    
    const [popup, setPopup] = useState({
        show: false,
        type: '',
        message: ''
    });

    const setdata = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.birthday || !formData.gender || !formData.birthmonth || !formData.birthyear) {
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
                    birthday: formData.birthday,
                    gender: formData.gender,
                    birthmonth: formData.birthmonth,
                    birthyear: formData.birthyear,
                })
            });
            if (!submit.ok) {
                setPopup({
                    show: true,
                    type: 'error',
                    message: 'Có lỗi xảy ra, vui lòng thử lại sau!'
                });
                return;
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
            message: 'Tra cứu thành công!'
        });
    }
    return (
        <div className="get-number-compass-container">
            <form className="get-number-compass-form">
                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <label htmlFor="birthday">Ngày sinh</label>
                <input type="text" id="birthday" name="birthday" placeholder="Nhập ngày sinh của bạn" value={formData.birthday} onChange={setdata} />
                <label htmlFor="birthmonth">Tháng sinh</label>
                <input type="text" id="birthmonth" name="birthmonth" placeholder="Nhập tháng sinh của bạn" value={formData.birthmonth} onChange={(e) => setFormData({ ...formData, birthmonth: e.target.value })} />
                <label htmlFor="birthyear">Năm sinh</label>
                <input type="text" id="birthyear" name="birthyear" placeholder="Nhập năm sinh của bạn" value={formData.birthyear} onChange={(e) => setFormData({ ...formData, birthyear: e.target.value })} />
                <label htmlFor="gender">Giới tính</label>
                <select id="gender" name="gender" placeholder="Chọn giới tính của bạn" value={formData.gender} onChange={setdata}>
                    <option value="">Chọn giới tính</option>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                </select>
                <button type="submit" onClick={handleSubmit}>Tra cứu</button>
            </form>
            <CustomPopup
                isOpen={popup.show}
                type={popup.type}
                message={popup.message}
                onClose={() => setPopup({ ...popup, show: false })}
            />
        </div>
    )
};

export default GetNumberEnergy;