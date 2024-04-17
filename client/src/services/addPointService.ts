import type { AxiosInstance } from "axios";
import apiInstance from './apiInstance'
import type { PointType , AddFormPointType } from "../types/PointType";

class AddPointService {
    constructor(private readonly ApiService: AxiosInstance){}

    public async addPoint(formData: AddFormPointType): Promise<PointType>{
        try{
            const result = await this.ApiService.post<PointType>('/points/add', formData);
            return result.data;
        }catch(error){
            return Promise.reject(new Error('server err of AddPoint'));
        }
    }
}

export default new AddPointService(apiInstance);