import React from 'react';

const GalleryDetails = (props) => {
    console.log(props);
    const { img } = props.gallery;
    return (
        <div className="">
            <div>
                <img src={img} className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default GalleryDetails;