export type PointType = {
  theme: string,
  cloth: string,
  longitude: string,
  latitude: string,
  status: boolean,
  userId: number,
};

export type MapInitState = {
  points: PointType[],
  isLoading: boolean,
  error: string | undefined,
}

