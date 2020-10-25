import { APIGatewayEvent, Context, Handler } from 'aws-lambda';
import { WeatherService } from '../modules/weather.service';

const { getForecast } = new WeatherService();

export const handler: Handler = async (event: APIGatewayEvent, _context: Context) => {
  return getForecast(event.pathParameters.city);
};
