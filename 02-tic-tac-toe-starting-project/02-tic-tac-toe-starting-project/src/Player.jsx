import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    // isEditing 을 사용하지 않는 이유는 , 이전 상태를 정확하게 기반으로 새 상태를 계산하기 위해서
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
