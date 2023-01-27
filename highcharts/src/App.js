import "./App.css";
import Diagram from "./Diagram/Diagram";
import Sankey from "./Sankey/Sankey";

const App = () => {
  return (
    <div className="app">
      <Diagram />
      <div style={{marginBottom: 50}} />
      <Sankey />
    </div>
  );
};

export default App;
