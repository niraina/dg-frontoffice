import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import axios from 'axios'
import { API } from "../../api";
import { Products } from "../../interfaces/products";

interface ProductsState {
    products: Products[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
const initialState: ProductsState = {
    products: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}
export const fetchData = createAsyncThunk("productsSlice/fetchData", async () => {
    const response = await axios.get<Products[]>(`${API}/product`);
    console.log(response);
    
    return response.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An error occurred';
            });
    },
});

export const { products } = productsSlice.actions
export default productsSlice.reducer;