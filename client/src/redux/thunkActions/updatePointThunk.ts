import { createAsyncThunk } from "@reduxjs/toolkit";
import { PointType, UpdatePointType } from "../../types/PointType";
import updatePointStatus from "../../services/updatePointStatus";

export const updateStatusPointThunk = createAsyncThunk('point/updateStatusPoint', async (id: PointType['id']) => {
    await updatePointStatus.updateStatus(id);
    return id;
  });

  export const updateClientPointThunk = createAsyncThunk(
    'point/updateClientPoint',
    async (point: UpdatePointType) => {
      const updatedPoint = await updatePointStatus.updateClient(point);
      return updatedPoint;
    }
  );

  export const updateAgreePointThunk = createAsyncThunk('point/updateAgreePoint', async (id: PointType['id']) => {
    await updatePointStatus.updateAgree(id);
    return id;
  });