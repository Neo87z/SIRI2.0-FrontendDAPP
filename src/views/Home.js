import React from 'react';
import HeroFull from '../components/sections/HeroFull';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Pricing from '../components/sections/Pricing';
import Testimonial from '../components/sections/TestimonialCarousel';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull  />
       
        <FeaturesSplit invertMobile topDivider imageFill />
        <Pricing  topDivider pricingSlider />
   
      </React.Fragment>
    );
  }
}

export default Home;