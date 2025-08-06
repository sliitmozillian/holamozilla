import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ff9800 0%, #ff5722 100%)",
      }}
    >
      <h1
        style={{
          color: "#fff3e0",
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(255,87,34,0.3)",
          margin: 0,
          letterSpacing: "2px",
        }}
      >
        Coming Soon
      </h1>
    </div>
  );
}

export default App;
