import { useEffect, useState } from "react";
import "./styles.css";
import { getApi } from "../../apis/weather";

import Weather from "../../components/Weather";
const Welcome = () => {
  const [locationName, setLocationName] = useState("ho chi minh");
  const [weatherData, setWeatherData] = useState({});
  const [stop, setStop] = useState();

  const onChange = (e) => {
    const value = e.target.value;
    setLocationName(value);
  };

  useEffect(() => {
    // setStop(true)
    data();
  }, [locationName]);

  const data = async () => {
    const res = await getApi(locationName);
    setWeatherData(res.data);    
  };
  console.log(weatherData);  

  return (
    <section className="section">
      <select className="form-select" value={locationName} onChange={onChange}>
        <option value="ho chi minh">Ho Chi Minh</option>
        <option value="ha noi">Ha Noi</option>
        <option value="da nang">Da Nang</option>
      </select>
      {weatherData.name && (
        <Weather weatherData={weatherData} />
      )}
    </section>
  );
};

export default Welcome;
