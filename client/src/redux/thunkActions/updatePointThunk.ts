import { createAsyncThunk } from "@reduxjs/toolkit";

import { PointType } from "../../types/PointType";
import updatePointStatus from "../../services/updatePointStatus";

const updateStatusPointThunk = createAsyncThunk('point/updateStatusPoint', async (id: PointType['id']) => {
    await updatePointStatus.updateStatus(id);
    return id;
  });

export default updateStatusPointThunk;