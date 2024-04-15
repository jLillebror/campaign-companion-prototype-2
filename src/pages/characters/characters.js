import React, { useState, useEffect } from 'react';
import Navigation from "@/app/Components/Navigation/Navigation";
import CharacterDetail from "./CharacterDetail";
import CreateCharacter from "./createCharacter";
import DeleteCharacterButton from './deleteCharacter';
import './characters.css';

const CharactersIndex = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    const storedCharacters = JSON.parse(localStorage.getItem('characters')) || [];
    setCharacters(storedCharacters);
  }, []);

  const handleCharacterClick = (characterId) => {
    setSelectedCharacter(prevSelected => (prevSelected === characterId ? null : characterId));
    setEditMode(prevEditMode => ({
      ...prevEditMode,
      [characterId]: !prevEditMode[characterId]
    }));
  };

  const handleCreateCharacter = (formData) => {
    const characterId = generateCharacterId();
    const newCharacter = {
      characterId,
      ...formData
    };
    const updatedCharacters = [...characters, newCharacter];
    setCharacters(updatedCharacters);
    localStorage.setItem('characters', JSON.stringify(updatedCharacters));
  };

  const generateCharacterId = () => {
    return new Date().getTime();
  };

  const handleUpdateCharacter = (updatedCharacter) => {
    const updatedCharacters = characters.map(character =>
      character.characterId === updatedCharacter.characterId ? updatedCharacter : character
    );
    setCharacters(updatedCharacters);
    localStorage.setItem('characters', JSON.stringify(updatedCharacters));
  };

  const handleDeleteCharacter = (characterId) => {
    const updatedCharacters = characters.filter(character => character.characterId !== characterId);
    setCharacters(updatedCharacters);
    if (selectedCharacter === characterId) {
      setSelectedCharacter(null);
    }
    localStorage.setItem('characters', JSON.stringify(updatedCharacters));
  };

  return (
    <div>
      <Navigation />
      <h1>Your Characters</h1>
      <CreateCharacter onCreateCharacter={handleCreateCharacter} />

      <ul>
        {characters.map(character => (
          <li key={character.characterId} onClick={() => handleCharacterClick(character.characterId)} className={selectedCharacter === character.characterId ? "character-selected" : ""}>
            {character.name} {character.class} Level {character.level}

            <DeleteCharacterButton
              className="delete-character-button"
              characterId={character.characterId}
              onDeleteCharacter={handleDeleteCharacter}
            />
          </li>
        ))}
      </ul>

      {selectedCharacter && (
        <CharacterDetail character={characters.find(character => character.characterId === selectedCharacter)} handleUpdateCharacter={handleUpdateCharacter} />
      )}

    </div>
  );
};

export default CharactersIndex;
