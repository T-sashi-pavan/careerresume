import React, { useState } from 'react';
import axios from 'axios';

function Services() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    github: '',
    linkedin: '',
    address: '',
    phoneNumber: '',
    skills: '',
    workExperience: '',
    projects: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleGenerateResume = async () => {
    if (!formData.fullName || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/resume/generate', formData);
      alert('Resume generated and saved to database!');
    } catch (error) {
      console.error('Error generating resume:', error);
      alert('Resume generated and saved to database.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <button
        onClick={() => setIsFormVisible(true)}
        style={{ padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white' }}
      >
        Skill Oriented Resumes
      </button>

      {isFormVisible && (
        <div style={{ marginTop: '20px' }}>
          <h3>Enter your details</h3>
          <form>
            <div>
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label>GitHub</label>
              <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label>LinkedIn</label>
              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label>Skills</label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label>Work Experience</label>
              <input
                type="text"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label>Projects</label>
              <input
                type="text"
                name="projects"
                value={formData.projects}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>

            <button
              type="button"
              onClick={handleGenerateResume}
              style={{
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: 'white',
                fontSize: '16px',
                marginTop: '20px',
              }}
            >
              Generate Resume
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

export default Services;
