import React from 'react';
import Link from 'next/link';
import './CharacterList.css';

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list-container">
      <h2>Character List</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link href={`/characters/${character.id}`}>
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
