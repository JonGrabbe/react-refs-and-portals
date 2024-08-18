import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef()
  const [enteredPlayerName, setInteredPlayerName] = useState(null)

  function handleClick() {
    setInteredPlayerName(playerName.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : ' unknown entity'} </h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}