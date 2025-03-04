import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" style={{ padding: '40px 0', background: '#f8f8f8' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2>Contact Us</h2>
                <p style={{ color: '#666', maxWidth: '700px', marginBottom: '20px' }}>
                    We’d love to hear from you. Whether you have questions about our algorithmic trading
                    solutions, partnership opportunities, or anything else, our team is ready to answer
                    your inquiries.
                </p>

                {/* Contact Form */}
                <form action="submit_form.php" method="post" style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px', maxWidth: '600px' }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Your Message"
                        required
                        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            background: '#007BFF',
                            color: '#fff',
                            borderRadius: '4px',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Send Message
                    </button>
                </form>

                {/* Direct Contact Information */}
                <div className="contact-info" style={{ color: '#666' }}>
                    <p>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:hello@darksied.com" style={{ color: '#007BFF' }}>
                            hello@darksied.com
                        </a>
                    </p>
                    <p>
                        <strong>Phone:</strong> 213-632-8384
                    </p>
                    <p>
                        <strong>Location:</strong> Los Angeles, CA
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
