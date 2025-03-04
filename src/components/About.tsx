import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about">
            <div className="container">
                <h2>About Us</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            With decades of combined expertise in finance and technology, Darksied develops
                            advanced algorithmic agents that automate trading and market analysis. Our team has
                            successfully delivered high-impact projects and forged key partnerships across the
                            industry.
                        </p>
                        <p>
                            <strong>Mission:</strong> To transform the financial industry through innovative
                            automated solutions that enhance efficiency and profitability.
                        </p>
                        <p>
                            <strong>Vision:</strong> To be the leading provider of intelligent trading systems,
                            setting new standards in financial technology.
                        </p>
                        <p>
                            <strong>Core Values:</strong> Security, client success, and continuous innovation drive
                            everything we do.
                        </p>
                    </div>
                    <div className="about-image">
                        <img
                            src="/images/black_woman_with_stock_market.jpg"
                            alt="Professional woman reviewing stock data"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
