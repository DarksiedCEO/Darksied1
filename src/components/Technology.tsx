import React from 'react';

const Technology: React.FC = () => {
    return (
        <section id="technology">
            <div className="container">
                <h2>Technology &amp; Innovation</h2>
                <div className="technology">
                    {/* 1) Advanced Systems Integration */}
                    <div className="tech">
                        <img
                            src="/images/System_engineering.jpg"
                            alt="Advanced system engineering integration"
                            className="section-img"
                        />
                        <h3>Advanced Systems Integration</h3>
                        <p>
                            Our systems are engineered for scalability and precision—integrating cutting-edge
                            hardware and software solutions for real-time data processing and decision-making.
                        </p>
                    </div>

                    {/* 2) Algorithmic Trading Engines */}
                    <div className="tech">
                        <img
                            src="/images/Investment_and_trading.jpg"
                            alt="Algorithmic Trading Engines"
                            className="section-img"
                        />
                        <h3>Algorithmic Trading Engines</h3>
                        <p>
                            We leverage AI-driven algorithms to analyze real-time data and execute trades
                            with unmatched speed, ensuring you stay ahead in dynamic markets.
                        </p>
                    </div>

                    {/* 3) AI & Machine Learning */}
                    <div className="tech">
                        <img
                            src="/images/black_woman_with_stock_market.jpg"
                            alt="AI and Machine Learning in Finance"
                            className="section-img"
                        />
                        <h3>AI &amp; Machine Learning</h3>
                        <p>
                            Our advanced machine learning models and deep neural networks continuously evolve,
                            providing predictive insights and adaptive strategies in fast-moving financial sectors.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;
