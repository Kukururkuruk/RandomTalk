import type { AxiosInstance, AxiosResponse } from 'axios';
import apiInstance from './apiInstance';
import type { PointType, RatingType } from '../types/PointType';

class RatingPointService {
  constructor(private readonly ApiService: AxiosInstance) {}

  public async ratingPoint(formData: RatingType): Promise<RatingType> {
    try {
      const result = await this.ApiService.post<RatingType>('/rating', formData);
      return result.data;
    } catch (error) {
      return Promise.reject(new Error('server err of AddPoint'));
    }
  }

  public async editRating(id: PointType['userId']): Promise<AxiosResponse> {
    const result = await this.ApiService.put<AxiosResponse>(`/rating/${id}`);
    return result.data;
  }
}

export default new RatingPointService(apiInstance);