import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
type ThemeMode = "dark" | "light";
interface NavLink {
  label: string;
  path: string;
}

interface NavState {
  navLinks: NavLink[];
  btn: string;
  mode: ThemeMode; 
}

const saved = localStorage.getItem("theme");
const initialTheme: ThemeMode = saved === "dark" || saved === "light" ? (saved as ThemeMode) : "dark";

const initialState: NavState = {
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Dashboard", path: "/dashboard" },
  ],
  btn: "Contact",
  mode: initialTheme,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.mode);
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme, setTheme } = navSlice.actions;
export default navSlice.reducer;
