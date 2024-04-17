import type { AxiosInstance } from "axios";
import apiInstance from './apiInstance'
import { HistoryType } from "../types/historyType";

class AddHistoryService {
    constructor(private readonly ApiService: AxiosInstance){}

    public async addHistory(userId: number, clientId: number, pointId: number): Promise<HistoryType> {
        try {
            const response = await this.ApiService.post<HistoryType>('/history', {
                userId,
                clientId,
                pointId
            });
            return response.data;
        } catch (error) {
            console.error('Error creating history record:', error);
            throw new Error('Failed to create history record');
        }
}

public async fetchHistory(): Promise<HistoryType[]> {
    try {
        const response = await this.ApiService.get<HistoryType[]>('/history');
        return response.data;
    } catch (error) {
        console.error('Error fetching history:', error);
        throw new Error('Failed to fetch history');
    }
}
    
}

export default new AddHistoryService(apiInstance);