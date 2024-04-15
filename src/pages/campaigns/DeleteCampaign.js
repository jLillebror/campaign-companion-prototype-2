import React from 'react';

const DeleteCampaignButton = ({ campaignId, onDeleteCampaign }) => {
  const handleClick = () => {
    onDeleteCampaign(campaignId);
  };

  return (
    <button onClick={handleClick}>Delete</button>
  );
};

export default DeleteCampaignButton;
