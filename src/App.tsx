import styles from './App.module.css'
import Alert from './components/Alert/Alert'
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner'
import WeatherDateil from './components/weatherDetail/WeatherDateil'
import useWeather from './hooks/useWeather'

function App() {
  const { weather, loading, hasWeatherData, fetchWeather } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Consulta el clima</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading ? (
          <Spinner/>
        ) : hasWeatherData ? (
          <WeatherDateil weather={weather} />
        ) : (
          <Alert>{"Ingresa los datos para empezar a buscar"}</Alert>
        )}
      </div>
    </>
  )
}

export default App
