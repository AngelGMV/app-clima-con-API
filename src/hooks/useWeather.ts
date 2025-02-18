import axios from "axios"
import { string, object, number, InferOutput, parse} from "valibot"
import { SearchType } from "../types"
import { useMemo, useState } from "react"


const WeatherSchema = object({
    name: string(),
    main: object({
        temp: number(),
        temp_max: number(),
        temp_min: number()
    })
})

const initialState = {
    name : '',
    main : {
        temp : 0,
        temp_max : 0,
        temp_min : 0
    }
}

export type WeatherSchema = InferOutput<typeof WeatherSchema>
export default function useWeather() {

    const [weather, setWeather] = useState<WeatherSchema>(initialState)
    const [notFound, setNotFound] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetchWeather = async (search: SearchType) => {
        const appID = import.meta.env.VITE_API_KEY
        setLoading(true)
        setWeather(initialState)
        try {
            const geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=
            ${search.city},${search.country}&appid=${appID}`

            const { data: coordinateResult } = await axios(geoURL)

            if(!coordinateResult[0]){
                setNotFound(true)
                return
            }

            const lat = coordinateResult[0].lat
            const lon = coordinateResult[0].lon

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`

            const { data: weatherResult } = await axios(weatherUrl)
            const result = parse(WeatherSchema, weatherResult) 
            if(result){
                setNotFound(false)
                setWeather(result)
            }
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    const hasWeatherData = useMemo(()=> weather.name, [weather])
    return {
        weather,
        notFound,
        loading,
        hasWeatherData,
        fetchWeather
    }
}