import PropTypes from 'prop-types';

function HistoryList({ choices }) {
  return (
    <div className="history-list">
      <h3>Lịch sử lựa chọn</h3>
      {choices.map((choice, index) => (
        <div key={index} className="history-item">
          <div className="history-turn">{index + 1}</div>
          <div className="history-content">
            <h4>{choice.scenario}</h4>
            <span className="history-choice">{choice.choice}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

HistoryList.propTypes = {
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      scenario: PropTypes.string.isRequired,
      choice: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HistoryList;
