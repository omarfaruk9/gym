import React, { useState } from 'react';
import './Trainers.css'
import ourTrainers from '../../../fakedata/tainer.json';
import TrainersDetails from '../TrainersDetails/TrainersDetails';

const Trainers = () => {
    const [trainers, setTrainere] = useState(ourTrainers);
    return (
        <div className="container trainer">
            <h1 className="mb-5 text-center fw-bolder">OUR EXPERIENCE <span className="text-success">TRAINER</span></h1>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                {
                    trainers.map(trainer => <TrainersDetails
                        key={trainer.id}
                        trainer={trainer}
                    ></TrainersDetails>)
                }
            </div>
        </div>
    );
};

export default Trainers;