import React, { useState, useEffect } from 'react';
import Navigation from "@/app/Components/Navigation/Navigation";
import CampaignForm from './CampaignForm';
import CampaignList from './CampaignList';

const Campaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  useEffect(() => {
    const storedCampaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
    setCampaigns(storedCampaigns);
  }, []);

  const handleCreateCampaign = (campaignData) => {
    const newCampaign = { ...campaignData, id: Date.now() }; // Generate a unique ID for the campaign
    setCampaigns(prevCampaigns => [...prevCampaigns, newCampaign]);
    setSelectedCampaign(newCampaign);
    localStorage.setItem('campaigns', JSON.stringify([...campaigns, newCampaign]));
  };

  const handleDeleteCampaign = (campaignId) => {
    const updatedCampaigns = campaigns.filter(campaign => campaign.id !== campaignId);
    setCampaigns(updatedCampaigns);
    localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));
  };

  const handleUpdateCampaign = (updatedCampaign) => {
    const updatedCampaigns = campaigns.map(campaign =>
      campaign.id === updatedCampaign.id ? updatedCampaign : campaign
    );
    setCampaigns(updatedCampaigns);
    setSelectedCampaign(updatedCampaign);
    localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));
  };

  return (
    <div>
      <Navigation />
      <h1>Campaign Management</h1>
      <h2>Create Campaign</h2>
      <CampaignForm onCreateCampaign={handleCreateCampaign} />
      <CampaignList campaigns={campaigns} setCampaigns={setCampaigns} onDeleteCampaign={handleDeleteCampaign} />
    </div>
  );
};

export default Campaign;
