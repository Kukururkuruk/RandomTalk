import type { AxiosInstance, AxiosResponse } from "axios";
import apiInstance from './apiInstance'
import type { PointType, UpdatePointType } from "../types/PointType";
import { UserType } from "../types/authType";

class UpdateStatusPointService {
    constructor(private readonly ApiService: AxiosInstance){}

    public updateStatus(id: PointType['id']):Promise<AxiosResponse> {
        return this.ApiService.put<AxiosResponse>(`/points/status/${id}`).then((res) => res)
    }

    public updateStatusFalse(id: PointType['id']):Promise<AxiosResponse> {
        return this.ApiService.put<AxiosResponse>(`/points/status/false/${id}`).then((res) => res)
    }

    public updateVisibilityFalse(id: PointType['id']):Promise<AxiosResponse> {
        return this.ApiService.put<AxiosResponse>(`/points/status/visibility/${id}`).then((res) => res)
    }

    public updateClient(point: UpdatePointType): Promise<UpdatePointType> {
        return this.ApiService.put<UpdatePointType>(`/points/status/client/${point.id}`, { clientId: point.clientId, reason: point.reason })
          .then((res) => res.data);
      }

      public updateAgree(id: PointType['id']):Promise<AxiosResponse> {
        return this.ApiService.put<AxiosResponse>(`/points/status/agreed/${id}`).then((res) => res)
    }
      
      
}

export default new UpdateStatusPointService(apiInstance);