export type PointType = {
  id: number,
  theme: string,
  cloth: string,
  longitude: string,
  latitude: string,
  img: string,
  status: boolean,
  userId: number,
};

export type AddFormPointType = {
  longitude: number | null,
  latitude: number | null,
  img: string | null,
  theme: string,
  cloth: string,
};

export type BanType = {
  id: number,
  userId: number,
  pointId: number,
};

export type MapInitState = {
  points: PointType[],
  bans: BanType[],
  isLoading: boolean,
  error: string | undefined,
};


