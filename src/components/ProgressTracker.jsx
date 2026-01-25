import "./ProgressTracker.css";

function ProgressTracker({ turn, totalTurns, choices }) {
  const revolutionaryCount = choices.filter((c) =>
    c.tags?.includes("revolutionary"),
  ).length;
  const moderateCount = choices.filter((c) =>
    c.tags?.includes("moderate"),
  ).length;
  const passiveCount = choices.filter((c) =>
    c.tags?.includes("passive"),
  ).length;

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <h3>🎯 Tiến trình hành trình</h3>
      </div>

      <div className="progress-stats">
        <div className="stat-item revolutionary">
          <div className="stat-icon">🚩</div>
          <div className="stat-info">
            <div className="stat-label">Cách mạng</div>
            <div className="stat-value">{revolutionaryCount}</div>
          </div>
        </div>

        <div className="stat-item moderate">
          <div className="stat-icon">⚖️</div>
          <div className="stat-info">
            <div className="stat-label">Trung dung</div>
            <div className="stat-value">{moderateCount}</div>
          </div>
        </div>

        <div className="stat-item passive">
          <div className="stat-icon">😐</div>
          <div className="stat-info">
            <div className="stat-label">Thụ động</div>
            <div className="stat-value">{passiveCount}</div>
          </div>
        </div>
      </div>

      <div className="timeline">
        <div
          className="timeline-progress"
          style={{ width: `${(turn / totalTurns) * 100}%` }}
        ></div>
        <div
          className="timeline-marker"
          style={{ left: `${(turn / totalTurns) * 100}%` }}
        >
          {turn}/{totalTurns}
        </div>
      </div>
    </div>
  );
}

export default ProgressTracker;
