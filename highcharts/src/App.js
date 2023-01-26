import './App.css';
import Diagram from './Diagram/Diagram';
import Sankey from './Sankey/Sankey';


const App = () => {
  return (
    <div className="app">
      <Diagram />
      <Sankey />
    </div>
  );
}

export default App;
