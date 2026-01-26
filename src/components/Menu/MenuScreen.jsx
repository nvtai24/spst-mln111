import { useState } from "react";
import "./MenuScreen.css";

function MenuScreen({ onStart }) {
    const [activeContent, setActiveContent] = useState('main'); // 'main', 'instructions', 'intro'

    const renderContent = () => {
        if (activeContent === 'instructions') {
            return (
                <div className="menu-content">
                    <h2 className="menu-content-title">Hướng dẫn</h2>
                    <div className="menu-text">
                        <p>Chào mừng bạn đến với Giai Cấp & Ý Thức!</p>
                        <p>Trong trò chơi này, bạn sẽ trải qua các tình huống mô phỏng sự phân hóa xã hội và đấu tranh giai cấp.</p>
                        <ul className="menu-list">
                            <li>Đưa ra các quyết định để sinh tồn và phát triển.</li>
                            <li>Quan sát sự thay đổi của các chỉ số xã hội.</li>
                            <li>Khám phá các kết thúc khác nhau dựa trên lựa chọn của bạn.</li>
                        </ul>
                    </div>
                    <button className="menu-btn" onClick={() => setActiveContent('main')}>
                        Quay lại
                    </button>
                </div>
            );
        }

        if (activeContent === 'intro') {
            return (
                <div className="menu-content">
                    <h2 className="menu-content-title">Giới thiệu</h2>
                    <div className="menu-text">
                        <p>Dự án: Sản Phẩm Sáng Tạo - SPST-MLN111</p>
                        <p>Môn học: Những nguyên lý cơ bản của chủ nghĩa Mác - Lênin</p>
                        <div className="divider"></div>
                        <p>Trò chơi được thiết kế nhằm giúp người chơi hiểu rõ hơn về:</p>
                        <p>- Nguồn gốc và bản chất của giai cấp.</p>
                        <p>- Vai trò của đấu tranh giai cấp trong lịch sử.</p>
                        <p>- Ý thức xã hội và sự tác động qua lại với tồn tại xã hội.</p>
                    </div>
                    <button className="menu-btn" onClick={() => setActiveContent('main')}>
                        Quay lại
                    </button>
                </div>
            );
        }

        return (
            <>
                <h1 className="menu-title">Giai Cấp & Ý Thức</h1>
                <p className="menu-subtitle">
                    Một trò chơi mô phỏng lựa chọn xã hội và đấu tranh giai cấp
                </p>

                <button className="menu-btn primary" onClick={onStart}>
                    Bắt đầu trò chơi
                </button>

                <button className="menu-btn" onClick={() => setActiveContent('instructions')}>
                    Hướng dẫn
                </button>

                <button className="menu-btn" onClick={() => setActiveContent('intro')}>
                    Giới thiệu
                </button>
            </>
        );
    };

    return (
        <div className="menu-screen">
            <div className="menu-card">
                {renderContent()}
            </div>
        </div>
    );
}

export default MenuScreen;
