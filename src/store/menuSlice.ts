import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface MenuItem {
    id: string;
    name: string;
    desc: string;
    price: number;
    img: string;
    area: string;
    category: string;
}

interface MenuState {
    items: MenuItem[];
    loading: boolean;
    error: string | null;
}

const initialState: MenuState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchMenuItems = createAsyncThunk<MenuItem[]>('menu/fetchMenuItems', async () => {
    const response = await fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.map((item: any) => ({
        id: item.id,
        name: item.meal,
        desc: item.instructions,
        price: item.price,
        img: item.img,
        area: item.area,
        category: item.category,
    }));
});

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenuItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMenuItems.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchMenuItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch menu items';
            });
    },
});

export default menuSlice.reducer;

