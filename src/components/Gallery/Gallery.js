import React, { useEffect, useState } from 'react';
import TypewriterComponent from 'typewriter-effect';
import GalleryDetails from '../GalleryDetails/GalleryDetails';
import './Gallery.css';

const Gallery = () => {
    const [gallerys, setGallerys] = useState([]);

    useEffect(() => {
        fetch('./gallery.json')
            .then(res => res.json())
            .then(data => setGallerys(data))
    }, [])
    return (
        <div>
            <div className="banner fw-bolder fs-1 text-light">
                <TypewriterComponent
                    options={{
                        strings: ['“THE BODY ACHIEVES WHAT THE MIND BELIEVES.”'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className="container">
                <div className="text-center mt-5">
                    <h1>Workout Gallery</h1>
                    <span className="text-muted">Frameworks to provide a robust synopsis to reduce alliment.</span>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4 mt-5">
                    {
                        gallerys.map(gallery => <GalleryDetails
                            key={gallery._id}
                            gallery={gallery}
                        ></GalleryDetails>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Gallery;