import React from 'react';
import partner1 from '../assets/img/partner/1.png';
import partner2 from '../assets/img/partner/2.png';
import partner3 from '../assets/img/partner/3.png';
import partner4 from '../assets/img/partner/4.png';
import partner5 from '../assets/img/partner/5.png';

const Partners = () => {
  return (
    <div className="position-relative pt-9 pt-lg-8 pb-6 pb-lg-8">
      <div className="container">
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2 flex-center">
          <div className="col">
            <div className="card shadow-hover mb-4" style={{ borderRadius: '10px' }}>
              <div className="card-body text-center">
                <img className="img-fluid" src={partner1} alt="Partner" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-hover mb-4" style={{ borderRadius: '10px' }}>
              <div className="card-body text-center">
                <img className="img-fluid" src={partner2} alt="Partner" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-hover mb-4" style={{ borderRadius: '10px' }}>
              <div className="card-body text-center">
                <img className="img-fluid" src={partner3} alt="Partner" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-hover mb-4" style={{ borderRadius: '10px' }}>
              <div className="card-body text-center">
                <img className="img-fluid" src={partner4} alt="Partner" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-hover mb-4" style={{ borderRadius: '10px' }}>
              <div className="card-body text-center">
                <img className="img-fluid" src={partner5} alt="Partner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
