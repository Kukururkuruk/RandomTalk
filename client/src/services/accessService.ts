import type { AxiosInstance, AxiosResponse } from "axios";
import apiInstance from './apiInstance'
import { AccessType, AddAccessType } from "../types/AccessType";

class AddAccess {
    constructor(private readonly ApiService: AxiosInstance){}

    public async addAccess(formData: AddAccessType): Promise<AccessType>{
        try{
            const result = await this.ApiService.post<AccessType>('/points/apply/create', formData);
            return result.data;
        }catch(error){
            return Promise.reject(new Error('server err of AddPoint'));
        }
    }

    public async statusAccess(id: AccessType['id']):Promise<AxiosResponse> {
        return this.ApiService.put<AxiosResponse>(`/points/apply/${id}`).then((res) => res)
    }
}

export default new AddAccess(apiInstance);