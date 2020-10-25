import { APIGatewayEvent, Context, Handler } from 'aws-lambda';
import { Request } from 'node-fetch';
import { WeatherService } from '../modules/weather.service';

const { get } = new WeatherService();

export const handler: Handler = async (
  event: APIGatewayEvent,
  _context: Context,
): Promise<Request> => {
  return get(event.queryStringParameters.city);
};
