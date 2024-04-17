import type { AxiosInstance } from "axios";
import axiosInstance from "./apiInstance";
import { UserType } from "../types/authType";

class GetClientService {
    constructor(private readonly ApiService: AxiosInstance) {}

    public async getClient(clientId: number):Promise<UserType> {
        const response = await this.ApiService.get<UserType>(`/client/${clientId}`)
        return response.data
    }
}

export default new GetClientService(axiosInstance)