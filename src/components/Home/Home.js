import React from 'react';
import './Home.css';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Trainers from './Trainers/Trainers';
import img from '../../images/Customaer/split-blog.jpg';

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
                            <h2>Good ex............</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus architecto eligendi ea consequatur quia doloribus culpa quidem voluptatibus assumenda nam voluptate id et necessitatibus voluptatem dignissimos dolore impedit cum eaque esse, expedita veniam unde deserunt. Laboriosam architecto quisquam officia deserunt, sed perferendis modi. Dolore optio expedita voluptatum ad nemo qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat recusandae libero ex officiis dicta! Vel repellat cupiditate, libero nemo consequatur culpa sapiente dignissimos optio neque esse veniam iste odit asperiores eum obcaecati? Voluptas iste, nihil odit error modi incidunt?</p>
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