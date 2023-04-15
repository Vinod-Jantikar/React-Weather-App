import { useState } from "react";
import { WeatherCard } from "../weatherCard/WeatherCard";
import { useDispatch } from "react-redux";
import "./Home.css";
import { getData } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [city, setCity] = useState("");
  const [apiData, setApiData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const getCity = (e) => {
    e.preventDefault();
    try {
      const api = `dacec7ae5642225a1818934b82c92030`;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(getData(data));
          setApiData({ ...data });
          navigate("/weather-information")
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home_div">
      <h1>Weather app</h1>
      <form onSubmit={getCity}>
        <input
          className="form_box_input"
          type="text"
          onChange={handleChange}
          placeholder="Enter city"
        />
        <input className="form_box_btn" type="submit" value="submit" />
      </form>
    </div>
  );
};
