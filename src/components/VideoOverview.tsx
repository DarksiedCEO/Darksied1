import React from 'react';

const VideoOverview: React.FC = () => {
    return (
        <section id="video-overview" style={{ padding: '40px 0' }}>
            <div
                className="container"
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    textAlign: 'center',
                    padding: '0 20px'
                }}
            >
                <h2 style={{ color: '#007BFF' }}>Our Technology in Action</h2>
                <p
                    style={{
                        marginBottom: '30px',
                        color: '#666',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                        fontSize: '1.1em'
                    }}
                >
                    At darksied, powered by advanced algorithmic trading technology, we integrate state-of-the-art hardware with proprietary AI-driven software to transform market data into actionable insights. Operating continuously to manage volatility, our systems leverage deep learning, real-time analytics, and adaptive risk management to deliver unparalleled performance.
                    <br /><br />
                    Experience innovation that drives financial success, all available at www.darksied.com.
                </p>
                <div className="video-wrapper">
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            width: '100%',
                            maxWidth: '800px',
                            borderRadius: '4px'
                        }}
                        poster="/images/video-poster.jpg"
                    >
                        <source src="/videos/Black_Man_Working_on_Laptop_Computer.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default VideoOverview;
