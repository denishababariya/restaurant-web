import React from 'react';
import { Button } from 'react-bootstrap';
import { FaBook } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div className="hero-section" style={{ backgroundImage: 'url(/assets/restaurant-hero.jpg)', height: '500px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div>
                <h1>Welcome to Our Restaurant</h1>
                <p>Your culinary journey begins here.</p>
                <Button variant="primary" href="/reservation">
                    <FaBook /> Book a Table
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;
