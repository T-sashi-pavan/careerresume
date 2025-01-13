import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [portfolioData, setPortfolioData] = useState({
    profilePhoto: null,
    introName: '',
    summary: '',
    socialLinks: { GitHub: '', LinkedIn: '', Gmail: '', Instagram: '' },
    skills: [],
    achievements: '',
    education: { schoolName: '', schoolPercentage: '', collegeName: '', collegePercentage: '', universityName: '', universityPercentage: '' },
    internships: '',
    projects: '',
    certifications: '',
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setPortfolioData((prevData) => ({
          ...prevData,
          profilePhoto: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Special handling for 'skills', split the input into an array
    if (name === 'skills') {
      setPortfolioData((prevData) => ({
        ...prevData,
        [name]: value.split(',').map((skill) => skill.trim()), // Convert to array and trim whitespace
      }));
    } else if (name.startsWith('socialLinks')) {
      const platform = name.split('.')[1]; // Extract platform name like 'GitHub', 'LinkedIn'
      setPortfolioData((prevData) => ({
        ...prevData,
        socialLinks: {
          ...prevData.socialLinks,
          [platform]: value, // Update the specific social link
        },
      }));
    } else {
      setPortfolioData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setPortfolioData((prevData) => ({
      ...prevData,
      education: {
        ...prevData.education,
        [name]: value,
      },
    }));
  };

  

  const handleSubmit = () => {
    // Validate and save data to localStorage
    if (!portfolioData.profilePhoto) {
      alert('Please upload a profile photo.');
      return;
    }

    const { education, ...rest } = portfolioData;
    const { schoolName, schoolPercentage, collegeName, collegePercentage, universityName, universityPercentage } = education;

    if (!schoolName || !collegeName || !universityName || !schoolPercentage || !collegePercentage || !universityPercentage) {
      alert('Please enter valid names and percentages for all education levels.');
      return;
    }

    // Save the education data to localStorage
    const educationData = {
      labels: [schoolName, collegeName, universityName],
      percentages: [schoolPercentage, collegePercentage, universityPercentage],
    };
    localStorage.setItem('educationData', JSON.stringify(educationData));

    // Save other portfolio data
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
    window.location.href = '/Portfolio';
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Rapid Portfolio Maker</h1>

        <div className="profile-photo">
          <label htmlFor="profile-photo">Profile Photo</label>
          <input type="file" id="profile-photo" accept="image/*" onChange={handleFileChange} />
        </div>

        <div className="intro">
          <label htmlFor="intro-name">Introduction Name</label>
          <input type="text" id="intro-name" name="introName" value={portfolioData.introName} onChange={handleChange} placeholder="Hi, I'm..." />
        </div>

        <div className="summary">
          <label htmlFor="summary">Summary</label>
          <textarea id="summary" name="summary" value={portfolioData.summary} onChange={handleChange} placeholder="Write about yourself..." />
        </div>

                    <div className="social-links">
            <label>Social Media Links</label>
            <input
                type="url"
                id="github"
                name="socialLinks.GitHub"
                value={portfolioData.socialLinks.GitHub}
                onChange={handleChange}
                placeholder="GitHub URL"
            />
            <input
                type="url"
                id="linkedin"
                name="socialLinks.LinkedIn"
                value={portfolioData.socialLinks.LinkedIn}
                onChange={handleChange}
                placeholder="LinkedIn URL"
            />
            <input
                type="email"
                id="gmail"
                name="socialLinks.Gmail"
                value={portfolioData.socialLinks.Gmail}
                onChange={handleChange}
                placeholder="Gmail"
            />
            <input
                type="url"
                id="instagram"
                name="socialLinks.Instagram"
                value={portfolioData.socialLinks.Instagram}
                onChange={handleChange}
                placeholder="Instagram URL"
            />
            </div>
      

        <div className="skills">
          <label htmlFor="skills">Skills</label>
                    <input
            type="text"
            id="skills"
            name="skills"
            value={portfolioData.skills.join(', ')}  // Display as comma-separated values
            onChange={handleChange}
            placeholder="Enter your skills, separated by commas"
            />
        </div>

        <div className="achievements">
          <label htmlFor="achievements">Achievements</label>
          <input type="text" id="achievements" name="achievements" value={portfolioData.achievements} onChange={handleChange} placeholder="Enter your achievements" />
        </div>

        <div className="education">
          <label>Education</label>
          <input type="text" id="school-level" name="schoolName" value={portfolioData.education.schoolName} onChange={handleEducationChange} placeholder="Enter your school name" />
          <input type="number" id="school-percentage" name="schoolPercentage" value={portfolioData.education.schoolPercentage} onChange={handleEducationChange} placeholder="Enter your school percentage" min="0" max="100" />
          <input type="text" id="college-level" name="collegeName" value={portfolioData.education.collegeName} onChange={handleEducationChange} placeholder="Enter your college name" />
          <input type="number" id="college-percentage" name="collegePercentage" value={portfolioData.education.collegePercentage} onChange={handleEducationChange} placeholder="Enter your college percentage" min="0" max="100" />
          <input type="text" id="university-level" name="universityName" value={portfolioData.education.universityName} onChange={handleEducationChange} placeholder="Enter your university name" />
          <input type="number" id="university-percentage" name="universityPercentage" value={portfolioData.education.universityPercentage} onChange={handleEducationChange} placeholder="Enter your university percentage" min="0" max="100" />
        </div>

        <div className="internships">
          <label htmlFor="internships">Internships</label>
          <input type="text" id="internships" name="internships" value={portfolioData.internships} onChange={handleChange} placeholder="Enter your internships" />
        </div>

        <div className="projects">
          <label htmlFor="projects">Projects</label>
          <input type="text" id="projects" name="projects" value={portfolioData.projects} onChange={handleChange} placeholder="Enter your projects" />
        </div>

        <div className="certifications">
          <label htmlFor="certifications">Certifications</label>
          <input type="text" id="certifications" name="certifications" value={portfolioData.certifications} onChange={handleChange} placeholder="Enter your certifications" />
        </div>

        <button id="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Profile;
