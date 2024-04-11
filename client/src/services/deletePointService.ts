import type { AxiosInstance, AxiosResponse } from "axios";
import apiInstance from './apiInstance'
import type { PointType } from "../types/PointType";

class DeletePointService {
    constructor(private readonly ApiService: AxiosInstance){}

    public async deletePoint(id: PointType): Promise<PointType>{
        try {
            const result = await this.ApiService.delete<AxiosResponse>(`/points/${id}`);
            return result;
          } catch (error) {
            return Promise.reject(new Error('Server error delete point'));
          }
    }
}

export default new DeletePointService(apiInstance);