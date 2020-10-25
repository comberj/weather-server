const fetch = require('node-fetch');
import 'dotenv/config'

export class WeatherService {
    private constructUrl = (api:string, city:string):string => {
        const apiKey = process.env.WEATHER_KEY

        return `http://api.openweathermap.org/data/2.5/${api}?q=${city}&appid=${apiKey}&units=metric`
    }

    private makeRequest = async (url:string) => {
        return fetch(url)
            .then( res => res.json() )
            .then( body =>  {
            return {
                statusCode: 200,
                headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                },
                body: JSON.stringify({ body })
            };
        });
    }

    public get = (city: string) => {
        return this.makeRequest(this.constructUrl('weather', city))
    }

    public getForecast = (city: string) => {
        return this.makeRequest(this.constructUrl('forecast', city))
    }
}