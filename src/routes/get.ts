import { APIGatewayEvent, Handler } from 'aws-lambda';
import { WeatherService } from '../modules/weather.service';


const { get } = new WeatherService();

export const handler: Handler = async (event: APIGatewayEvent, _context) => {
  return get(event.queryStringParameters.city)
}
