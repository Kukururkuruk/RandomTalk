import type { AxiosInstance, AxiosResponse } from "axios";
import apiInstance from './apiInstance'
import type { PointType } from "../types/PointType";

class UpdateStatusPointService {
    constructor(private readonly ApiService: AxiosInstance){}

    public updateStatus(id: PointType['id']):Promise<AxiosResponse> {
        return this.ApiService.put<AxiosResponse>(`/points/status/${id}`).then((res) => res)
    }
}

export default new UpdateStatusPointService(apiInstance);