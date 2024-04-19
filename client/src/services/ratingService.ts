import type { AxiosInstance, AxiosResponse } from 'axios';
import apiInstance from './apiInstance';
import type { PointType, RatingType } from '../types/PointType';
import type { UserType } from '../types/authType';

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

  public async getUsers(): Promise<UserType[]> {
    const result = await this.ApiService.get<UserType[]>('/rating/all');
    return result.data;
  }
}

export default new RatingPointService(apiInstance);
