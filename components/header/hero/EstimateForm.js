import React from "react";
import { useState } from "react";
const EstimateForm = () => {
  const [heroFormData, setHeroFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    windowsToReplace: 0,
    doorsToReplace: 0,
  });

  const handleChange = (event) => {
    setHeroFormData({
      ...heroFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleIncrement = (fieldName) => {
    setHeroFormData({
      ...heroFormData,
      [fieldName]: heroFormData[fieldName] + 1,
    });
  };

  const handleDecrement = (fieldName) => {
    if (heroFormData[fieldName] > 0) {
      setHeroFormData({
        ...heroFormData,
        [fieldName]: heroFormData[fieldName] - 1,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(heroFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={heroFormData.name}
          onChange={handleChange}
          placeholder="First & Name"
        />
        <input
          type="text"
          name="phone"
          value={heroFormData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="email"
          value={heroFormData.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        <input
          type="text"
          name="address"
          value={heroFormData.address}
          onChange={handleChange}
          placeholder="Address or City"
        />
        <div>
          <input
            type="text"
            name="windowsToReplace"
            value={heroFormData.windowsToReplace}
            onChange={handleChange}
            placeholder="# of Windows to Replace"
          />
          <button onClick={() => handleDecrement("windowsToReplace")}>
            &#8722;
          </button>
          <button onClick={() => handleIncrement("windowsToReplace")}>
            &#43;
          </button>
        </div>
        <div>
          <input
            type="text"
            name="doorsToReplace"
            value={heroFormData.doorsToReplace}
            onChange={handleChange}
            placeholder="# of Doors to Replace"
          />
          <button onClick={() => handleDecrement("doorsToReplace")}>
            &#8722;
          </button>
          <button onClick={() => handleIncrement("doorsToReplace")}>
            &#43;
          </button>
        </div>
        <button type="submit">Get Estimate</button>
      </div>
    </form>
  );
};

export default EstimateForm;
