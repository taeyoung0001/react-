import "./Concepts.css";

export default function Concepts(props) {
  const { image, title, description } = props;
  return (
    <ul>
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </ul>
  );
}
