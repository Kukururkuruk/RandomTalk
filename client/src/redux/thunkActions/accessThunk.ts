import { createAsyncThunk } from "@reduxjs/toolkit";
import accessService from "../../services/accessService";
import { AccessType, AddAccessType } from "../../types/AccessType";

export const createAccessThunk = createAsyncThunk('access/createAccess', async (formData: AddAccessType) => {
    const result = await accessService.addAccess(formData)
    return result
})

export const statusAccessThunk = createAsyncThunk('access/update', async (id: AccessType['id']) => {
    await accessService.statusAccess(id);
    return id;
  })
