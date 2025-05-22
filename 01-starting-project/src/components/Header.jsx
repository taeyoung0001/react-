import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const newDescription =
  reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

export default function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {newDescription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
