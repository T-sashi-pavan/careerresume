import React, { useState } from "react";

function Home() {
  const [showResumeExamples, setShowResumeExamples] = useState(false); // State to toggle between button and resume examples
  const [selectedResume, setSelectedResume] = useState(null); // State to hold the selected resume

  const handleDemoClick = () => {
    setShowResumeExamples(true); // Show resume examples when button is clicked
  };

  const handleResumeClick = (index) => {
    setSelectedResume(index); // Set the selected resume
  };

  // Array of image URLs for resume examples
  const imageUrls = [
    "https://venngage-wordpress.s3.amazonaws.com/uploads/2017/07/infographic-resume-template-11.png",
    "https://venngage-wordpress.s3.amazonaws.com/uploads/2017/07/infographic-resume-template-7.png",
    "https://www.hloom.com/images/professional-creative-ux-designer-resume-template.png",
    "http://emske.com/wp-content/uploads/2015/05/resume-chart-620x827.jpg",
    "https://venngage-wordpress.s3.amazonaws.com/uploads/2014/05/infographic-resume-template-5.png",
    "https://cdn-images.resumelab.com/pages/certifications_resume_example.png?1574836361",
    "https://cdn-images.resumelab.com/pages/resumelab_initials.png",
    "https://i.pinimg.com/originals/52/f2/6b/52f26bfc7c0ee10d5b51fb5f3c2dfbc3.jpg",
    "https://i.pinimg.com/736x/f5/43/65/f54365873559310773279db0e9c09bc3.jpg",
  ];

  return (
    <div
      style={{
        height: "90vh", // Ensure it takes the full height of the viewport
        backgroundImage: "url('https://png.pngtree.com/background/20210710/original/pngtree-taobao-vector-cartoon-review-resume-business-technology-document-poster-background-picture-image_1030745.jpg')", // Background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "black",
        overflow: "auto", // Ensure content is scrollable if needed
      }}
    >
      {!showResumeExamples ? (
        // "START BUTTON" Button at the center
        <div>
          
          <button
            onClick={handleDemoClick}
            style={{
              fontSize: "30px",
              padding: "20px 40px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            START DEMO
          </button>
        </div>
      ) : selectedResume === null ? (
        // Display Resume Examples in Grid Layout
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Responsive grid layout
            gap: "20px",
            marginTop: "150px",
            width: "90%",
          }}
        >
          {imageUrls.map((url, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.3s ease", // Smooth transition for hover effect
              }}
              onClick={() => handleResumeClick(index)} // Set the clicked resume as selected
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")} // Expand on hover
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Reset scale when hover ends
            >
              <img
                src={url}
                alt={`Resume ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
              <p>Resume {index + 1}</p>
            </div>
          ))}
        </div>
      ) : (
        // Display the selected resume in the center
        <div
          style={{
            position: "relative",
            width: "80%",
            marginTop: "40%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              cursor: "pointer",
              fontSize: "20px",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "5px",
            }}
            onClick={() => setSelectedResume(null)} // Go back to grid view
          >
            Back
          </div>
          <img
            src={imageUrls[selectedResume]}
            alt={`Selected Resume ${selectedResume + 1}`}
            style={{
              width: "80%",
              height: "auto",
              margin: "0 auto",
              display: "block",
              borderRadius: "8px",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
