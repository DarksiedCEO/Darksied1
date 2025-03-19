import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VideoOverview from './components/VideoOverview';
import Services from './components/Services';
import Technology from './components/Technology';
import Financial from './components/Financial';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Define the App component using a function declaration for consistency
const App: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <About />
            <VideoOverview />
            <Services />
            <Technology />
            <Financial />
            <Contact />
            <Footer />
        </React.Fragment>
    );
};

// Export the App component as default
export default App;
