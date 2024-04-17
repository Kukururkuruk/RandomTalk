import type { AxiosInstance, AxiosResponse } from 'axios';
import apiInstance from './apiInstance';
import type { RatingType } from '../types/PointType';
import type { UserType } from '../types/authType';

class RatingPointService {
  constructor(private readonly ApiService: AxiosInstance) {}

  public async ratingPoint(formData: RatingType): Promise<RatingType> {
    try {
      const result = await this.ApiService.post<RatingType>('/point/rating', formData);
      return result.data;
    } catch (error) {
      return Promise.reject(new Error('server err of AddPoint'));
    }
  }

  public async editRating(id: RatingType['id']): Promise<UserType> {
    const result = await this.ApiService.put<UserType>(`/points/rating/${id}`);
    return result.data;
  }
}

export default new RatingPointService(apiInstance);
