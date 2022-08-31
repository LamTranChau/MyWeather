import { useEffect, useState } from 'react'
import './styles.css'
import {getApi} from '../../apis/weather'

import Weather from '../../components/Weather'
const Welcome = () => {
  const [locationName, setLocationName] = useState('ho chi minh')
  const [weatherData, setWeatherData] = useState({})

  const onChange = e => {
    const value = e.target.value
    setLocationName(value)
  }

  useEffect(()=>{
    getApi(locationName)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("loi rooi thag ");
      });
  },[])

  console.log(weatherData);


  return (
    <section className='section'>
      <select className='form-select' value={locationName} onChange={onChange}>
        <option value='ho chi minh'>Ho Chi Minh</option>
        <option value='ha noi'>Ha Noi</option>
        <option value='da nang'>Da Nang</option>
      </select>
      <Weather weatherData={weatherData}/>
    </section>
  )
}

export default Welcome
