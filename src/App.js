import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { WeatherCard } from "./components/weatherCard/WeatherCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/weather-information" element={<WeatherCard/>}/>
      </Routes>
    </div>
  );
}

export default App;
