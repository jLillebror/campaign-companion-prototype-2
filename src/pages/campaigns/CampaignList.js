import React, { useState } from 'react';
import CharacterDetail from '../characters/CharacterDetail';
import DeleteCampaignButton from './DeleteCampaign';
import CampaignForm from './CampaignForm';
import './CampaignList.css';

const CampaignList = ({ campaigns, setCampaigns, onDeleteCampaign }) => {
  const [expandedCharacterId, setExpandedCharacterId] = useState(null);
  const [editingCampaignId, setEditingCampaignId] = useState(null);

  const handleCharacterClick = (characterId) => {
    setExpandedCharacterId((prevId) => (prevId === characterId ? null : characterId));
  };

  const handleEditCampaign = (campaignId) => {
    setEditingCampaignId(campaignId);
  };

  return (
    <div className="campaign-list">
      <h2>Campaign List</h2>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>
            {editingCampaignId === campaign.id ? (
              <CampaignForm
                campaignToEdit={campaign}
                onUpdateCampaign={(updatedCampaign) => {
                  // Update the campaign in the list
                  const updatedCampaigns = campaigns.map((c) =>
                    c.id === campaign.id ? { ...c, ...updatedCampaign } : c
                  );
                  setCampaigns(updatedCampaigns);
                  setEditingCampaignId(null); // Reset editingCampaignId after updating
                }}
              />
            ) : (
              <>
                <div>
                  {campaign.name}
                  <button onClick={() => handleEditCampaign(campaign.id)}>Edit</button>
                </div>
                <div>Campaign Notes: {campaign.notes}</div>
                <div>Game System: {campaign.gameSystem}</div>
                <div>Campaign Setting: {campaign.campaignSetting}</div>
                <div>Characters:</div>
                {Array.isArray(campaign.selectedCharacters) && campaign.selectedCharacters.length > 0 ? (
                  <div>
                    {campaign.selectedCharacters.map((character) => (
                      <div key={character.characterId}>
                        <div onClick={() => handleCharacterClick(character.characterId)}>
                          {expandedCharacterId === character.characterId ? (
                            <CharacterDetail character={character} />
                          ) : (
                            <div>
                              {character.name} - {character.class} - Level {character.level}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>No characters selected for this campaign</div>
                )}
                <DeleteCampaignButton campaignId={campaign.id} onDeleteCampaign={onDeleteCampaign} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
