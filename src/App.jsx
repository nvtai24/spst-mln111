import { useState } from "react";
import "./App.css";
import { characters } from "./data/characters";
import { roleScenarios } from "./data/roleScenarios";
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
    const revolutionaryCount = gameState.choices.filter((c) =>
      c.tags.includes("revolutionary"),
    ).length;
    const passiveCount = gameState.choices.filter((c) =>
      c.tags.includes("passive"),
    ).length;

    let evaluation = {
      title: "",
      rank: "",
      message: "",
      analysis: "",
    };

    if (revolutionaryCount >= 3) {
      evaluation.title = "Chiến sĩ Cách mạng Kiên định";
      evaluation.rank = "S+";
      evaluation.message = "Tuyệt vời! Bạn là niềm tự hào của giai cấp vô sản!";
      evaluation.analysis = `Với ${revolutionaryCount}/${gameState.choices.length} quyết định mang tính cách mạng, bạn đã thể hiện lập trường tư tưởng vững vàng.`;
    } else if (revolutionaryCount >= 2) {
      evaluation.title = "Người Đồng chí Tích cực";
      evaluation.rank = "A";
      evaluation.message = "Rất tốt! Bạn luôn đặt lợi ích tập thể lên trên.";
      evaluation.analysis = `Bạn đã có ${revolutionaryCount} quyết định đúng đắn, góp phần vào thắng lợi chung.`;
    } else if (passiveCount >= 3) {
      evaluation.title = "Người Bàng quan";
      evaluation.rank = "C";
      evaluation.message = "Bạn cần nâng cao nhận thức giai cấp ngay lập tức.";
      evaluation.analysis = `Sự thụ động (${passiveCount} lần) sẽ khiến bạn bị bỏ lại phía sau bánh xe lịch sử.`;
    } else {
      evaluation.title = "Người Dao động";
      evaluation.rank = "B";
      evaluation.message = "Lập trường chưa vững vàng, dễ bị lôi kéo.";
      evaluation.analysis = `Cần học tập thêm lý luận để không bị dao động giữa các dòng chảy thời cuộc.`;
    }

    return evaluation;
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
