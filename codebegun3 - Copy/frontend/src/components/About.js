import React from "react";

function About() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>About Us</h1>
            <h2 style={styles.subHeading}>Welcome to Our Career Resume Building Website</h2>
            <p style={styles.paragraph}>
                At <strong>CARRER-RESUME </strong>, we aim to simplify the process of creating professional and tailored resumes for job seekers. Whether you're looking to land your first job, switch careers, or advance in your current role, our platform helps you design a resume that highlights your skills, experiences, and qualifications.
            </p>
            <p style={styles.paragraph}>
                Our easy-to-use online tool guides you through a seamless process to build your resume step-by-step. With customizable templates and fields for your personal information, work experience, education, skills, and projects, you can create a standout resume in no time.
            </p>
            <p style={styles.paragraph}>
                We also offer skill-oriented resume options to make sure your strengths are showcased effectively. Once you're done, you can download your resume or save it online for easy access. Whether you are a fresher or an experienced professional, we have the right tools for you.
            </p>
            <p style={styles.paragraph}>
                Join us today and start building the perfect resume to take your career to the next level!
            </p>
        </div>
    );
}

const styles = {
    container: {
        padding: "40px",
        maxWidth: "800px",
        height: "90vh", // Ensure it takes the full height of the viewport
        backgroundImage: "url('https://tse2.mm.bing.net/th?id=OIP.JkcYOovXGNijhryz145aHwHaEK&pid=Api&P=0&h=180')", // Background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Arial', sans-serif",
        color:"white"
    },
    heading: {
        fontSize: "36px",
        color: "white",
        textAlign: "center",
        marginBottom: "10px",
    },
    subHeading: {
        fontSize: "24px",
        color: "white",
        textAlign: "center",
        marginBottom: "20px",
    },
    paragraph: {
        fontSize: "16px",
        lineHeight: "1.6",
        color: "lavender",
        textAlign: "justify",
        marginBottom: "15px",
        padding: "0 10px",
    }
    
};

export default About;
