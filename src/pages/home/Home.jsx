import React, { useEffect, useRef, useState } from 'react';
import DanceTypes from "../../components/danceTypes/DanceTypes"
import danceTypes from '../../data/danceTypes';
import horario from "../../assets/schedules/HORARIO.jpg";
import "./Home.css";
import { data } from '../../data/data';


export const Home = () => {
  const listRef = useRef();
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    const listNote = listRef.current;
    const imgNode = listNote.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [currentIndex])

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setcurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setcurrentIndex(curr => curr + 1);
      }
    }
  }

  const goToSlide= (slideIndex) => {
    setcurrentIndex(slideIndex);
  }
  return (
    <>
      <div className="home">
        {danceTypes.map((danceType, index) => (
          <DanceTypes key={index} arrayPhoto={danceType} />
        ))}
      </div>

      <div className="schedule">
        <h1>Nuestros Horarios</h1>
        <img src={horario} alt="Description" className="img-schedule" />
      </div>

      <div className="slider-main-container">
        <h1>Nuestras Instalaciones</h1>
        <div className="slider-container">
          <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10096;</div>
          <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10097;</div>
          <div className="slider-container-images">
            <ul ref={listRef}>
            <li key={data[currentIndex].id}>
                <img src={data[currentIndex].imgUrl} width={500} height={280} />
              </li>
            </ul>
          </div>

          <div className="buttons-container">
            {
              data.map((_, idx) => (
                <div key={idx} className={`buttons-container-item ${idx === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(idx)}> 
                  &#9865;
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;