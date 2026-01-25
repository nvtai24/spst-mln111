import PropTypes from 'prop-types';

function CharacterCard({ character, onClick }) {
  return (
    <div
      className="character-card"
      onClick={onClick}
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
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CharacterCard;
