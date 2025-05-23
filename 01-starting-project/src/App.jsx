import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import Concepts from "./components/Concepts";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("components");

  function handleSelect(name) {
    setSelected(name);
    console.log("name", name);
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
          <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
          <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
          <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
        </menu>

        {selected == "components" ? <p>component입니다</p> : null}
      </section>
    </div>
  );
}

export default App;
