import PropTypes from 'prop-types';
import HistoryList from './HistoryList';

function EndingScreen({ character, evaluation, choices, onRestart }) {
  return (
    <div className="app">
      <div className="ending-screen">
        <div className="character-icon" style={{ fontSize: "5rem" }}>
          {character.icon}
        </div>
        <h1>Tổng kết Hành trình</h1>
        <h3 style={{ color: "var(--accent-gold)" }}>
          {character.name} - {character.role}
        </h3>

        <div className="rank-display">
          <div className="rank-badge">{evaluation.rank}</div>
          <div className="rank-title">{evaluation.title}</div>
        </div>

        <div className="final-analysis">
          <p className="ending-message" style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "1rem" }}>
            {evaluation.message}
          </p>
          <p>{evaluation.analysis}</p>
        </div>

        <HistoryList choices={choices} />

        <button className="restart-btn" onClick={onRestart}>
          Khởi đầu mới
        </button>
      </div>
    </div>
  );
}

EndingScreen.propTypes = {
  character: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  evaluation: PropTypes.shape({
    rank: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    analysis: PropTypes.string.isRequired,
  }).isRequired,
  choices: PropTypes.array.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default EndingScreen;
