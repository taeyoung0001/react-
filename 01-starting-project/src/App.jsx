import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import Concepts from "./components/Concepts";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>

      <h2>concepts</h2>
      <section id="core-concepts">
        <Concepts {...CORE_CONCEPTS[0]} />
        <Concepts {...CORE_CONCEPTS[1]} />
        <Concepts {...CORE_CONCEPTS[2]} />
        <Concepts {...CORE_CONCEPTS[3]} />
      </section>
    </div>
  );
}

export default App;
