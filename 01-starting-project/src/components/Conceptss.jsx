import Concepts from "./Concepts";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

const Conceptss = () => {
  return (
    <Section title={"concepts"} id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((list, index) => (
          <Concepts key={index} {...list} />
        ))}
      </ul>
    </Section>
  );
};

export default Conceptss;
