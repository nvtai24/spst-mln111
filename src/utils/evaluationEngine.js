/**
 * Enhanced Evaluation Engine
 * Phân tích đa chiều để đánh giá kết quả game
 */

// Phân tích pattern quyết định
export function analyzeDecisions(choices) {
  const revolutionary = choices.filter(c => c.tags.includes("revolutionary")).length;
  const moderate = choices.filter(c => c.tags.includes("moderate")).length;
  const passive = choices.filter(c => c.tags.includes("passive")).length;
  const total = choices.length;

  // Xác định xu hướng chủ đạo
  let dominantTendency = "moderate";
  const max = Math.max(revolutionary, moderate, passive);
  if (revolutionary === max) dominantTendency = "revolutionary";
  else if (passive === max) dominantTendency = "passive";

  // Tính độ nhất quán (0-100)
  const consistency = Math.round((max / total) * 100);

  return {
    revolutionary,
    moderate,
    passive,
    total,
    dominantTendency,
    consistency,
    percentages: {
      revolutionary: Math.round((revolutionary / total) * 100),
      moderate: Math.round((moderate / total) * 100),
      passive: Math.round((passive / total) * 100),
    }
  };
}

// Phân tích stats
export function analyzeStats(stats) {
  const values = Object.values(stats);
  const sum = values.reduce((a, b) => a + b, 0);
  const average = Math.round(sum / values.length);

  // Tìm stat cao nhất và thấp nhất
  const entries = Object.entries(stats);
  const highest = entries.reduce((max, curr) => curr[1] > max[1] ? curr : max);
  const lowest = entries.reduce((min, curr) => curr[1] < min[1] ? curr : min);

  // Tính độ cân bằng (0-100)
  // Độ lệch chuẩn càng thấp = càng cân bằng
  const variance = values.reduce((sum, val) => sum + Math.pow(val - average, 2), 0) / values.length;
  const stdDev = Math.sqrt(variance);
  const balance = Math.max(0, Math.round(100 - stdDev));

  return {
    ...stats,
    average,
    highest: { stat: highest[0], value: highest[1] },
    lowest: { stat: lowest[0], value: lowest[1] },
    balance,
    variance: Math.round(variance),
  };
}

// Tính điểm theo nhân vật
export function getCharacterSpecificScore(characterId, decisions, statsAnalysis) {
  const { revolutionary, moderate, passive, consistency } = decisions;
  const { average, balance, classConsciousness, solidarity, economicStatus, familyWelfare } = statsAnalysis;

  let score = 0;
  let bonuses = [];
  let penalties = [];

  // Base score từ average stats
  score += average * 0.4;

  // Character-specific scoring
  switch (characterId) {
    case "worker":
      // Công nhân: Ưu tiên solidarity + classConsciousness
      score += (solidarity + classConsciousness) * 0.15;
      if (revolutionary >= 5) {
        score += 10;
        bonuses.push("Tinh thần đấu tranh giai cấp cao");
      }
      if (solidarity > 70) bonuses.push("Đoàn kết vững chắc");
      if (economicStatus < 30) penalties.push("Kinh tế quá khó khăn");
      break;

    case "farmer":
      // Nông dân: Cân bằng solidarity + economicStatus
      score += (solidarity + economicStatus) * 0.15;
      if (balance > 70) {
        score += 10;
        bonuses.push("Cân bằng tốt giữa các mặt");
      }
      if (moderate >= 5) bonuses.push("Thực tế và vững vàng");
      if (classConsciousness < 40) penalties.push("Ý thức giai cấp còn thấp");
      break;

    case "intellectual":
      // Trí thức: Ưu tiên classConsciousness
      score += classConsciousness * 0.3;
      if (classConsciousness > 80) {
        score += 15;
        bonuses.push("Lý luận vững vàng");
      }
      if (revolutionary >= 4) bonuses.push("Cam kết với cách mạng");
      if (passive >= 4) penalties.push("Còn nhiều dao động");
      break;

    case "party_member":
      // Đảng viên: Cân bằng tất cả + revolutionary
      score += balance * 0.2;
      score += revolutionary * 3;
      if (revolutionary >= 7 && balance > 60) {
        score += 15;
        bonuses.push("Đảng viên mẫu mực");
      }
      if (consistency > 80) bonuses.push("Lập trường kiên định");
      if (passive >= 3) penalties.push("Có biểu hiện cơ hội chủ nghĩa");
      break;

    case "student":
      // Sinh viên: Revolutionary + classConsciousness
      score += (revolutionary * 2.5) + (classConsciousness * 0.2);
      if (revolutionary >= 6) {
        score += 12;
        bonuses.push("Thanh niên tiên phong");
      }
      if (classConsciousness > 75) bonuses.push("Giác ngộ sớm");
      if (passive >= 5) penalties.push("Chưa thoát khỏi tư tưởng tiểu tư sản");
      break;

    case "capitalist":
      // Tư sản: Đánh giá đặc biệt - có chuyển hóa không?
      const transformation = revolutionary >= 4;
      if (transformation) {
        score += revolutionary * 5;
        score += (classConsciousness + solidarity) * 0.2;
        bonuses.push("Chuyển hóa thành công");
        if (revolutionary >= 7) bonuses.push("Tư sản dân tộc tiến bộ");
      } else {
        score += moderate * 2;
        if (passive >= 6) {
          penalties.push("Vẫn giữ bản chất bóc lột");
          score -= 20;
        }
      }
      break;
  }

  // Bonus cho consistency cao
  if (consistency > 80) {
    score += 5;
    bonuses.push("Nhất quán trong hành động");
  }

  // Penalty cho stats quá thấp
  if (statsAnalysis.lowest.value < 20) {
    score -= 10;
    penalties.push(`${getStatLabel(statsAnalysis.lowest.stat)} quá thấp`);
  }

  return {
    score: Math.max(0, Math.min(100, Math.round(score))),
    bonuses,
    penalties,
  };
}

