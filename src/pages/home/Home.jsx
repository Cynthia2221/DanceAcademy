import React from 'react';
import DanceTypes from "../../components/danceTypes/DanceTypes"
import danceTypes from '../../data/danceTypes';
import "./Home.css";


export const Home = () => {
  return (
    <div className="home">
      {danceTypes.map((danceType, index) => (
        <DanceTypes key={index} arrayPhoto={danceType} />
      ))}
    </div>
  );
};

export default Home;