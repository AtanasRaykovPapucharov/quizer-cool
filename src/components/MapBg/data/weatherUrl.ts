const API_KEY = 'd7015c6ec2c19b2a91171f1cf17c8789'

export const WeatherUrl = (lat: number, lon: number) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
}
