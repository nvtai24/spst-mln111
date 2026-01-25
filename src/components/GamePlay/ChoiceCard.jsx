import PropTypes from 'prop-types';

function ChoiceCard({ choice, onClick, statConfig }) {
  return (
    <button
      className="choice-card"
      onClick={onClick}
    >
      <div className="choice-text">{choice.text}</div>
      <div className="choice-effects">
        {Object.entries(choice.effects).map(([key, value]) => (
          <span 
            key={key} 
            className={`effect-tag ${value > 0 ? "effect-pos" : "effect-neg"}`}
          >
            {statConfig[key].icon} {value > 0 ? "+" : ""}{value}
          </span>
        ))}
      </div>
    </button>
  );
}

ChoiceCard.propTypes = {
  choice: PropTypes.shape({
    text: PropTypes.string.isRequired,
    effects: PropTypes.object.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  statConfig: PropTypes.object.isRequired,
};

export default ChoiceCard;
