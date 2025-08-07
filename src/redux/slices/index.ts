import { createSlice } from '@reduxjs/toolkit';
interface NavLink {
  label: string;
  path: string;
}
interface NavState {
  navLinks: NavLink[];
  btn: string;
}
const initialState : NavState = {
  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
  ],
  btn: 'Contact',
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
  
  },
});

export default navSlice.reducer;
