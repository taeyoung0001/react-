import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import Concepts from "./components/Concepts";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(name) {
    setSelectedTopic(name);
    setActive(true);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>

      <section id="core-concepts">
        <h2>concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((list, index) => (
            <Concepts key={index} {...list} />
          ))}
        </ul>
      </section>

      <section id="examples">
        <h2>Example</h2>
        <menu>
          {/* () => handleSelect 를 사용하면 실행하지 않고 참조만 함 */}
          {/* 인자가 있을 때 사용해야함 */}
          <TabButton
            isSelected={selectedTopic === "components"}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onSelect={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>

        {!selectedTopic ? (
          <p className="none-topic">select a topic</p>
        ) : (
          <div id="tab-content">
            <h2>{EXAMPLES[selectedTopic].title}</h2>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>{EXAMPLES[selectedTopic].code}</pre>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
