
import reactImg from './assets/react-core-concepts.png';

import './App.css'
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

const dynamicContent = ['Fundamental', 'Crucial', 'Core'];

function getRandomIndex(max){
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const dynamicText = dynamicContent[getRandomIndex(2)];

  return (
    <>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {dynamicText} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  )
}

export default App
