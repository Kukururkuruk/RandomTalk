export type HistoryType = {
    id: number,
    userId: number,
    clientId: number,
    pointId: number,
}

export type HistoryInitState = {
    histories: HistoryType[],
    isLoading: boolean,
    error: string | undefined,
}