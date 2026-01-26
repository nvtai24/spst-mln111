import PropTypes from 'prop-types';
import './EndingScreen.css';
import HistoryList from './HistoryList';

function EndingScreen({ character, evaluation, choices, onRestart }) {
  return (
    <div className="app">
      <div className="ending-screen">
        <div className="character-icon ending-icon">
          <img src={character.icon} alt={character.name} />
        </div>

        <h1>Tổng kết Hành trình</h1>
        <h3 style={{ color: "var(--text-primary)" }}>
          {character.name} - {character.role}
        </h3>

        <div className="rank-display">
          <div className="rank-badge">{evaluation.rank}</div>
          <div className="rank-title">{evaluation.title}</div>
          {evaluation.score !== undefined && (
            <div className="rank-score">Điểm: {evaluation.score}/100</div>
          )}
          {evaluation.tier && (
            <div className="rank-tier">{evaluation.tier}</div>
          )}
        </div>

        <div className="final-analysis">
          <p className="ending-message" style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "1rem" }}>
            {evaluation.message}
          </p>
          <p>{evaluation.analysis}</p>

          {evaluation.characterAnalysis && (
            <p style={{ marginTop: "1rem", fontStyle: "italic", color: "var(--text-secondary)" }}>
              {evaluation.characterAnalysis}
            </p>
          )}
        </div>

        {evaluation.strengths && evaluation.strengths.length > 0 && (
          <div className="evaluation-section strengths">
            <h4>✨ Điểm mạnh</h4>
            <ul>
              {evaluation.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>
        )}

        {evaluation.weaknesses && evaluation.weaknesses.length > 0 && (
          <div className="evaluation-section weaknesses">
            <h4>⚠️ Điểm yếu</h4>
            <ul>
              {evaluation.weaknesses.map((weakness, index) => (
                <li key={index}>{weakness}</li>
              ))}
            </ul>
          </div>
        )}

        {evaluation.suggestions && evaluation.suggestions.length > 0 && (
          <div className="evaluation-section suggestions">
            <h4>💡 Gợi ý</h4>
            <ul>
              {evaluation.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}

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
