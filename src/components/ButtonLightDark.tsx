import sun from "../assets/images/sun.png"
import moon from "../assets/images/moon.png"
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/index"; 
import type { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";

export default function ButtonLightDark() {
  const dispatch = useDispatch<AppDispatch>();

  const mode = useSelector((state: RootState) => state.nav.mode);
  const isDark = mode === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
      <div className="flex items-center">
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={() => dispatch(toggleTheme())}
         className={`
          className="flex items-center"
        `}
      >
            <div
          className={`relative w-[96px] h-[40px] rounded-full transition-colors ${
            isDark ? "bg-white" : "bg-dark-10"
          }`}
        >
          <div
            className={`absolute z-10 top-[8px] w-6 h-6 rounded-full transition-all duration-300
              ${isDark ? "right-[56px] bg-dark-10" : "right-[16px] bg-white"}
            `}
          />
          <img src={moon} alt="Moon" className="absolute right-4 top-[7px]" />
          <img src={sun} alt="Sun" className="absolute left-4 top-[7px]" />
       
        </div>
      </button>
    </div>
  );
}
