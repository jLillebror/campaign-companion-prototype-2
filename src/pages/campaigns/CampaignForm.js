import React, { useState, useEffect } from 'react';
import './CampaignForm.css';


const CampaignForm = ({ onCreateCampaign, campaignToEdit, onUpdateCampaign }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    gameSystem: '',
    campaignSetting: '',
    additionalNotes: '',
    selectedCharacters: [], // Add selected characters array to form data
    characters: [] // State to store characters
  });

  useEffect(() => {
    // Fetch characters from local storage
    const storedCharacters = JSON.parse(localStorage.getItem('characters')) || [];
    setFormData(prevData => ({
      ...prevData,
      characters: storedCharacters
    }));
    
    // If there's a campaign to edit, set the form data accordingly
    if (campaignToEdit) {
      setIsEditing(true);
      setFormData(campaignToEdit);
    }
  }, [campaignToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddCharacter = () => {
    // Find the selected character object
    const selectedCharacter = formData.characters.find(character => character.characterId === parseInt(formData.selectedCharacterId));
    if (selectedCharacter) {
      setFormData(prevData => ({
        ...prevData,
        selectedCharacters: [...prevData.selectedCharacters, selectedCharacter],
        selectedCharacterId: '' // Reset selected character ID
      }));
    }
  };

  const handleRemoveCharacter = (characterId) => {
    // Remove the character with the given ID from the selected characters array
    setFormData(prevData => ({
      ...prevData,
      selectedCharacters: prevData.selectedCharacters.filter(character => character.characterId !== characterId)
    }));
  };

  const handleSave = () => {
    onUpdateCampaign(formData);
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (campaignToEdit) {
      // If campaignToEdit exists, it means we are updating an existing campaign
      onUpdateCampaign(formData); // Pass the updated form data to onUpdateCampaign callback
    } else {
      // If campaignToEdit doesn't exist, it means we are creating a new campaign
      onCreateCampaign(formData); // Pass the form data to onCreateCampaign callback
    }
    // Reset the form data
    setFormData({
      name: '',
      description: '',
      gameSystem: '',
      campaignSetting: '',
      startingLevel: '',
      campaignNotes: '',
      selectedCharacters: [],
      characters: formData.characters
    });
  };

  return (
    <form className="campaign-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Campaign Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
  </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="gameSystem">Game System:</label>
        <select id="gameSystem" name="gameSystem" value={formData.gameSystem} onChange={handleChange} required>
          <option value="">Select Game System</option>
          <option value="Dungeons & Dragons 5th Edition">Dungeons & Dragons 5th Edition</option>
          <option value="Pathfinder">Pathfinder</option>
          <option value="World of Darkness">World of Darkness</option>
          <option value="Custom">Custom</option>
        </select>
      </div>
      <div>
        <label htmlFor="campaignSetting">Campaign Setting:</label>
        <select id="campaignSetting" name="campaignSetting" value={formData.campaignSetting} onChange={handleChange} required>
          <option value="">Select Campaign Setting</option>
          <option value="Forgotten Realms">Forgotten Realms</option>
          <option value="Eberron">Eberron</option>
          <option value="Greyhawk">Greyhawk</option>
          <option value="Custom">Custom</option>
        </select>
      </div>
      <div>
        <label htmlFor="additionalNotes">Additional Notes:</label>
        <textarea id="additionalNotes" name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="selectedCharacterId">Select Character:</label>
        <select id="selectedCharacterId" name="selectedCharacterId" value={formData.selectedCharacterId} onChange={handleChange}>
          <option value="">Select Character</option>
          {formData.characters.map(character => (
            <option key={character.characterId} value={character.characterId}>{character.name}</option>
          ))}
        </select>
        <button type="button" onClick={handleAddCharacter}>Add Character</button>
      </div>
      <div>
        <h3>Selected Characters:</h3>
        <ul>
          {formData.selectedCharacters.map(character => (
            <li key={character.characterId}>
              {character.name}
              <button type="button" onClick={() => handleRemoveCharacter(character.characterId)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <button type="submit">{campaignToEdit ? 'Update Campaign' : 'Create Campaign'}</button>


    </form>
  );
};

export default CampaignForm;
