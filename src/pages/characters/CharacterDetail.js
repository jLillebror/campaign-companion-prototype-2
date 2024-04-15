import React, { useState } from "react";
import './CharacterDetail.css';

const CharacterDetail = ({ character, handleUpdateCharacter }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCharacter, setEditedCharacter] = useState(character);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    handleUpdateCharacter(editedCharacter);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value,
    }));
  };

  if (!character) {
    return (
      <div className="no-character">No character selected</div>
    );
  }

  return (
    <div className="character-details">
      {isEditing ? (
        <>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={editedCharacter.name}
            onChange={handleChange}
            className="character-input"
          />
          <label htmlFor="class">Class:</label>
          <input
            type="text"
            name="class"
            value={editedCharacter.class}
            onChange={handleChange}
            className="character-input"
          />
          <label htmlFor="level">Level:</label>
          <input
            type="number"
            name="level"
            value={editedCharacter.level}
            onChange={handleChange}
            className="character-input"
          />
          <label htmlFor="strength">Strength:</label>
          <input
            type="number"
            name="strength"
            value={editedCharacter.strength}
            onChange={handleChange}
            className="character-input"
          />
          <label htmlFor="dexterity">Dexterity:</label>
          <input
            type="number"
            name="dexterity"
            value={editedCharacter.dexterity}
            onChange={handleChange}
            className="character-input"
          />
          <label htmlFor="constitution">Constitution:</label>
          <input
            type="number"
            name="constitution"
            value={editedCharacter.constitution}
            onChange={handleChange}
            className="character-input"
          />
          <label htmlFor="intelligence">Intelligence:</label>
          <input
            type="number"
            name="intelligence"
            value={editedCharacter.intelligence}
            onChange={handleChange}
            className="character-input"
          />
          <label htmlFor="wisdom">Wisdom:</label>
          <input
            type="number"
            name="wisdom"
            value={editedCharacter.wisdom}
            onChange={handleChange}
            className="character-input"
          />
          <label htmlFor="charisma">Charisma:</label>
          <input
            type="number"
            name="charisma"
            value={editedCharacter.charisma}
            onChange={handleChange}
            className="character-input"
          />
          <label htmlFor="armorClass">Armor Class:</label>
          <input
            type="number"
            name="armorClass"
            value={editedCharacter.armorClass}
            onChange={handleChange}
            className="character-input"
          />
          <label htmlFor="hitPoints">Hit Points:</label>
          <input
            type="number"
            name="hitPoints"
            value={editedCharacter.hitPoints}
            onChange={handleChange}
            className="character-input"
          />
          <label htmlFor="biography">Biography:</label>
          <textarea
            name="biography"
            value={editedCharacter.biography}
            onChange={handleChange}
            className="character-textarea"
          />
          <label htmlFor="miscellaneous">Miscellaneous:</label>
          <textarea
            name="miscellaneous"
            value={editedCharacter.miscellaneous}
            onChange={handleChange}
            className="character-textarea"
          />
          <button onClick={handleSave} className="save-button">Save</button>
        </>
      ) : (
        <>
          <h2>
            {character.name} <button onClick={handleEdit} className="edit-button">Edit</button>{" "}
          </h2>
          <p>
            <strong>Class:</strong> {character.class}
          </p>
          <p>
            <strong>Level:</strong> {character.level}
          </p>
          <p>
            <strong>Strength:</strong> {character.strength}
          </p>
          <p>
            <strong>Dexterity:</strong> {character.dexterity}
          </p>
          <p>
            <strong>Constitution:</strong> {character.constitution}
          </p>
          <p>
            <strong>Intelligence:</strong> {character.intelligence}
          </p>
          <p>
            <strong>Wisdom:</strong> {character.wisdom}
          </p>
          <p>
            <strong>Charisma:</strong> {character.charisma}
          </p>
          <p>
            <strong>Armor Class:</strong> {character.armorClass}
          </p>
          <p>
            <strong>Hit Points:</strong> {character.hitPoints}
          </p>
          <p>
            <strong>Biography:</strong> {character.biography}
          </p>
          <p>
            <strong>Miscellaneous:</strong> {character.miscellaneous}
          </p>
        </>
      )}
    </div>
  );
};

export default CharacterDetail;
