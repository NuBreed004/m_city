import React from 'react';
import { Tag } from '../../UI/misc';


const MatchesHome = () => (
  <div className="home_matches_wrapper">
    <div className="container">
      <Tag
        bck="#031731"
        size="50px"
        color="#fff"
      >
        Matches
      </Tag>
      BLOCK
      <Tag
        bck="#fff"
        size="22px"
        color="#0e1731"
        link={true}
        linkto="/the_team"
      >
        See more Matches
      </Tag>

    </div>
  </div>
);

export default MatchesHome;
