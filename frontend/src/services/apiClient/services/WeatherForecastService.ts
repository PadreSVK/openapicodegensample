/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WeatherForecast } from '../models/WeatherForecast';
import { request as __request } from '../core/request';

export class WeatherForecastService {

    /**
     * @returns WeatherForecast Success
     * @throws ApiError
     */
    public static async getWeatherForecastService(): Promise<Array<WeatherForecast>> {
        const result = await __request({
            method: 'GET',
            path: `/WeatherForecast`,
        });
        return result.body;
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static async postWeatherForecastService({
file,
name,
}: {
file?: Blob,
name?: string,
}): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/WeatherForecast/formSample`,
            formData: {
                'File': file,
                'Name': name,
            },
        });
        return result.body;
    }

}