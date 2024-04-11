export type PointType = {
  id: number,
  theme: string,
  cloth: string,
  longitude: string,
  latitude: string,
  status: boolean,
  userId: number,
  rating: number,
};

export type MapInitState = {
  points: PointType[],
  isLoading: boolean,
  error: string | undefined,
}

