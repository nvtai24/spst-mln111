import PropTypes from 'prop-types';
import ChoiceCard from './ChoiceCard';

function ScenarioView({ scenario, onChoiceSelect, statConfig }) {
  return (
    <div className="scenario-container">
      <div className="scenario-header">
        <h2 className="scenario-title">{scenario.title}</h2>
        <p className="scenario-desc">{scenario.description}</p>
        {scenario.theory && (
          <div className="theory-pill">
            <span>📚</span> {scenario.theory}
          </div>
        )}
      </div>

      <div className="choices-grid">
        {scenario.choices.map((choice, index) => (
          <ChoiceCard
            key={index}
            choice={choice}
            onClick={() => onChoiceSelect(choice)}
            statConfig={statConfig}
          />
        ))}
      </div>
    </div>
  );
}

ScenarioView.propTypes = {
  scenario: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    theory: PropTypes.string,
    choices: PropTypes.array.isRequired,
  }).isRequired,
  onChoiceSelect: PropTypes.func.isRequired,
  statConfig: PropTypes.object.isRequired,
};

export default ScenarioView;
