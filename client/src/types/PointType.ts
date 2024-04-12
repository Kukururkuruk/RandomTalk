export type PointType = {
  id: number,
  theme: string,
  cloth: string,
  longitude: string,
  latitude: string,
  status: boolean,
  userId: number,
};

export type AddFormPointType = {
  longitude: number | null,
  latitude: number | null,
  theme: string,
  cloth: string,
};

export type MapInitState = {
  points: PointType[],
  isLoading: boolean,
  error: string | undefined,
};
