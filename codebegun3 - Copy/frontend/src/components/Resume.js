import React, { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';


function Resume() {
  const [resumeHTML, setResumeHTML] = useState('');

  useEffect(() => {
    const storedResume = localStorage.getItem('resumeData');
    if (storedResume) {
      setResumeHTML(storedResume);
    }
  }, []);

  return (
    <div className="container resume-container">
      <div id="resume" dangerouslySetInnerHTML={{ __html: resumeHTML }}></div>
      <button id="download" onClick={downloadPDF} style={{ padding: '12px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginLeft:"50%"}}>Download</button>
    </div>
  );

  function downloadPDF() {
    const element = document.getElementById('resume');
    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  }
}

export default Resume;
