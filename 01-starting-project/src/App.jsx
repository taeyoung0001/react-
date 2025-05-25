import Header from "./components/Header/Header";

import Conceptss from "./components/Conceptss";
import Exampless from "./components/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>

      {/* 컴포넌트 분리로 리랜더링 막기 */}
      <Conceptss />
      <Exampless />
    </div>
  );
}

export default App;
