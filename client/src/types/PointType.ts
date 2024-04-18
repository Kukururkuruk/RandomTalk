export type PointType = {
  id: number,
  theme: string,
  cloth: string,
  longitude: string,
  latitude: string,
  img: string,
  status: boolean,
  userId: number,
  agreed: boolean,
  clientId: number,
  reason: string,
  visibility: boolean,
};

export type UpdatePointType = {
  id: number,
  clientId: number,
  reason: string,
}

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

export type RatingType = {
  id: number,
  userId: number,
  rating: number,
};


