import { useState } from "react";
import TabButton from './TabButton';
import TopicsDescription from './TopicsDescription';
import { EXAMPLES } from '../data';
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState();

    function handleClick(selectedButton){
        setSelectedTopic(selectedButton);
      }
    
      let tabTopicContent = <p>Please select a topic!</p>;
    
      if(selectedTopic) {
        tabTopicContent = <TopicsDescription {...EXAMPLES[selectedTopic]} />;
      }

    return (
        <Section id='examples'>
          <h2>Example</h2>
          <Tabs buttons={<>
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
            </>}>
            {tabTopicContent}
          </Tabs>
        </Section>
    );
}