import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import ScenarioView from './ScenarioView';

function GameLayout({
  selectedCharacter,
  gameState,
  currentScenario,
  onMakeDecision,
  statConfig
}) {
  return (
    <div className="app">
      <div className="game-layout">
        <Sidebar
          character={selectedCharacter}
          stats={gameState.stats}
          turn={gameState.turn}
          totalScenarios={gameState.activeScenarios.length}
          statConfig={statConfig}
        />

        <div className="game-main">
          <ScenarioView
            scenario={currentScenario}
            onChoiceSelect={onMakeDecision}
            statConfig={statConfig}
          />
        </div>
      </div>
    </div>
  );
}

GameLayout.propTypes = {
  selectedCharacter: PropTypes.object.isRequired,
  gameState: PropTypes.shape({
    stats: PropTypes.object.isRequired,
    turn: PropTypes.number.isRequired,
    activeScenarios: PropTypes.array.isRequired,
  }).isRequired,
  currentScenario: PropTypes.object.isRequired,
  onMakeDecision: PropTypes.func.isRequired,
  statConfig: PropTypes.object.isRequired,
};

export default GameLayout;
