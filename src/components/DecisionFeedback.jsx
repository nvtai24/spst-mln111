import { useEffect, useState } from "react";
import "./DecisionFeedback.css";

function DecisionFeedback({ effects, onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 300);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  // Tính toán thông điệp hài hước dựa trên effects
  const getHumorousMessage = () => {
    const totalPositive = Object.values(effects).filter(v => v > 0).length;
    const totalNegative = Object.values(effects).filter(v => v < 0).length;
    const maxChange = Math.max(...Object.values(effects).map(Math.abs));
    
    if (totalPositive > totalNegative && maxChange > 20) {
      const messages = [
        "🚩 Tuyệt vời! Bạn đang trên con đường cách mạng đúng đắn!",
        "⭐ Quyết định này sẽ được ghi vào sử sách!",
        "🔥 Lửa cách mạng trong bạn đang bùng cháy!",
        "💪 Ý thức giai cấp của bạn đang tăng vọt!",
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    } else if (totalNegative > totalPositive && maxChange > 20) {
      const messages = [
        "😅 Hmm... có vẻ bạn cần suy nghĩ lại về lý tưởng...",
        "🤔 Quyết định này hơi 'cá nhân chủ nghĩa' đấy nhỉ?",
        "😬 Ôi không, chỉ số cách mạng đang giảm!",
        "💸 Tiền bạc quan trọng, nhưng lý tưởng cũng quan trọng không kém!",
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    } else {
      const messages = [
        "⚖️ Quyết định cân bằng, không tệ!",
        "🎯 Bạn đang đi đúng hướng... có lẽ?",
        "📊 Chỉ số dao động, cần quyết định rõ ràng hơn!",
        "🤷 Có vẻ bạn đang 'trung dung' quá mức!",
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }
  };

  return (
    <div className="decision-feedback">
      <div className="feedback-content">
        <div className="feedback-icon">✨</div>
        <h3>Quyết định đã được ghi nhận!</h3>
        <p className="humorous-message">{getHumorousMessage()}</p>
        <div className="effects-display">
          {Object.entries(effects).map(([key, value]) => {
            const icons = {
              classConsciousness: "🧠",
              solidarity: "🤝",
              economicStatus: "💰",
              familyWelfare: "👨‍👩‍👧‍👦",
            };
            const labels = {
              classConsciousness: "Ý thức giai cấp",
              solidarity: "Đoàn kết",
              economicStatus: "Kinh tế",
              familyWelfare: "Gia đình",
            };
            return (
              <div
                key={key}
                className={`effect-item ${value > 0 ? "positive" : "negative"}`}
              >
                <span className="effect-icon">{icons[key]}</span>
                <span className="effect-label">{labels[key]}</span>
                <span className="effect-value">
                  {value > 0 ? "+" : ""}
                  {value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DecisionFeedback;
