import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

const Exampless = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(name) {
    setSelectedTopic(name);
  }

  console.log(selectedTopic);

  return (
    <Section title={"Example"} id="examples">
      {/* 재사용성을 위해서 컴포넌트로 아래와 같은 식으로 뺄 수 도 있다. */}
      <Tabs
        button={
          <>
            {/* () => handleSelect 를 사용하면 실행하지 않고 참조만 함 */}
            {/* 인자가 있을 때 사용해야함 */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
};

export default Exampless;
