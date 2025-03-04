import React from 'react';

const Financial: React.FC = () => {
    return (
        <section id="financial" style={{ padding: '40px 0' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2>Financial Integrity &amp; Lender Information</h2>
                <p style={{ color: '#666', maxWidth: '700px', marginBottom: '20px' }}>
                    At Darksied, we maintain a robust financial foundation that emphasizes
                    liquidity, risk mitigation, and compliance with all relevant regulations. Our
                    transparent reporting standards and consistent performance history instill confidence
                    in both institutional lenders and private investors.
                </p>
                <ul style={{ color: '#666', maxWidth: '700px', marginBottom: '20px', listStyle: 'disc', marginLeft: '20px' }}>
                    <li><strong>Liquidity Management:</strong> We keep ample reserves to manage market volatility and unforeseen events.</li>
                    <li><strong>Regulatory Compliance:</strong> We adhere to all relevant finance and securities regulations, ensuring secure and lawful operations.</li>
                    <li><strong>Risk Management:</strong> Our quantitative models and stress tests continuously evaluate exposure, enabling swift adaptation to market shifts.</li>
                    <li><strong>Transparent Reporting:</strong> We provide clear, data-driven reports to stakeholders, fostering trust and accountability.</li>
                </ul>
                <p style={{ color: '#666', maxWidth: '700px' }}>
                    By combining strong financial discipline with cutting-edge trading technology,
                    we create sustainable growth opportunities for our clients and partners alike.
                </p>
            </div>
        </section>
    );
};

export default Financial;
