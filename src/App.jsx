import { useState } from "react";
import "./App.css";
import { characters } from "./data/characters";
import { roleScenarios } from "./data/roleScenarios";
import ProgressTracker from "./components/ProgressTracker";

function App() {
  const [gamePhase, setGamePhase] = useState("character-selection"); // character-selection, playing, ending
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [gameState, setGameState] = useState({
    turn: 1,
    scenarioIndex: 0,
    stats: null,
    choices: [],
    gameOver: false,
  });

  const selectCharacter = (character) => {
    setSelectedCharacter(character);
    setGameState({
      turn: 1,
      scenarioIndex: 0,
       stats: { ...character.stats },
      choices: [],
      gameOver: false,
    });
    setGamePhase("playing");
  };

  const makeDecision = (choice) => {
    const newStats = { ...gameState.stats };

    // Apply effects
    Object.keys(choice.effects).forEach((key) => {
      newStats[key] = Math.max(
        0,
        Math.min(100, newStats[key] + choice.effects[key]),
      );
    });

    const scenarios = roleScenarios[selectedCharacter.id];
    // Check if there are more scenarios
    const nextTurn = gameState.turn + 1;
    const isGameOver = nextTurn > scenarios.length;

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
          scenario: scenarios[gameState.scenarioIndex].title,
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
    });
  };

  const getStatClass = (value) => {
    if (value >= 70) return "stat-high";
    if (value >= 40) return "stat-medium";
    return "stat-low";
  };

  // Playing Phase Data
  const scenarios = selectedCharacter
    ? roleScenarios[selectedCharacter.id]
    : [];
  const currentScenario = scenarios[gameState.scenarioIndex];

  // Logic for Evaluation
  const getEvaluation = () => {
    const revolutionaryCount = gameState.choices.filter((c) =>
      c.tags.includes("revolutionary"),
    ).length;
    const passiveCount = gameState.choices.filter((c) =>
      c.tags.includes("passive"),
    ).length;
    const moderateCount = gameState.choices.filter((c) =>
      c.tags.includes("moderate"),
    ).length;

    let evaluation = {
      title: "",
      rank: "",
      message: "",
      analysis: "",
    };

    if (revolutionaryCount >= 6) {
      evaluation.title = "Chiến sĩ Cách mạng Kiên định";
      evaluation.rank = "S+";
      evaluation.message = "Tuyệt vời! Bạn là niềm tự hào của giai cấp vô sản!";
      evaluation.analysis = `Với ${revolutionaryCount}/${gameState.choices.length} quyết định mang tính cách mạng, bạn đã thể hiện lập trường tư tưởng vững vàng.`;
    } else if (revolutionaryCount >= 4) {
      evaluation.title = "Người Đồng chí Tích cực";
      evaluation.rank = "S";
      evaluation.message = "Rất tốt! Bạn luôn đặt lợi ích tập thể lên trên.";
      evaluation.analysis = `Bạn đã có ${revolutionaryCount} quyết định đúng đắn, góp phần vào thắng lợi chung.`;
    } else if (revolutionaryCount >= 2 && passiveCount <= 2) {
      evaluation.title = "Quần chúng Cảm tình";
      evaluation.rank = "A";
      evaluation.message = "Khá tốt, nhưng cần quyết đoán hơn nữa.";
      evaluation.analysis = `Sự cân bằng là tốt, nhưng cách mạng cần những ngọn lửa bùng cháy hơn.`;
    } else if (passiveCount >= 5) {
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

  // --------------------------------------------------------------------------
  // RENDER: CHARACTER SELECTION
  // --------------------------------------------------------------------------
  if (gamePhase === "character-selection") {
    return (
      <div className="app">
        <div className="character-selection">
          <h1>ĐẤU TRANH GIAI CẤP</h1>
          <p className="subtitle">Lựa chọn nhân vật để bắt đầu hành trình giác ngộ</p>

          <div className="characters-grid">
            {characters.map((character) => (
              <div
                key={character.id}
                className="character-card"
                onClick={() => selectCharacter(character)}
              >
                <div className="character-icon">{character.icon}</div>
                <h3>{character.name}</h3>
                <div className="character-role">{character.role}</div>
                <p className="character-description">{character.description}</p>
                <div className="character-background">
                  <strong>Bối cảnh:</strong> {character.background}
                </div>
                <button className="select-btn">Nhập vai</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // RENDER: ENDING
  // --------------------------------------------------------------------------
  if (gamePhase === "ending") {
    const evaluation = getEvaluation();
    return (
      <div className="app">
        <div className="ending-screen">
          <div className="character-icon" style={{ fontSize: "5rem" }}>
            {selectedCharacter.icon}
          </div>
          <h1>Tổng kết Hành trình</h1>
          <h3 style={{ color: "var(--accent-gold)" }}>{selectedCharacter.name} - {selectedCharacter.role}</h3>

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

          <div className="history-list">
            <h3>Lịch sử lựa chọn</h3>
            {gameState.choices.map((choice, index) => (
              <div key={index} className="history-item">
                <div className="history-turn">{index + 1}</div>
                <div className="history-content">
                  <h4>{choice.scenario}</h4>
                  <span className="history-choice">{choice.choice}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="restart-btn" onClick={resetGame}>
            Khởi đầu mới
          </button>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // RENDER: PLAYING
  // --------------------------------------------------------------------------
  const statLabels = {
    classConsciousness: "Ý thức giai cấp",
    solidarity: "Đoàn kết",
    economicStatus: "Kinh tế",
    familyWelfare: "Gia đình",
  };

  return (
    <div className="app">
      <div className="game-layout">
        
        {/* SIDEBAR: STATS & INFO */}
        <div className="game-sidebar">
          <div className="sidebar-card mini-char-profile">
            <span className="mini-char-icon">{selectedCharacter.icon}</span>
            <div className="mini-char-name">{selectedCharacter.name}</div>
            <div className="turn-display">
              Tình huống: {gameState.turn} / {scenarios.length}
            </div>
          </div>

          <div className="sidebar-card">
            <div className="stats-list">
              {Object.entries(gameState.stats).map(([key, value]) => (
                <div key={key} className="stat-item">
                  <div className="stat-header">
                    <span>{statLabels[key]}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="stat-bar-bg">
                    <div 
                      className="stat-bar-fill"
                      style={{ 
                        width: `${value}%`,
                        backgroundColor: value < 30 ? "var(--danger)" : value > 70 ? "var(--success)" : "var(--accent-gold)" 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
           {/* Reuse ProgressTracker if needed, or remove if styling is redundant. 
               Let's keep it simple for now and rely on our new UI. 
               If ProgressTracker is vital, we can add it back. 
               For now, the sticky HUD is cleaner. */}
        </div>

        {/* MAIN: SCENARIO & CHOICES */}
        <div className="game-main">
          <div className="scenario-container">
            <div className="scenario-header">
              <h2 className="scenario-title">{currentScenario.title}</h2>
              <p className="scenario-desc">{currentScenario.description}</p>
              {currentScenario.theory && (
                <div className="theory-pill">
                  <span>📚</span> {currentScenario.theory}
                </div>
              )}
            </div>

            <div className="choices-grid">
              {currentScenario.choices.map((choice, index) => (
                <button
                  key={index}
                  className="choice-card"
                  onClick={() => makeDecision(choice)}
                >
                  <div className="choice-text">{choice.text}</div>
                  <div className="choice-effects">
                    {Object.entries(choice.effects).map(([key, value]) => (
                      <span key={key} className={`effect-tag ${value > 0 ? "effect-pos" : "effect-neg"}`}>
                        {value > 0 ? "+" : ""}{value} {statLabels[key] || key}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
