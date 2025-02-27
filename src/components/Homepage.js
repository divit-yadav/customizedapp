import React from 'react';
import ReactPlayer from 'react-player/youtube';
import TogglerHeading from './TogglerHeading';
import ModeToggler from './ModeToggler';
import Promo from './Promo';
import Card from './Card';
import Btn from './Btn';
import RegisterForm from './RegisterForm';
import accessibilityImg from '../assets/accessibilityImg.jpg';
import interactionImg from '../assets/interactionImg.jpg';
import tokenImg from '../assets/tokenImg.jpg';

function Homepage() {
  const vidUrl = "https://www.youtube.com/watch?v=fURrvrmx8Xw&t=199s&ab_channel=DanMall";

  const [word, setWord] = React.useState('Dark Mode');

  function toggleMode() {
    setWord(prevMode => (prevMode === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'));
  }

  function numberGuess() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let userInput = prompt('Type a number'); 
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return (
    <div className="App">
      <div>
        <ReactPlayer 
          url={vidUrl} 
          playing={false}
          volume={0.5}
          controls={true}
        />
      </div>

      <h1>Foundations</h1>
      <Promo />

      <div className="cards-container">
        <Card imgSrc={accessibilityImg} h2="Accessibility" h3="Accessibility enables users to enjoy and navigate a UI" />
        <Card imgSrc={interactionImg} h2="Interaction States" h3="States are visual indicators to communicate the status of a component" />
        <Card imgSrc={tokenImg} h2="Design Tokens" h3="Tokens store values like colors and fonts to be re-used across platforms" />
      </div>

      <div>
        <Btn />
      </div>

      <h1>The Number Game</h1>
      <button onClick={numberGuess}> Guess the number between 1 and 3 </button>

      <h1>The Form</h1>
      <RegisterForm />
    </div>
  );
}

export default Homepage;
