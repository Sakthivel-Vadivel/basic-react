import version from "../package.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Main page</p>
      <p>
        The version of this<strong> {version.name} </strong>app is{" "}
        <strong>{version.version}</strong>
      </p>
      <p> added the login feature</p>
    </div>
  );
}

export default App;
