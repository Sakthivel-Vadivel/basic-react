import version from "../package.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        The version of this<strong> {version.name} </strong>app is{" "}
        <strong>{version.version}</strong>
      </p>
    </div>
  );
}

export default App;
