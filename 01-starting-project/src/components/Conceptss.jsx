import Concepts from "./Concepts";
import { CORE_CONCEPTS } from "../data";

const Conceptss = () => {
  return (
    <section id="core-concepts">
      <h2>concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((list, index) => (
          <Concepts key={index} {...list} />
        ))}
      </ul>
    </section>
  );
};

export default Conceptss;
