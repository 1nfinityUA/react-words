import React from 'react';
import './home.css';
import { useSelector } from 'react-redux';

const Home = () => {
    const words = useSelector(state => state.addSlice.words);
  return (
    <div className='home'>{words.map((el, index) => <div key={index} className='home__words'><p>{el}</p></div>)}
    </div>
  )
}

export default Home