import React, { useState } from 'react';
import './CharacterForm.css';

const CreateCharacter = ({ onCreateCharacter }) => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    level: "",
    strength: "",
    dexterity: "",
    constitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",
    armorClass: "",
    hitPoints: "",
    equipment: [""],
    biography: "",
    miscellaneous: ""
  });

  const [showForm, setShowForm] = useState(false);
  const [customClass, setCustomClass] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCustomClassChange = (e) => {
    setCustomClass(e.target.value);
    setFormData({
      ...formData,
      class: "Custom"
    });
  };

  const handleAddEquipment = () => {
    setFormData({
      ...formData,
      equipment: [...formData.equipment, ""]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the characterData object with form data
    const characterData = {
      ...formData,
      class: formData.class === "Custom" ? customClass : formData.class
    };

    // Call the onCreateCharacter function with the character data
    onCreateCharacter(characterData);

    // Clear the form data and hide the form
    setFormData({
      name: "",
      class: "",
      level: "",
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdom: "",
      charisma: "",
      armorClass: "",
      hitPoints: "",
      equipment: [""],
      biography: "",
      miscellaneous: ""
    });
    setCustomClass("");

    // Toggle the showForm state after submission
    setShowForm(false);
  };

  return (
    <div className="create-character-form">
      <button className="show-create-form" onClick={() => setShowForm(!showForm)}>Create Character</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Class:
            <select className="classmenu" value={formData.class} onChange={handleChange}>
              <option value="">Choose a class</option>
              <option value="Barbarian">Barbarian</option>
              <option value="Bard">Bard</option>
              <option value="Cleric">Cleric</option>
              <option value="Druid">Druid</option>
              <option value="Fighter">Fighter</option>
              <option value="Monk">Monk</option>
              <option value="Paladin">Paladin</option>
              <option value="Ranger">Ranger</option>
              <option value="Rogue">Rogue</option>
              <option value="Sorcerer">Sorcerer</option>
              <option value="Warlock">Warlock</option>
              <option value="Wizard">Wizard</option>
              <option value="Custom">Custom</option>
            </select>
          </label>
          {formData.class === "Custom" && (
            <label>
              Custom Class:
              <input type="text" value={customClass} onChange={handleCustomClassChange} />
            </label>
          )}
          <label>
            Level:
            <input type="number" name="level" value={formData.level} onChange={handleChange} />
          </label>
          <label>
            Strength:
            <input type="number" name="strength" value={formData.strength} onChange={handleChange} />
          </label>
          <label>
            Dexterity:
            <input type="number" name="dexterity" value={formData.dexterity} onChange={handleChange} />
          </label>
          <label>
            Constitution:
            <input type="number" name="constitution" value={formData.constitution} onChange={handleChange} />
          </label>
          <label>
            Intelligence:
            <input type="number" name="intelligence" value={formData.intelligence} onChange={handleChange} />
          </label>
          <label>
            Wisdom:
            <input type="number" name="wisdom" value={formData.wisdom} onChange={handleChange} />
          </label>
          <label>
            Charisma:
            <input type="number" name="charisma" value={formData.charisma} onChange={handleChange} />
          </label>
          <label>
            Armor Class:
            <input type="number" name="armorClass" value={formData.armorClass} onChange={handleChange} />
          </label>
          <label>
            Hit Points:
            <input type="number" name="hitPoints" value={formData.hitPoints} onChange={handleChange} />
          </label>
          <label>
            Equipment:
            {formData.equipment.map((item, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const updatedEquipment = [...formData.equipment];
                    updatedEquipment[index] = e.target.value;
                    setFormData({
                      ...formData,
                      equipment: updatedEquipment
                    });
                  }}
                />
              </div>
            ))}
            <button type="button" onClick={handleAddEquipment}>Add Item</button>
          </label>
          <label>
            Biography:
            <textarea name="biography" value={formData.biography} onChange={handleChange} />
          </label>
          <label>
            Miscellaneous:
            <textarea name="miscellaneous" value={formData.miscellaneous} onChange={handleChange} />
          </label>
          <button type="submit">Create Character</button>
        </form>
      )}
    </div>
  );
};

export default CreateCharacter;
