import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import './Feedback.scss'

const Feedback = () => {
    const feedbackData = [
      { id: 1, text: '"I had an excellent experience with Mohd Sadman on a website development project via Upwork. His professionalism, prompt communication, and technical expertise stood out. Sadman skillfully transformed my ideas into a functional and visually appealing website, demonstrating great attention to detail and receptiveness to feedback. I highly recommend Sadman for his outstanding work ethic, skill set, and commitment to client satisfaction in web development."', stars: 5 },

      { id: 2, text: 'Client feedback 2"Sadman has been an invaluable asset to our team; his exceptional back-end development skills and commitment have significantly contributed to our projects. 5 stars well-deserved!"', stars: 5 },

      { id: 3, text: '"Sadmans expertise was crucial in the successful launch of the new FloorPrepping.com website. A 5-star rating for his dedication and excellent back-end development work!"', stars: 5 },
      
      { id: 4, text: '"Sadman adeptly resolved issues on our website created through Gutenberg, showcasing his problem-solving skills"', stars: 5 },

      { id: 5, text: '"Good work again"', stars: 5 },

      { id: 6, text: '"Sadman was great to work with, very professional!"', stars: 5 }
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <div className="wrapper">
        <div className="feedback">
          <div className="container">
            <h2 className="feedback_heading">Our Client Feedback</h2>
  
            <Slider {...settings}>
              {feedbackData.map((item) => (
                <div className="feedbackBox">
                    <div key={item.id} className="feedback_item">
                  <p>{item.text}</p>
                  <div className="star-rating">
                    {[...Array(item.stars)].map((star, index) => (
                      <FaStar key={index} color="#FFD700" />
                    ))}
                  </div>
                </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  };
  
  export default Feedback;