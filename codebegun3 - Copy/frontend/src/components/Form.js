import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    github: '',
    linkedin: '',
    phone: '',
    address: '',
    gmail: '',
    summary: '',
    education: '',
    projects: '',
    skills: '',
    certifications: '',
    internships: '',
    activities: '',
    profilePic: null,
    language: 'English',
    resumeTemplate: 'Template1',
    resumeColor: '#ffffff',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          profilePic: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (e) => {
    setFormData({
      ...formData,
      resumeColor: e.target.value,
    });
  };

  const handleGenerateResume = () => {
    const {
      fullName, github, linkedin, phone, address, gmail, summary,
      education, projects, skills, certifications, internships, activities,
      profilePic, resumeColor, language, resumeTemplate,
    } = formData;

    const educationDetails = education.split('\n').map((detail) => {
      const [school, duration] = detail.split(',');
      return `
        <div class="education-item">
          <div class="school">${school.trim()}</div>
          <div class="duration">${duration ? duration.trim() : ''}</div>
        </div>
      `;
    }).join('');

    const projectsList = projects.split('\n').map((item) => `<li>${item}</li>`).join('');
    const skillsList = skills.split('\n').map((item) => `<li>${item}</li>`).join('');
    const certificationsList = certifications.split('\n').map((item) => `<li>${item}</li>`).join('');
    const internshipsList = internships.split('\n').map((item) => `<li>${item}</li>`).join('');
    const activitiesList = activities.split('\n').map((item) => `<li>${item}</li>`).join('');

    const qrCode = linkedin
      ? `<div style="text-align: center; margin-top: 20px;">
          <QRCode value="${linkedin}" size={100} />
        </div>`
      : '';

    const resumeHTML = `
      <div style="background-color: ${resumeColor}; padding: 20px; border-radius: 8px;">
        <div style="text-align: center; margin-bottom: 20px;">
          ${
            profilePic
              ? `<img src="${profilePic}" alt="Profile Picture" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin-right: 10px;">`
              : ''
          }
          <h1 style="display: inline-block; vertical-align: middle;">${fullName}</h1>
        </div>
        <div style="text-align: center; margin-bottom: 20px;">
          <p style="display: inline; margin-right: 15px;">${github}</p>
          <p style="display: inline; margin-right: 15px;">${linkedin}</p>
          <p style="display: inline; margin-right: 15px;">${phone}</p>
          <p style="display: inline; margin-right: 15px;">${address}</p>
          <p style="display: inline;">${gmail}</p>
        </div>
        <hr>
        <h3>Summary</h3>
        <p>${summary}</p>
        <hr>
        <h3>Education</h3>
        <div id="educationDisplay">${educationDetails}</div>
        <hr>
        <h3>Projects</h3>
        <ul>${projectsList}</ul>
        <hr>
        <h3>Technical Skills</h3>
        <ul>${skillsList}</ul>
        <hr>
        <h3>Certifications</h3>
        <ul>${certificationsList}</ul>
        <hr>
        <h3>Internships</h3>
        <ul>${internshipsList}</ul>
        <hr>
        <h3>Extra Curriculum Activities</h3>
        <ul>${activitiesList}</ul>
        <hr>
        ${qrCode}
      </div>
    `;

    localStorage.setItem('resumeData', resumeHTML);
    window.location.href = '/resume'; // Navigate to the resume page
  };

  const handleAISuggestions = (field) => {
    const suggestions = {
      summary: 'Experienced software developer with expertise in React.js, Node.js, and cloud technologies.',
      skills: 'JavaScript, React, Node.js, MongoDB, CSS, HTML, AWS, Docker, Git',
      projects: '1. Portfolio Website\n2. E-commerce App\n3. Chat Application',
    };
    setFormData({
      ...formData,
      [field]: suggestions[field],
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Resume Generator</h1>
      <form style={styles.form}>
        <div style={styles.inputRow}>
          <input
            type="text"
            id="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="file"
            id="profilePic"
            accept="image/*"
            onChange={handleFileChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputRow}>
          <input
            type="url"
            id="github"
            placeholder="GitHub Link"
            value={formData.github}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="url"
            id="linkedin"
            placeholder="LinkedIn Link"
            value={formData.linkedin}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputRow}>
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            id="gmail"
            placeholder="Gmail"
            value={formData.gmail}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <input
          type="text"
          id="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          style={styles.input}
        />
       <div style={styles.section}>
        <textarea
          id="summary"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleChange}
          required
          style={styles.textarea}
        />
        <button type="button" onClick={() => handleAISuggestions('summary')} style={styles.button}>
          AI Suggest Summary
        </button>
        </div>

 <div style={styles.section}>
  <textarea
    id="education"
    placeholder="Education (e.g., School Name, Duration)"
    value={formData.education}
    onChange={handleChange}
    style={styles.textarea}
  />
 
</div>

{/* Additional fields for Projects */}
<div style={styles.section}>
  <textarea
    id="projects"
    placeholder="Projects (e.g., Project Title - Description)"
    value={formData.projects}
    onChange={handleChange}
    style={styles.textarea}
  />
  
</div>

{/* Additional fields for Skills */}
<div style={styles.section}>
  <textarea
    id="skills"
    placeholder="Technical Skills (e.g., JavaScript, React, Python)"
    value={formData.skills}
    onChange={handleChange}
    style={styles.textarea}
  />
  
</div>

{/* Additional fields for Certifications */}
<div style={styles.section}>
  <textarea
    id="certifications"
    placeholder="Certifications (e.g., Course Name - Issuer)"
    value={formData.certifications}
    onChange={handleChange}
    style={styles.textarea}
  />
  
  
</div>

{/* Additional fields for Internships */}
<div style={styles.section}>
  <textarea
    id="internships"
    placeholder="Internships (e.g., Company Name - Role - Duration)"
    value={formData.internships}
    onChange={handleChange}
    style={styles.textarea}
  />
 
</div>

{/* Additional fields for Activities */}
<div style={styles.section}>
  <textarea
    id="activities"
    placeholder="Extra-Curricular Activities (e.g., Activity Name - Description)"
    value={formData.activities}
    onChange={handleChange}
    style={styles.textarea}
  />
 
</div>

        <button type="button" onClick={handleGenerateResume} style={styles.button}>
          Generate Resume
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f7fc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px',
  },
  input: {
    width: '48%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    minHeight: '100px',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Form;
