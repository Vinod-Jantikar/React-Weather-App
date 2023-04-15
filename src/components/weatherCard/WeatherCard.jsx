import "./WeatherCard.css";
import { MdLocationOn } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const WeatherCard = ({ cityData }) => {
  const {data} = useSelector((item) => item.data);
  const navigate = useNavigate()

  console.log(data)
  const getIcon = (weather) => {
    return weather === "Rain"
      ? "./assets/rain.png"
      : weather === "Clear"
      ? "./assets.sunny.png"
      : "./assets/cloudy.png";
  };

  const backToHome = () => {
    navigate("/")
  }

  if (!data?.weather) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="weather_card">
      <button onClick={backToHome}>Back</button>
      <div className="weather_icon_box">
        <h3>{data?.weather[0]?.main}</h3>
        <img
          style={{ width: "70px" }}
          src={getIcon(data?.weather[0]?.main)}
          alt="weather icon"
        />
      </div>
      <div>
        <h5>{data?.weather[0]?.description}</h5>
        <h5>
          <MdLocationOn />
          {data?.sys?.country},{data?.name}
        </h5>
      </div>

      <div className="weather_icon_box">
        <h3 className="temperature_heading">
          <CiTempHigh /> Temperature: {Math.round(data?.main?.temp - 273)}{" "}
          °c{" "}
        </h3>
        <h3 className="temperature_heading">
          <WiHumidity /> Humidity: {data?.main?.humidity}
        </h3>
      </div>
    </div>
  );
};
