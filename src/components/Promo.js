import React from 'react';
import PromoHeading from './PromoHeading';

const data = {
  heading: "Welcome to Design Foundations",
  description: "Strong guidelines for UI lead to better apps"
};

function Promo() {
  return (
    <div className="promo">
      <PromoHeading heading={data.heading} description={data.description} />
    </div>
  );
}

export default Promo;
