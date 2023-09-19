import { useStorage } from "@vueuse/core"

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY
const location = useStorage('location', '')
const weatherApi = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${location.value}`

export default weatherApi
