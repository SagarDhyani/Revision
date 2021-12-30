import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';

import countryData from "./data.json"

function App() {
  return (
    <div className="App1">

      <SearchBar placeholder ="Search country..." data = {countryData}  />

      
     
    </div>
  );
}

export default App;
