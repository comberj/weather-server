import { APIGatewayEvent, Context, Handler } from 'aws-lambda';
import { Request } from 'node-fetch';
import { WeatherService } from '../modules/weather.service';

const { getForecast } = new WeatherService();

export const handler: Handler = async (
  event: APIGatewayEvent,
  _context: Context,
): Promise<Request> => {
  return getForecast(event.pathParameters.city);
};