// Xác định rank dựa trên score
export function getRankFromScore(score) {
  if (score >= 95) return { rank: "S+", tier: "Huyền thoại" };
  if (score >= 85) return { rank: "S", tier: "Xuất sắc" };
  if (score >= 70) return { rank: "A", tier: "Tốt" };
  if (score >= 50) return { rank: "B", tier: "Trung bình" };
  if (score >= 30) return { rank: "C", tier: "Yếu" };
  return { rank: "D", tier: "Rất yếu" };
}

// Generate detailed feedback
export function generateDetailedFeedback(characterId, score, decisions, statsAnalysis, bonuses, penalties) {
  const { rank, tier } = getRankFromScore(score);
  const { revolutionary, moderate, passive, dominantTendency } = decisions;
  
  // Title dựa trên rank và tendency
  let title = "";
  if (rank === "S+" || rank === "S") {
    title = dominantTendency === "revolutionary" 
      ? "Chiến sĩ Cách mạng Kiên định"
      : "Người Đồng chí Tích cực";
  } else if (rank === "A") {
    title = "Người Tiến bộ";
  } else if (rank === "B") {
    title = dominantTendency === "moderate" 
      ? "Người Dao động"
      : "Người Thực dụng";
  } else if (rank === "C") {
    title = "Người Bàng quan";
  } else {
    title = "Người Lạc lối";
  }

  // Message chính
  let message = "";
  if (score >= 85) {
    message = "Tuyệt vời! Bạn là niềm tự hào của giai cấp vô sản!";
  } else if (score >= 70) {
    message = "Rất tốt! Bạn đã thể hiện lập trường tư tưởng vững vàng.";
  } else if (score >= 50) {
    message = "Khá ổn, nhưng vẫn cần rèn luyện thêm.";
  } else if (score >= 30) {
    message = "Bạn cần nâng cao nhận thức giai cấp ngay lập tức.";
  } else {
    message = "Bạn đã đi sai hướng. Cần học tập lại từ đầu!";
  }

  // Analysis chi tiết
  const analysis = `Với ${revolutionary} quyết định cách mạng, ${moderate} quyết định ôn hòa, và ${passive} quyết định thụ động, ` +
    `bạn thể hiện xu hướng ${getTendencyLabel(dominantTendency)}. ` +
    `Các chỉ số trung bình đạt ${statsAnalysis.average}/100, độ cân bằng ${statsAnalysis.balance}/100.`;

  // Character-specific analysis
  const characterAnalysis = getCharacterAnalysis(characterId, score, decisions, statsAnalysis);

  // Suggestions
  const suggestions = generateSuggestions(score, decisions, statsAnalysis, penalties);

  return {
    title,
    rank,
    tier,
    score,
    message,
    analysis,
    characterAnalysis,
    strengths: bonuses,
    weaknesses: penalties,
    suggestions,
  };
}

