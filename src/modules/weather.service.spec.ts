import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import 'dotenv/config';

import { expect } from 'chai';
import { WeatherService } from './weather.service';

describe('Weather Service', () => {
  chai.use(sinonChai);
  const weatherService = new WeatherService();
  let spy;
  describe('get()', () => {
    before(async () => {
      spy = sinon.stub(weatherService, <any>'makeRequest').returns({});
    });

    it('calls makeRequest with the correct parameters', async () => {
      const cityName:string = 'Vancouver';
      const api:string = 'weather';
      const apiKey:string = process.env.WEATHER_KEY;

      await weatherService.get(cityName);

      expect(spy).to.have.been.calledWith(
        `http://api.openweathermap.org/data/2.5/${api}?q=${cityName}&appid=${apiKey}&units=metric`,
      );
    });
  });
});
