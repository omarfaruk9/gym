import React, { useState } from 'react';
import './Blog.css';
import blogData from '../../fakedata/blog.json';
import BlogDetails from './BlogDetails/BlogDetails';

const Blog = () => {
    const [blogs, setBolos] = useState(blogData);
    return (
        <div className="container">
            <div className="text-center mt-5">
                <span className="fw-bolder">This is blog</span>
                <h1 className="fw-bolder text-success">RECENT BLOG</h1>
                <p className="mb-5 text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="row g-4">
                {
                    blogs.map(blog => <BlogDetails
                        key={blog._id}
                        blog={blog}
                    ></BlogDetails>)
                }

            </div>
        </div>
    );
};

export default Blog;