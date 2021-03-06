import React from 'react';
import CityLogo from '../UI/icons'

const Footer = (props) => (
  <footer className="bck_blue">
    <div className="footer_logo">
      <CityLogo
            link={true}
            linkTo="/"
            width="70px"
            height="70px"
        ></CityLogo>
        <div className="footer_discl">
          Manchester city 2018. All rights reserved
        </div>
    </div>
  </footer>
);

export default Footer;
