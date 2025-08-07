import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className= "welcome-weather">
                <h2 className="welcome-text">Hoş Geldin, Melike!</h2>
                <p className="weather-text">Bugünkü hava: 28°C, Güneşli</p>
            </div>

            <div className="style-selection">
                <h3>Bugün ne tarz giyinmek istersin?</h3>

            </div>
        </div>
    );
};

export default Home;