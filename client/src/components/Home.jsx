import React from 'react';
import About from './About';
import Contact from './Contact';
const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center">Feels the fresh Business Perspective
              <p className='lead text-center fs-4 mb-5'>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              Vestibulum tortor quam, feugiat vitae, 
              ultricies eget, tempor sit amet, ante.
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className='btn btn-light me-4 rounded-pill px-4 py-2'>Get quote</button>
                <button className='btn btn-light me-4 rounded-pill px-4 py-2'>our services</button>
              </div>

              </h1>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Contact />
    
      
    </div>
  );
}

export default Home;
