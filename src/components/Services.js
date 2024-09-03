import React from 'react';
import serviceIcon1 from '../assets/img/category/icon1.png';
import serviceIcon2 from '../assets/img/category/icon2.png';
import serviceIcon3 from '../assets/img/category/icon3.png';
import serviceIcon4 from '../assets/img/category/icon4.png';
import shape from '../assets/img/category/shape.svg';

const Services = () => {
  return (
    <section className="pt-5 pt-md-9" id="service">
      <div className="container">
        <div className="position-absolute z-index--1 end-0 d-none d-lg-block">
          <img src={shape} style={{ maxWidth: '200px' }} alt="service" />
        </div>
        <div className="mb-7 text-center">
          <h5 className="text-secondary">CATEGORY</h5>
          <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">We Offer Best Services</h3>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6 mb-6">
            <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
              <div className="card-body p-xxl-5 p-4">
                <img src={serviceIcon1} width="75" alt="Service" />
                <h4 className="mb-3">Calculated Weather</h4>
                <p className="mb-0 fw-medium">Built Wicket longer admire do barton vanity itself do in it.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-6">
            <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
              <div className="card-body p-xxl-5 p-4">
                <img src={serviceIcon2} width="75" alt="Service" />
                <h4 className="mb-3">Best Flights</h4>
                <p className="mb-0 fw-medium">Engrossed listening. Park gate sell they west hard for the.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-6">
            <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
              <div className="card-body p-xxl-5 p-4">
                <img src={serviceIcon3} width="75" alt="Service" />
                <h4 className="mb-3">Local Events</h4>
                <p className="mb-0 fw-medium">Barton vanity itself do in it. Preferred to men it engrossed listening.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-6">
            <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
              <div className="card-body p-xxl-5 p-4">
                <img src={serviceIcon4} width="75" alt="Service" />
                <h4 className="mb-3">Customization</h4>
                <p className="mb-0 fw-medium">We deliver outsourced aviation services for military customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
