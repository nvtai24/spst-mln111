import "./LoadingScreen.css";

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <div className="loader"></div>
            <p className="loading-text">Đang khởi tạo bối cảnh lịch sử...</p>
        </div>
    );
}

export default LoadingScreen;
