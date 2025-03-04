import React from 'react';

const Hero: React.FC = () => {
    return (
        <section
            className="hero"
            style={{
                // Use an absolute path to the image in the public folder
                background: "url('/images/Investment_and_trading.jpg') center/cover no-repeat",
            }}
        >
            <div className="container hero-content">
                <h1>Leading the Future of Automated Trading</h1>
                <p>
                    Utilizing state-of-the-art robotics, artificial intelligence, and machine learning
                    to revolutionize financial decision-making.
                </p>
                <a href="#about" className="btn">Learn More</a>
            </div>
        </section>
    );
};

export default Hero;