// Helper functions
function getStatLabel(statKey) {
  const labels = {
    classConsciousness: "Ý thức giai cấp",
    solidarity: "Tinh thần đoàn kết",
    economicStatus: "Tình trạng kinh tế",
    familyWelfare: "Phúc lợi gia đình",
  };
  return labels[statKey] || statKey;
}

function getTendencyLabel(tendency) {
  const labels = {
    revolutionary: "cách mạng kiên định",
    moderate: "ôn hòa thực tế",
    passive: "thụ động bảo thủ",
  };
  return labels[tendency];
}

function getCharacterAnalysis(characterId, score, decisions, statsAnalysis) {
  const analyses = {
    worker: score >= 70 
      ? "Với tư cách công nhân, bạn đã thể hiện tinh thần đấu tranh giai cấp tốt và ý thức đoàn kết cao."
      : "Với tư cách công nhân, bạn cần nâng cao ý thức giai cấp và tinh thần đoàn kết hơn nữa.",
    
    farmer: score >= 70
      ? "Với tư cách nông dân, bạn đã cân bằng tốt giữa sản xuất và cách mạng."
      : "Với tư cách nông dân, bạn cần chú ý cân bằng giữa lợi ích cá nhân và tập thể.",
    
    intellectual: score >= 70
      ? "Với tư cách trí thức, bạn đã vận dụng lý luận vào thực tiễn một cách xuất sắc."
      : "Với tư cách trí thức, bạn cần gắn bó chặt chẽ hơn với quần chúng và thực tiễn.",
    
    party_member: score >= 70
      ? "Với tư cách đảng viên, bạn đã thực hiện tốt vai trò tiên phong gương mẫu."
      : "Với tư cách đảng viên, bạn cần rèn luyện thêm để xứng đáng với niềm tin của Đảng và nhân dân.",
    
    student: score >= 70
      ? "Với tư cách sinh viên, bạn đã thể hiện tinh thần tiên phong của thanh niên."
      : "Với tư cách sinh viên, bạn cần thoát khỏi tư tưởng tiểu tư sản và hướng đến cách mạng.",
    
    capitalist: decisions.revolutionary >= 4
      ? "Với tư cách tư sản, bạn đã chuyển hóa thành công, đứng về phía nhân dân."
      : "Với tư cách tư sản, bạn vẫn chưa thoát khỏi bản chất bóc lột và vụ lợi.",
  };
  
  return analyses[characterId] || "";
}

function generateSuggestions(score, decisions, statsAnalysis, penalties) {
  const suggestions = [];
  
  if (score < 70) {
    if (decisions.passive > decisions.revolutionary) {
      suggestions.push("Hãy dũng cảm hơn trong việc đấu tranh cho lợi ích tập thể");
    }
    
    if (statsAnalysis.classConsciousness < 50) {
      suggestions.push("Cần học tập thêm lý luận Mác-Lênin để nâng cao ý thức");
    }
    
    if (statsAnalysis.balance < 50) {
      suggestions.push("Cần cân bằng hơn giữa các mặt của cuộc sống");
    }
  }
  
  if (penalties.length > 2) {
    suggestions.push("Hãy suy ngẫm lại về những quyết định đã đưa ra");
  }
  
  if (suggestions.length === 0 && score >= 70) {
    suggestions.push("Tiếp tục phát huy và lan tỏa tinh thần cách mạng!");
  }
  
  return suggestions;
}

// Main evaluation function
export function evaluateGame(characterId, choices, stats) {
  const decisionsAnalysis = analyzeDecisions(choices);
  const statsAnalysis = analyzeStats(stats);
  const { score, bonuses, penalties } = getCharacterSpecificScore(characterId, decisionsAnalysis, statsAnalysis);
  
  return generateDetailedFeedback(characterId, score, decisionsAnalysis, statsAnalysis, bonuses, penalties);
}
