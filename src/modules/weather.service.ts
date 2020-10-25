const fetch = require('node-fetch');
import 'dotenv/config';
import { Request } from 'node-fetch';

export class WeatherService {
  /**
   * @param api - the API you are querying from openWeatherMap
   * @param city - the city passed through queryParams
   * @returns a constructed url
   */
  private constructUrl = (api: string, city: string): string => {
    const apiKey = process.env.WEATHER_KEY;

    return `http://api.openweathermap.org/data/2.5/${api}?q=${city}&appid=${apiKey}&units=metric`;
  };

  private makeRequest = async (url: string): Promise<Request> => {
    return fetch(url)
      .then(res => res.json())
      .then(body => {
        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
          body: JSON.stringify({ body }),
        };
      })
      .catch(error => {
        console.log(error);
      });
  };

  /** Queries the weather API - returning the current weather for a given city
   * @param city - the city passed through pathParams
   * @returns a request body via openWeatherMapAPI
   */
  public get = (city: string): Promise<Request> => {
    return this.makeRequest(this.constructUrl('weather', city));
  };

  /** Queries the forecast API - returning 3 hour forecasts for the next 5 days for a given city
   * @param city - the city passed through pathParams
   * @returns a request body via openWeatherMapAPI
   */
  public getForecast = (city: string): Promise<Request> => {
    return this.makeRequest(this.constructUrl('forecast', city));
  };
}
