import React from 'react';

function Header() {
    const headerStyle = {
        background: 'linear-gradient(135deg,rgb(173, 187, 208), #6610f2)', // Gradient background for a professional look
        color: 'white',
        textAlign: 'center',
        padding: '50px 0', // Larger padding for a more spacious look
        borderBottom: '5px solid #ddd', // A thin border for a sleek separation
    };

    const titleStyle = {
        fontSize: '3rem', // Bigger size for the main title
        fontWeight: '700', // Bold weight for emphasis
        margin: '0', // Remove default margin for tight spacing
        letterSpacing: '1px', // Small letter spacing for style
    };

    const taglineStyle = {
        fontSize: '1.5rem', // Slightly smaller size for the tagline
        fontWeight: '400', // Regular weight to differentiate from the main title
        margin: '5px 0', // Small margin between lines
        lineHeight: '1.5', // Increase line height for readability
    };

    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>CAREER-RESUME</h1>
            <h6 style={taglineStyle}>Don't Make Life Without Passion</h6>
            <h6 style={taglineStyle}>Dream it, Achieve it</h6>
        </header>
    );
}

export default Header;
