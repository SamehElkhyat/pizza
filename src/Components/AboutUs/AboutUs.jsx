import React from 'react';
import './AboutUs.css';
const AboutUs = () => {

  return (
    <div className="animated-background">

    <div className="container AboutUsSection" style={{ paddingTop: '100px' }}>
    <h2 className="text-center my-4">About Us</h2>
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <div className="text-center mb-4">
          <h3>Eng. Sameh Elkhyat</h3>
          <p className="text-muted">Founder & Pizza Enthusiast</p>
        </div>
        <p>
          Welcome to our artisanal pizza paradise! I'm Eng. Sameh Elkhyat, and I'm passionate about creating 
          the perfect pizza experience for our valued customers. Our journey began with a simple vision: 
          to serve authentic, high-quality pizzas that combine traditional techniques with innovative flavors.
        </p>
        <p>
          At our pizzeria, we pride ourselves on using only the finest ingredients, from our hand-kneaded 
          dough to our carefully selected toppings. Each pizza is crafted with attention to detail and 
          baked to perfection in our specially designed ovens.
        </p>
        <p>
          Our commitment goes beyond just making great pizza - we're dedicated to creating a welcoming 
          atmosphere where families and friends can gather to enjoy delicious food and create lasting memories.
        </p>
      </div>
    </div>
  </div>
  </div>

  );
};

export default AboutUs; 