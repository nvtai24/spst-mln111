import PropTypes from 'prop-types';

function Sidebar({ character, stats, turn, totalScenarios, statConfig }) {
  return (
    <div className="game-sidebar">
      <div className="sidebar-card mini-char-profile">
        <img
          src={character.icon}
          alt="character icon"
          className="mini-char-icon"
        />

        <div className="mini-char-name">{character.name}</div>
        <div className="turn-display">
          Tình huống: {turn} / {totalScenarios}
        </div>
      </div>

      <div className="sidebar-card">
        <div className="stats-list">
          {Object.keys(statConfig).map((key) => {
            const value = stats[key] || 0;
            const config = statConfig[key];

            return (
              <div key={key} className="stat-item">
                <div className="stat-header">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {config.icon} {config.label}
                  </span>
                  <span style={{ fontWeight: 800, color: 'var(--text-primary)' }}>{value}</span>
                </div>
                <div className="stat-bar-bg">
                  <div
                    className="stat-bar-fill"
                    style={{
                      width: `${value}%`,
                      backgroundColor: value < 30 ? "var(--danger)" : value > 70 ? "var(--success)" : "var(--accent)"
                    }}
                  />
                </div>
              </div>
            );
          })}
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
