import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

function CharacterSelection({ characters, onSelectCharacter }) {
  return (
    <div className="app">
      <div className="character-selection">
        <h1>ĐẤU TRANH GIAI CẤP</h1>
        <p className="subtitle">Lựa chọn nhân vật để bắt đầu hành trình giác ngộ</p>

        <div className="characters-grid">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => onSelectCharacter(character)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

CharacterSelection.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectCharacter: PropTypes.func.isRequired,
};

export default CharacterSelection;
