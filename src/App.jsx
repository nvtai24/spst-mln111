import { useState } from "react";
import "./App.css";
import { characters } from "./data/characters";
import { roleScenarios } from "./data/roleScenarios";
import { evaluateGame } from "./utils/evaluationEngine";
import CharacterSelection from "./components/CharacterSelection/CharacterSelection";
import GameLayout from "./components/GamePlay/GameLayout";
import EndingScreen from "./components/Ending/EndingScreen";

function App() {
  const [gamePhase, setGamePhase] = useState("character-selection");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [gameState, setGameState] = useState({
    turn: 1,
    scenarioIndex: 0,
    stats: null,
    choices: [],
    gameOver: false,
    activeScenarios: [],
  });

  // Stat configuration
  const statConfig = {
    classConsciousness: { label: "Ý thức", icon: "🧠" },
    solidarity: { label: "Đoàn kết", icon: "🤝" },
    economicStatus: { label: "Kinh tế", icon: "💰" },
    familyWelfare: { label: "Gia đình", icon: "👨‍👩‍👧‍👦" },
  };

  const selectCharacter = (character) => {
    const selectedScenarios = [...roleScenarios[character.id]];

    setSelectedCharacter(character);
    setGameState({
      turn: 1,
      scenarioIndex: 0,
      stats: { ...character.stats },
      choices: [],
      gameOver: false,
      activeScenarios: selectedScenarios,
    });
    setGamePhase("playing");
  };

  const makeDecision = (choice) => {
    const newStats = { ...gameState.stats };

    Object.keys(choice.effects).forEach((key) => {
      newStats[key] = Math.max(
        0,
        Math.min(100, newStats[key] + choice.effects[key]),
      );
    });

    const nextTurn = gameState.turn + 1;
    const isGameOver = nextTurn > gameState.activeScenarios.length;

    if (isGameOver) {
      setGamePhase("ending");
    }

    setGameState({
      ...gameState,
      turn: nextTurn,
      scenarioIndex: gameState.scenarioIndex + 1,
      stats: newStats,
      choices: [
        ...gameState.choices,
        {
          scenario: gameState.activeScenarios[gameState.scenarioIndex].title,
          choice: choice.text,
          tags: choice.tags,
        },
      ],
      gameOver: isGameOver,
    });
  };

  const resetGame = () => {
    setGamePhase("character-selection");
    setSelectedCharacter(null);
    setGameState({
      turn: 1,
      scenarioIndex: 0,
      stats: null,
      choices: [],
      gameOver: false,
      activeScenarios: [],
    });
  };

  const getEvaluation = () => {
    return evaluateGame(selectedCharacter.id, gameState.choices, gameState.stats);
  };

  // Render based on game phase
  if (gamePhase === "character-selection") {
    return (
      <CharacterSelection
        characters={characters}
        onSelectCharacter={selectCharacter}
      />
    );
  }

  if (gamePhase === "ending") {
    const evaluation = getEvaluation();
    return (
      <EndingScreen
        character={selectedCharacter}
        evaluation={evaluation}
        choices={gameState.choices}
        onRestart={resetGame}
      />
    );
  }

  // Playing phase
  const currentScenario = gameState.activeScenarios[gameState.scenarioIndex];

  return (
    <GameLayout
      selectedCharacter={selectedCharacter}
      gameState={gameState}
      currentScenario={currentScenario}
      onMakeDecision={makeDecision}
      statConfig={statConfig}
    />
  );
}

export default App;
