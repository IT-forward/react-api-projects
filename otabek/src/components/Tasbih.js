import React, { useState } from "react";

export default function Tasbih(props) {
  const [subhanallah, setSubhanallah] = useState(0);
  const [alhamdulillah, setAlhamdulillah] = useState(0);
  const [allohuakbar, setAllohuakbar] = useState(0);

  const handleSubhanallah = () => {
    if (subhanallah < 33) {
      setSubhanallah(subhanallah + 1);
    }
  };
  const handleAlhamdulillah = () => {
    if (alhamdulillah < 33) {
      setAlhamdulillah(alhamdulillah + 1);
    }
  };
  const handleAllohuakbar = () => {
    if (allohuakbar < 33) {
      setAllohuakbar(allohuakbar + 1);
    }
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <div style={{ border: "1px solid black", margin: "10px" }}>
        {subhanallah}
        <br></br>
        <button onClick={handleSubhanallah}>Subhanallah</button>
      </div>
      <div style={{ border: "1px solid black", margin: "10px" }}>
        {alhamdulillah}
        <br></br>
        <button onClick={handleAlhamdulillah}>Alhamdulillah</button>
      </div>
      <div style={{ border: "1px solid black", margin: "10px" }}>
        {allohuakbar}
        <br></br>
        <button onClick={handleAllohuakbar}>Allohu Akbar</button>
      </div>
    </div>
  );
}
