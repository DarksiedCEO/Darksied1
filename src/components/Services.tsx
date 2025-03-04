import React from 'react';

const Services: React.FC = () => {
    return (
        <section id="services" style={{ padding: '40px 0', background: '#f4f4f4' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2>What We Do</h2>
                <p style={{ color: '#666', maxWidth: '700px', marginBottom: '20px' }}>
                    At darksied-website, we specialize in designing, building, and deploying algorithmic trading
                    solutions that empower our clients to excel in today’s fast-paced financial markets.
                    Our multi-disciplinary expertise spans AI-driven strategy development, real-time data
                    analytics, and cutting-edge risk management.
                </p>
                <div className="services" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {/* Example: 2 or 3 service cards */}
                    <div className="service" style={{ flex: '1 1 300px', background: '#fff', padding: '20px', borderRadius: '4px' }}>
                        <h3>Algorithmic Trading Solutions</h3>
                        <p>
                            We design and optimize trading algorithms that leverage AI and ML to
                            execute high-frequency, low-latency trades with precision.
                        </p>
                    </div>

                    <div className="service" style={{ flex: '1 1 300px', background: '#fff', padding: '20px', borderRadius: '4px' }}>
                        <h3>Custom Strategy Development</h3>
                        <p>
                            Our team collaborates with clients to build tailored strategies
                            that reflect specific risk tolerances, market preferences, and performance goals.
                        </p>
                    </div>

                    <div className="service" style={{ flex: '1 1 300px', background: '#fff', padding: '20px', borderRadius: '4px' }}>
                        <h3>Data-Driven Insights</h3>
                        <p>
                            By harnessing massive datasets and real-time analytics, we deliver actionable insights
                            that inform smarter financial decisions and reduce uncertainty.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
