import { animals } from './animals';
import ReactDOM from 'react-dom';
import React from 'react';

const title = '';
const images = [];

const displayFact = (e) => {
  
  const aniName = e.target.alt;
  const choosenAnimal = animals[aniName];
  const aniIndex = Math.floor(Math.random()*choosenAnimal.facts.length);
  const funFact =  choosenAnimal.facts[aniIndex];


  document.getElementById('fact').innerHTML = funFact;
  
};

for (const animal in animals){
  images.push(<img onClick={displayFact} key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button'/>)
};


const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a  fun fact' : title}</h1>
  {background}
  <div className='animals'> 
    {images}
  </div>
  <p id='fact'></p>
  </div>
);

const background = (
  <img 
  class='background' 
  alt='ocean' 
  src='/images/ocean.jpg' 
  />
);

ReactDOM.render(
  animalFacts,
  document.getElementById('root')
);