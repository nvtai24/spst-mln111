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
    const isGameOver = gameState.turn >= scenarios.length;

    if (isGameOver) {
      setGamePhase("ending");
    }

    setGameState({
      ...gameState,
      turn: gameState.turn + 1,
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

  const getResourceColor = (value) => {
    if (value >= 70) return "#4ade80";
    if (value >= 40) return "#fbbf24";
    return "#ef4444";
  };

  const getStatClass = (value) => {
    if (value >= 70) return "stat-high";
    if (value >= 40) return "stat-medium";
    return "stat-low";
  };

  // Playing Phase
  const scenarios = selectedCharacter
    ? roleScenarios[selectedCharacter.id]
    : [];
  const currentScenario = scenarios[gameState.scenarioIndex];

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

    const avgStats = {
      classConsciousness: gameState.stats.classConsciousness,
      solidarity: gameState.stats.solidarity,
      economicStatus: gameState.stats.economicStatus,
      familyWelfare: gameState.stats.familyWelfare,
    };

    let evaluation = {
      title: "",
      rank: "",
      message: "",
      analysis: "",
    };

    // Evaluate based on character and choices
    if (revolutionaryCount >= 6) {
      evaluation.title = "🚩 Chiến sĩ Cách mạng Kiên định - Hạng S+";
      evaluation.rank = "S";
      evaluation.message = `WOW! Bạn đã thể hiện tinh thần cách mạng cực kỳ cao! 🎉 Luôn đặt lợi ích tập thể lên trên, bạn thực sự là tấm gương sáng! Mác và Lênin sẽ tự hào về bạn! 😎`;
      evaluation.analysis = `Với ${revolutionaryCount}/${gameState.choices.length} quyết định cách mạng (${Math.round(revolutionaryCount/gameState.choices.length*100)}%!), bạn đã chứng minh được ý thức giai cấp siêu cao! ${selectedCharacter.name} xứng đáng được ghi vào sử sách! 📚✨`;
    } else if (revolutionaryCount >= 4) {
      evaluation.title = "🚩 Chiến sĩ Cách mạng Kiên định";
      evaluation.rank = "S";
      evaluation.message = `Tuyệt vời! Bạn đã thể hiện tinh thần cách mạng cao, luôn đặt lợi ích tập thể lên trên lợi ích cá nhân. Bạn thực sự hiểu và sống theo lý tưởng Mác-Lênin! 💪`;
      evaluation.analysis = `Với ${revolutionaryCount}/${gameState.choices.length} quyết định cách mạng, bạn đã chứng minh được ý thức giai cấp cao và sự hy sinh cao cả. ${selectedCharacter.name} là tấm gương sáng cho thế hệ sau! 🌟`;
    } else if (revolutionaryCount >= 2 && passiveCount <= 2) {
      evaluation.title = "⭐ Người Tiến bộ";
      evaluation.rank = "A";
      evaluation.message = `Không tệ! Bạn là người có tinh thần tiến bộ, biết cân bằng giữa lý tưởng và thực tế. Tuy chưa hoàn hảo nhưng đang trên con đường đúng đắn! 👍`;
      evaluation.analysis = `Với ${revolutionaryCount} quyết định cách mạng, ${moderateCount} quyết định trung dung, bạn đang dần nâng cao nhận thức. Cần tiếp tục rèn luyện để trở thành chiến sĩ cách mạng thực thụ! 💡`;
    } else if (passiveCount >= 6) {
      evaluation.title = "😔 Người Bảo thủ - Cần Cải tạo";
      evaluation.rank = "C";
      evaluation.message = `Ồ không... 😅 Bạn còn quá quan tâm đến lợi ích cá nhân, chưa thực sự hiểu được bản chất của đấu tranh giai cấp. Cần nâng cao ý thức gấp! 📖`;
      evaluation.analysis = `Với ${passiveCount}/${gameState.choices.length} quyết định thụ động (${Math.round(passiveCount/gameState.choices.length*100)}%!), bạn đã bỏ lỡ nhiều cơ hội đóng góp cho cách mạng. ${selectedCharacter.name} cần học tập và rèn luyện thêm nhiều! 🎓`;
    } else if (passiveCount >= 4) {
      evaluation.title = "😔 Người Bảo thủ";
      evaluation.rank = "C";
      evaluation.message = `Hmm... Bạn còn quá quan tâm đến lợi ích cá nhân, chưa thực sự hiểu được bản chất của đấu tranh giai cấp. Cần nâng cao ý thức! 🤔`;
      evaluation.analysis = `Với ${passiveCount}/${gameState.choices.length} quyết định thụ động, bạn đã bỏ lỡ cơ hội đóng góp cho cách mạng. ${selectedCharacter.name} cần học tập và rèn luyện thêm. 📚`;
    } else {
      evaluation.title = "🤔 Người Dao động";
      evaluation.rank = "B";
      evaluation.message = `Bạn còn đang dao động giữa lý tưởng và thực tế như con lắc đồng hồ! ⏰ Cần có lập trường tư tưởng vững vàng hơn!`;
      evaluation.analysis = `Lựa chọn của bạn thể hiện sự thiếu kiên định (${revolutionaryCount} cách mạng, ${moderateCount} trung dung, ${passiveCount} thụ động). Cần học tập lý luận Mác-Lênin sâu hơn để có được thế giới quan đúng đắn! 🎯`;
    }

    return evaluation;
  };

  // Character Selection Phase
  if (gamePhase === "character-selection") {
    return (
      <div className="app">
        <div className="character-selection">
          <h1>🚩 Triết học Mác-Lênin: Trò chơi Nhập vai</h1>
          <p className="subtitle">
            Chọn nhân vật để bắt đầu hành trình của bạn! <br />
            <span style={{ fontSize: "0.9em", opacity: 0.8 }}>
              ⚠️ Cảnh báo: Game này có thể khiến bạn suy nghĩ sâu về đấu tranh giai cấp! 😄
            </span>
          </p>

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
                  <strong>Bối cảnh:</strong>
                  <p>{character.background}</p>
                </div>
                <button className="select-btn">Chọn nhân vật này</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Ending Phase
  if (gamePhase === "ending") {
    const evaluation = getEvaluation();
    return (
      <div className="app">
        <div className="game-over">
          <div className="character-summary">
            <span className="character-icon-large">
              {selectedCharacter.icon}
            </span>
            <h2>{selectedCharacter.name}</h2>
            <p className="character-role">{selectedCharacter.role}</p>
          </div>

          <div className={`evaluation-rank rank-${evaluation.rank}`}>
            <div className="rank-badge">{evaluation.rank}</div>
            <h1>{evaluation.title}</h1>
          </div>

          <p className="ending-message">{evaluation.message}</p>
          <p className="evaluation-analysis">{evaluation.analysis}</p>

          <div className="final-stats">
            <h2>Chỉ số cuối cùng:</h2>
            <div className="resources-grid">
              <div className="resource-final">
                <span>🧠 Ý thức giai cấp:</span>
                <span
                  className={getStatClass(gameState.stats.classConsciousness)}
                >
                  {gameState.stats.classConsciousness}
                </span>
              </div>
              <div className="resource-final">
                <span>🤝 Đoàn kết:</span>
                <span className={getStatClass(gameState.stats.solidarity)}>
                  {gameState.stats.solidarity}
                </span>
              </div>
              <div className="resource-final">
                <span>💰 Kinh tế:</span>
                <span className={getStatClass(gameState.stats.economicStatus)}>
                  {gameState.stats.economicStatus}
                </span>
              </div>
              <div className="resource-final">
                <span>👨‍👩‍👧‍👦 Phúc lợi gia đình:</span>
                <span className={getStatClass(gameState.stats.familyWelfare)}>
                  {gameState.stats.familyWelfare}
                </span>
              </div>
            </div>
          </div>

          <div className="choices-summary">
            <h3>Hành trình của bạn:</h3>
            <div className="choices-list">
              {gameState.choices.map((choice, index) => (
                <div key={index} className="choice-item">
                  <div className="choice-number">{index + 1}</div>
                  <div className="choice-content">
                    <div className="choice-scenario">{choice.scenario}</div>
                    <div className="choice-decision">{choice.choice}</div>
                  </div>
                  <div className={`choice-tag tag-${choice.tags[0]}`}>
                    {choice.tags[0] === "revolutionary" && "🚩 Cách mạng"}
                    {choice.tags[0] === "moderate" && "⚖️ Trung dung"}
                    {choice.tags[0] === "passive" && "😐 Thụ động"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="restart-btn" onClick={resetGame}>
            Chơi lại với nhân vật khác
          </button>
        </div>
      </div>
    );
  }

  // Playing Phase
  return (
    <div className="app">
      <header className="game-header">
        <div className="character-info">
          <span className="character-icon">{selectedCharacter.icon}</span>
          <div>
            <div className="character-name">{selectedCharacter.name}</div>
            <div className="character-role-small">{selectedCharacter.role}</div>
          </div>
        </div>
        <h1>🚩 Hành trình Cách mạng - Đấu tranh Giai cấp Edition</h1>
        <div className="turn-counter">
          Tình huống: {gameState.turn}/{scenarios.length}
        </div>
      </header>

      <ProgressTracker
        turn={gameState.turn - 1}
        totalTurns={scenarios.length}
        choices={gameState.choices}
      />

      <div className="resources">
        <div className="resource-item">
          <div className="resource-label">🧠 Ý thức giai cấp</div>
          <div className="resource-bar">
            <div
              className="resource-fill"
              style={{
                width: `${gameState.stats.classConsciousness}%`,
                backgroundColor: getResourceColor(
                  gameState.stats.classConsciousness,
                ),
              }}
            />
          </div>
          <div className="resource-value">
            {gameState.stats.classConsciousness}
          </div>
        </div>

        <div className="resource-item">
          <div className="resource-label">🤝 Đoàn kết</div>
          <div className="resource-bar">
            <div
              className="resource-fill"
              style={{
                width: `${gameState.stats.solidarity}%`,
                backgroundColor: getResourceColor(gameState.stats.solidarity),
              }}
            />
          </div>
          <div className="resource-value">{gameState.stats.solidarity}</div>
        </div>

        <div className="resource-item">
          <div className="resource-label">💰 Tình trạng kinh tế</div>
          <div className="resource-bar">
            <div
              className="resource-fill"
              style={{
                width: `${gameState.stats.economicStatus}%`,
                backgroundColor: getResourceColor(
                  gameState.stats.economicStatus,
                ),
              }}
            />
          </div>
          <div className="resource-value">{gameState.stats.economicStatus}</div>
        </div>

        <div className="resource-item">
          <div className="resource-label">👨‍👩‍👧‍👦 Phúc lợi gia đình</div>
          <div className="resource-bar">
            <div
              className="resource-fill"
              style={{
                width: `${gameState.stats.familyWelfare}%`,
                backgroundColor: getResourceColor(
                  gameState.stats.familyWelfare,
                ),
              }}
            />
          </div>
          <div className="resource-value">{gameState.stats.familyWelfare}</div>
        </div>
      </div>

      <div className="scenario-card">
        <h2>{currentScenario.title}</h2>
        <p className="scenario-description">{currentScenario.description}</p>

        <div className="theory-box">
          <strong>📚 Lý thuyết liên quan:</strong> {currentScenario.theory}
        </div>

        <div className="choices">
          {currentScenario.choices.map((choice, index) => (
            <button
              key={index}
              className="choice-btn"
              onClick={() => makeDecision(choice)}
            >
              <div className="choice-text">{choice.text}</div>
              <div className="choice-effects">
                {Object.entries(choice.effects).map(([key, value]) => {
                  const icons = {
                    classConsciousness: "🧠",
                    solidarity: "🤝",
                    economicStatus: "💰",
                    familyWelfare: "👨‍👩‍👧‍👦",
                  };
                  const labels = {
                    classConsciousness: "Ý thức",
                    solidarity: "Đoàn kết",
                    economicStatus: "Kinh tế",
                    familyWelfare: "Gia đình",
                  };
                  return (
                    <span
                      key={key}
                      className={
                        value > 0 ? "effect-positive" : "effect-negative"
                      }
                      title={labels[key]}
                    >
                      {icons[key]} {value > 0 ? "+" : ""}
                      {value}
                    </span>
                  );
                })}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
