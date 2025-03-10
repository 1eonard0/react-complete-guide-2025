import { useState } from 'react';
import reactImg from './assets/react-core-concepts.png';
import CoreConcept from './components/CoreConcepts';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import './App.css'
import TabButton from './components/TabButton';
import TopicsDescription from './components/TopicsDescription';

const dynamicContent = ['Fundamental', 'Crucial', 'Core'];

function getRandomIndex(max){
  return Math.floor(Math.random() * (max + 1));
}

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState();
  const dynamicText = dynamicContent[getRandomIndex(2)];

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
  }

  let tabTopicContent = <p>Please select a topic!</p>;

  if(selectedTopic) {
    tabTopicContent = <TopicsDescription {...EXAMPLES[selectedTopic]} />;
  }

  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {dynamicText} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}/>))};
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {tabTopicContent}
        </section>
      </main>
    </div>
  )
}

export default App
