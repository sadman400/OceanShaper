import React from 'react'
import digital from '../../assets/digital.png';
import './Header.scss';
import Layout from '../../Layout/Layout';

const Header = () => {
  return (
    // this is wrapper 
    <Layout>

      <div className='wrapper'>
        <div className='header'>
          <div className='container'>

            {/* this main header  */}
            <div className="main_header">

              {/* this is left header  */}
              <div className="left_header">
                <h2>Award Winning</h2>
                <h1>Digital Marketing Company</h1>
                <button>Read More</button>
              </div>

              {/* this is right header  */}
              <div className="right_header">
                <div className="right_image">
                  <img src={digital} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Header