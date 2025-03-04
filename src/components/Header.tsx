import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ background: '#f8f8f8', padding: '20px 0' }}>
            <div className="container header-top" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/images/logo.svg" alt="darksied-website Logo" style={{ height: '50px' }} />
                    <div>
                        <h1 style={{ margin: 0, fontSize: '1.8em', color: '#007BFF' }}>Darksied</h1>
                        <p style={{ margin: 0, fontSize: '0.9em', color: '#666' }}>
                            Advanced Algorithmic Agents for Automated Trading
                        </p>
                    </div>
                </div>
                {/* Navigation */}
                <nav>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0 }}>
                        <li><a href="#about" style={{ textDecoration: 'none', color: '#333' }}>About Us</a></li>
                        <li><a href="#services" style={{ textDecoration: 'none', color: '#333' }}>Services</a></li>
                        <li><a href="#video-overview" style={{ textDecoration: 'none', color: '#333' }}>Video</a></li>
                        <li><a href="#technology" style={{ textDecoration: 'none', color: '#333' }}>Technology</a></li>
                        <li><a href="#financial" style={{ textDecoration: 'none', color: '#333' }}>Financial Integrity</a></li>
                        <li><a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
