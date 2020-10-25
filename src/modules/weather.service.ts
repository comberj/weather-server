const fetch = require('node-fetch');
import 'dotenv/config';
import { IRequest } from '../interfaces/request.interface';

export class WeatherService {
  private constructUrl = (api: string, city: string): string => {
    const apiKey = process.env.WEATHER_KEY;

    return `http://api.openweathermap.org/data/2.5/${api}?q=${city}&appid=${apiKey}&units=metric`;
  };

  private makeRequest = async (url: string): Promise<IRequest> => {
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

  public get = (city: string): Promise<IRequest> => {
    return this.makeRequest(this.constructUrl('weather', city));
  };

  public getForecast = (city: string): Promise<IRequest> => {
    return this.makeRequest(this.constructUrl('forecast', city));
  };
}
