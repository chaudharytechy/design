import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    // ... other form fields
  });

  const [fileData, setFileData] = useState({
    frontImage: null,
    otherImage: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFrontImageChange = (e) => {
    setFileData({
      ...fileData,
      frontImage: e.target.files[0],
    });
  };

  const handleOtherImageChange = (e) => {
    setFileData({
      ...fileData,
      otherImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = 'https://acre.onrender.com/postPerson/propertyInsert/6598e89e2b15685d2fafbdda';

    const formDataAPI = new FormData();
    for (const key in formData) {
      formDataAPI.append(key, formData[key]);
    }

    formDataAPI.append('frontImage', fileData.frontImage);
    formDataAPI.append('otherImage', fileData.otherImage);

    try {
      const response = await axios.post(apiEndpoint, formDataAPI);
      console.log(response.data);
      // Handle success, redirect, or show a success message
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Project Name:
        <input
          type="text"
          name="projectName"
          value={formData.projectName}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Logo:
        <input
          type="file"
          name="frontImage"
          onChange={handleFrontImageChange}
        />
      </label>

      <label>
        Other:
        <input
          type="file"
          name="otherImage"
          onChange={handleOtherImageChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;
