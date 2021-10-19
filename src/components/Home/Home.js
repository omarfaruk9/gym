import React from 'react';
import './Home.css';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Trainers from './Trainers/Trainers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <div className="container testimonal mt-5">
                <div className="text-center mt-3">
                    <span className="fw-bolder text-muted">Testimonal</span>
                    <h2 className="fw-bolder text-muted">Special Care</h2>
                </div>
                <div className="rap d-flex align-items-center">
                    <div className="row row-cols-lg-2">
                        <div className="testimonal-text mt-5">
                            <h2>A 5-Minute Low-Impact Lower Body Pilates Workout</h2>
                            <p>
                                Strengthening the glutes and other lower body muscles (hello, hamstrings!) will improve mobility, help your posture, and even relieve some tension in the lower back. Sweat instructor Sara Colquhoun created this quick Pilates workout for you to do anywhere, anytime.

                                “This low-impact mat workout has a lower body focus that will help to strengthen and tone your glutes and hamstrings in three key positions,” Colquhoun says. It’s suitable for people of all fitness levels. Plus, you don’t need any equipment (though if you have a yoga mat or towel, use it to cushion against the floor).

                                Try it now.
                            </p>
                        </div>
                        <div className="div">
                            <div className="testimonal-img mt-5">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Trainers />
        </div>
    );
};

export default Home;