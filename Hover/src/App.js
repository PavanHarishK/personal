import "./App.css";
function App() {
  const emojis = [
    {
      unicode: 0x1f600,
      id: "grinning",
    },
    {
      unicode: 0x1f601,
      id: "beaming",
    },
    {
      unicode: 0x1f6023,
      id: "face with tears of joy",
    },
  ];

  return (
    <div className="App">
      <h1>Hello</h1>
      {emojis.map((emoji, id) => (
        <p key={id}>{String.fromCharCode(emoji.unicode)}</p>
      ))}
    </div>
  );
}
export default App;
