import { APIGatewayEvent, Handler } from 'aws-lambda';
import { WeatherService } from '../modules/weather.service';


const { getForecast } = new WeatherService();

export const handler: Handler = async (event: APIGatewayEvent, _context) => {
  return getForecast(event.pathParameters.city)
}
