import { useState } from 'react';
// import './index.css'; // Ensure Tailwind CSS is imported correctly

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div 
    style={{
      width : "100vw",
      height : "100vh", 
      border : "2px solid white",
      background : color
    }}
    >
      <div className="bg-white text-black fixed py-2 rounded-3xl flex justify-center gap-3 bottom-12 inset-x-0 flex-wrap">
        <button className="rounded-full w-32 bg-red-500" onClick={() => setColor("red")}>Red</button>
        <button className="rounded-full w-32 bg-green-500" onClick={() => setColor("green")}>Green</button>
        <button className="rounded-full w-32 bg-blue-500" onClick={() => setColor("blue")}>Blue</button>
        <button className="rounded-full w-32 bg-yellow-500" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="rounded-full w-32 bg-gray-700" onClick={() => setColor("gray")}>Gray</button>
        <button className="rounded-full w-32 bg-pink-500" onClick={() => setColor("pink")}>Pink</button>
        <button className="rounded-full w-32 text-black" style={{ backgroundColor: "lavender" }} onClick={() => setColor("lavender")}>Lavender</button>
        <button className="rounded-full w-32 bg-white text-black" onClick={() => setColor("white")}>White</button>
        <button className="rounded-full w-32 bg-black text-white" onClick={() => setColor("black")}>Black</button>
        <button className="rounded-full w-32 text-black" style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>Olive</button>
      </div>
    </div>
  );
}

export default App;
