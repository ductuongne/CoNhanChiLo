import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './CustomPopup.css';

const CustomPopup = ({ isOpen, type, message, onClose }) => {
    return (
        <Popup
            open={isOpen}
            modal
            nested
            onClose={onClose}
            closeOnDocumentClick
        >
            <div className={`custom-popup-overlay ${type}`}>
                <div className="custom-popup-content">
                    <div className="custom-popup-header">
                        {type === 'success' ? (
                            <i className="fas fa-check-circle"></i>
                        ) : type === 'error' ? (
                            <i className="fas fa-exclamation-circle"></i>
                        ) : (
                            <i className="fas fa-info-circle"></i>
                        )}
                        <h2>
                            {type === 'success' ? 'Thành công!' :
                                type === 'error' ? 'Lỗi!' :
                                    'Thông báo'}
                        </h2>
                    </div>
                    <p>{message}</p>
                    <button
                        className="custom-popup-close-btn"
                        onClick={onClose}
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </Popup>
    );
};

export default CustomPopup;
