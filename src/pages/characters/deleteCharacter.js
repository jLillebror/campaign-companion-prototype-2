import React from 'react';

const DeleteCharacterButton = ({ characterId, onDeleteCharacter }) => {
  const handleDelete = () => {
    onDeleteCharacter(characterId);
  };

  return (
    <button onClick={handleDelete}>Delete Character</button>
  );
};

export default DeleteCharacterButton;