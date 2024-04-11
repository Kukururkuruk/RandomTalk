import type { PointType } from "./PointType";

export type EditPointState = {
    points: PointType[];
    editPoint: PointType | null;
    isLoading: boolean;
    error: string | null;
  };