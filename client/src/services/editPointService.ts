import type { AxiosInstance } from "axios";
import apiInstance from './apiInstance'
import type { PointType } from "../types/PointType";

class EditPointService {
    constructor(private readonly ApiService: AxiosInstance){}

    public editPoint(point: PointType): Promise<PointType> {
        return this.ApiService.put<PointType>(`/points/${point.id}`, point).then((res) => res.data);
      }
}

export default new EditPointService(apiInstance);