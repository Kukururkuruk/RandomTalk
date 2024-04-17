import type { AxiosInstance } from 'axios';
import type { PointType } from '../types/PointType';
import axiosInstance from './apiInstance';

class MapService {
  constructor(private readonly api: AxiosInstance) {}

  public async getPoints(): Promise<PointType[]> {
    const result = await this.api.get<PointType[]>('/point');
    return result.data;
  }
}

export default new MapService(axiosInstance);
