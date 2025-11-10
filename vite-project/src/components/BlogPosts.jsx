import React from 'react';
import '../styles/BlogPosts.css';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

// Placeholder Images - Replace with your actual blog post images
import blogImg1 from '../images/blog1.jpg';
import blogImg2 from '../images/blog2.jpg';
import blogImg3 from '../images/blog3.jpg';

const blogPostsData = [
  {
    id: 1,
    category: 'FOOD CROPS',
    image: blogImg1,
    date: 'MARCH 28, 2024',
    author: 'ADMIN',
    title: 'What technology is used in vertical farming?',
  },
  {
    id: 2,
    category: 'ORGANIC FARM',
    image: blogImg2,
    date: 'MARCH 28, 2024',
    author: 'ADMIN',
    title: 'Which type of farming is more prevalent today?',
  },
  {
    id: 3,
    category: 'FARMING TIPS',
    image: blogImg3,
    date: 'MARCH 28, 2024',
    author: 'ADMIN',
    title: 'The Farmers Sentiment Darkens Hopes Fade',
  },
];

const BlogPosts = () => {
  return (
    <section className="blog-post-section">
      <div className="container py-5">
        
        {/* Blog Section Header */}
        <div className="blog-post-header-row">
          <div className="blog-post-title-group">
            <p className="blog-post-subtitle">Latest Blog</p>
            <h2 className="blog-post-main-title">Latest posts & articles</h2>
          </div>
          <div className="blog-post-navigation">
            <button className="blog-post-nav-btn blog-post-nav-left">
              &lt;
            </button>
            <button className="blog-post-nav-btn blog-post-nav-right">
              &gt;
            </button>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="row mt-5">
          {blogPostsData.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6 mb-4">
              <div className="blog-post-card">
                <div className="blog-post-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-post-img" />
                  <span className="blog-post-category">{post.category}</span>
                  <a href={`/blog/${post.id}`} className="blog-post-read-more-btn">
                    <FaArrowRight />
                  </a>
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-meta">
                    <span className="blog-post-date">
                      <FaCalendarAlt /> {post.date}
                    </span>
                    <span className="blog-post-author">
                      <FaUser /> {post.author}
                    </span>
                  </div>
                  <h3 className="blog-post-card-title">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;