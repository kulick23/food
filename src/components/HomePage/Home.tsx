import React from 'react';
import './Home.css';
import HomeImg from '../../images/home.png';

const Home: React.FC = () => {
    return (
        <div className='home'>
            <div className='home__desc'>
                <h1>Beautiful food & takeaway, <span className='home__color'>delivered</span> to your door.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                <button>Place an order</button>
                <div className='home__desc--trustpilot'>
                    <b><span className='star'>★</span>Trustpilot</b>
                    <p><span className='home__color'>4.8 out of 5</span> based on 2000+ reviews</p>
                </div>
            </div>
            <img className='home__picture' src={HomeImg} alt="Delicious food"/>
        </div>
    );
}

export default Home;
