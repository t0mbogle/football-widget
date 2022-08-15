import './App.css';
import Overview from './components/Overview';
import Selectors from './components/Selectors';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="app-wrapper">
      <Overview />
      <Selectors />
      <Statistics/>
    </div>
  );
}

export default App;
