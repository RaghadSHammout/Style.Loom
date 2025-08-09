// src/store/dashboardSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
    collection, getDocs, addDoc, updateDoc, deleteDoc, doc,
    serverTimestamp
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

const COLL = "womenswear"; 

export type Item = {
    id?: string;
    title: string;          // اسم المنتج
    category?: string;      // ثابت: Womenswear
    fit: string;            // Fit: ...
    price: number;          // السعر
    image: string;          // الصورة الأساسية
    status: string;         // In stock | Out of stock
    description: string;    // وصف مختصر
    materials: string;      // فقرة المواد
    features: string[];     // ميزات (قائمة)
    sizes: string[];        // المقاسات: ["S","M","L","XL"]
    rating: number;         // التقييم (مثلاً 4.8)
    reviewsCount: number;   // عدد المراجعات
    gallery: string[];      // صور إضافية
    fabricImage?: string;   // صورة القماش
    createdAt?: any;
};

type State = {
    items: Item[];
    loading: boolean;
    error?: string | null;
    editing?: Item | null;
};

const initialState: State = {
    items: [],
    loading: false,
    error: null,
    editing: null
};

const colRef = collection(db, COLL);

// READ
export const fetchItems = createAsyncThunk("dashboard/fetchItems", async () => {
    const snap = await getDocs(colRef);
    return snap.docs.map(d => ({ id: d.id, ...d.data() })) as Item[];
});

// CREATE
export const addItem = createAsyncThunk("dashboard/addItem", async (item: Item) => {
    const payload = {
        ...item,
        category: "Womenswear",
        createdAt: serverTimestamp(),
    };
    const ref = await addDoc(colRef, payload);
    return { id: ref.id, ...item, category: "Womenswear" } as Item;
});

// UPDATE
export const updateItemThunk = createAsyncThunk("dashboard/updateItem", async (item: Item) => {
    if (!item.id) throw new Error("Missing id");
    const { id, ...rest } = item;
    await updateDoc(doc(db, COLL, id), rest as any);
    return item;
});

// DELETE
export const deleteItemThunk = createAsyncThunk("dashboard/deleteItem", async (id: string) => {
    await deleteDoc(doc(db, COLL, id));
    return id;
});

const slice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setEditing(state, action: PayloadAction<Item | null>) {
            state.editing = action.payload;
        }
    },
    extraReducers: b => {
        b.addCase(fetchItems.pending, s => { s.loading = true; s.error = null; })
            .addCase(fetchItems.fulfilled, (s, a) => { s.loading = false; s.items = a.payload; })
            .addCase(fetchItems.rejected, (s, a) => { s.loading = false; s.error = String(a.error.message || ""); })

            .addCase(addItem.fulfilled, (s, a) => { s.items.push(a.payload); })

            .addCase(updateItemThunk.fulfilled, (s, a) => {
                const i = s.items.findIndex(x => x.id === a.payload.id);
                if (i !== -1) s.items[i] = a.payload;
            })

            .addCase(deleteItemThunk.fulfilled, (s, a) => {
                s.items = s.items.filter(x => x.id !== a.payload);
            });
    }
});

export const { setEditing } = slice.actions;
export default slice.reducer;
