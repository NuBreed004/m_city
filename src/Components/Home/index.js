import React from 'react';
import Featured from './Featured';
import Matches from './Matches';
import MeetPlayers from './MeetPLayers';
import Promotion from '../Promotion';

const Home = () => (
  <div className="bck_blue">
    <Featured />
    <Matches />
    <MeetPlayers />
    <Promotion />
  </div>
);

export default Home;
