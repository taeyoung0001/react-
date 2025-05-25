import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

const Exampless = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(name) {
    setSelectedTopic(name);
  }

  console.log(selectedTopic);

  return (
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
          {/* EXAMPLES는 객체로 되어있음, 배열로 되어있지않아서 아래와 같이 작성함 */}
          <h2>{EXAMPLES[selectedTopic].title}</h2>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>{EXAMPLES[selectedTopic].code}</pre>
        </div>
      )}
    </section>
  );
};

export default Exampless;
