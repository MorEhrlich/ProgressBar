
import './App.css';
import ProgressBar from './ProgressBar';

function App() {
  const startDate = '2024-07-03'; // Replace with your start date
  const endDate = '2025-01-19'; // Replace with your end date
  return (
    <div className="App">
    <h1>Progress Bar - my Invisalign Treatment</h1>
    <ProgressBar startDate={startDate} endDate={endDate} />
  </div>
  );
}

export default App;
