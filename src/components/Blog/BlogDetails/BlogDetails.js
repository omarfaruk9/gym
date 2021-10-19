import React from 'react';
import './BlogDetails.css'

const BlogDetails = (props) => {
    // console.log(props);
    const { img, art, title, date } = props.blog;

    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-1 blog">
                <img src={img} className="img-fluid blog-img img-thumbnail" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-1">
                <span className="text-muted">{date}</span>
                <h3>{title}</h3>
                <p>{art}</p>
            </div>
        </>
    );
};

export default BlogDetails;