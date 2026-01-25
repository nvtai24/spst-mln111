import PropTypes from 'prop-types';

function Sidebar({ character, stats, turn, totalScenarios, statConfig }) {
  return (
    <div className="game-sidebar">
      <div className="sidebar-card mini-char-profile">
        <span className="mini-char-icon">{character.icon}</span>
        <div className="mini-char-name">{character.name}</div>
        <div className="turn-display">
          Tình huống: {turn} / {totalScenarios}
        </div>
      </div>

      <div className="sidebar-card">
        <div className="stats-list">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="stat-item">
              <div className="stat-header">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {statConfig[key].icon} {statConfig[key].label}
                </span>
                <span style={{ fontWeight: 800, color: 'var(--accent-gold)' }}>{value}</span>
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
    </div>
  );
}

Sidebar.propTypes = {
  character: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  stats: PropTypes.object.isRequired,
  turn: PropTypes.number.isRequired,
  totalScenarios: PropTypes.number.isRequired,
  statConfig: PropTypes.object.isRequired,
};

export default Sidebar;
