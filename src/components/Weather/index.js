import { useMemo } from 'react'
import './styles.css'

const Weather = ({weatherData}) => {
  // tim trong du lieu tra ve icon 
  const src = useMemo(() => {
    return `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
  }, [weatherData])

  return (
    <div className='weather'>
      <div className='general'>
        <div className='location'>{weatherData.name}</div>
        <div>{weatherData.weather[0].description}</div>
        <img src={src} alt={src} />
        <div className='temperature'>{weatherData.main.temp}<sup>o</sup></div>
      </div>

      <div className='row'>
        <div className='col-xl-6'>
          <div className='detail'>
            <h6 className='label'>temperature min</h6>
            <div className='value'>{weatherData.main.temp_min}<sup>o</sup></div>
          </div>
          <div className='detail'>
            <h6 className='label'>temperature max</h6>
            <div className='value'>{weatherData.main.temp_max}<sup>o</sup></div>
          </div>
          <div className='detail'>
            <h6 className='label'>Visibility</h6>
            <div className='value'>{weatherData.visibility}</div>
          </div>
        </div>
        <div className='col-xl-6'>
          <div className='detail'>
            <h6 className='label'>pressure</h6>
            <div className='value'>{weatherData.main.pressure}</div>
          </div>
          <div className='detail'>
            <h6 className='label'>humidity</h6>
            <div className='value'>{weatherData.main.humidity}</div>
          </div>
          <div className='detail'>
            <h6 className='label'>Wind speed</h6>
            <div className='value'>{weatherData.wind.speed}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
