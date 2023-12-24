import React, { useState } from "react";
import "./Portfolio.scss";
import websiteImage from "../../assets/website_one.jpg";
import Layout from "../../Layout/Layout";

const Portfolio = () => {
  const projects = [
    { image: websiteImage, category: "Tech" },
    { image: websiteImage, category: "Business" },
    { image: websiteImage, category: "Apps" },
    { image: websiteImage, category: "Tech" },
    { image: websiteImage, category: "Apps" },
    { image: websiteImage, category: "Business" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const categories = ["All", "Tech", "Business", "Apps"];

  return (
    <Layout>
      <div className="wrapper">
        <div className="portfolio">
          <div className="container">
            <h2 className="portfolio_heading">Rest Works</h2>

            {/* Category menu */}
            <div className="categories">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "active" : ""}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="portfolio_contianer">
              {filteredProjects.map((project, index) => (
                <div className="portfolio_item" key={index}>
                  <div
                    className="project_background"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundPosition: `center`,
                      backgroundSize: `cover`,
                      backgroundRepeat: `no-repeat`,
                    }}
                  >
                    <div className="project_info">
                      <h3>{project.category}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
