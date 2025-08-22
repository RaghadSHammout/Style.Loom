import { NavLink, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import ButtonLightDark from "./ButtonLightDark";
import { logo, market, HamburgerMenu } from "../data/NavImg";

import CartModal from "./CartModal";

function NavBar() {
  const { navLinks, btn } = useSelector((state: RootState) => state.nav);

  const [isOpenPop, setIsOpenPop] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [showAnim, setShowAnim] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpenPop) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => setShowAnim(true));
    const tf = setTimeout(() => closeBtnRef.current?.focus(), 40);
    return () => {
      document.body.style.overflow = prevOverflow;
      cancelAnimationFrame(raf);
      clearTimeout(tf);
      setShowAnim(false);
    };
  }, [isOpenPop]);

  useEffect(() => {
    if (!isOpenPop) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpenPop(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpenPop]);

  const handleCloseMenu = () => setMenuOpen(false);
  const openCart = () => {
    setIsOpenPop(true);
    handleCloseMenu();
  };

  return (
    <>
      <nav
        className={`w-full flex justify-center items-end px-[62px]
          max-2xl:px-3.5 max-lg:px-4 fixed top-0 left-0 right-0 z-[1000]
          ${scrolled
            ? "shadow-md shadow-black/20 backdrop-blur-md bg-white/80 dark:bg-primarybg/80 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-primarybg/60"
            : "shadow-none bg-white dark:bg-primarybg"
          }`}
      >
        <div
          className={`w-[70px] h-[70px] relative flex justify-center items-center mr-[30px]
                      max-2xl:w-[46px] max-2xl:h-[46px] max-2xl:mr-5 max-xl:hidden 
                      ${scrolled ? "hidden" : ""}`}
        >
          <div className="absolute bottom-0 left-0 h-0 w-[40px] border-b border-dashed border-Very-Dark-Gray max-2xl:w-[26.29px]" />
          <div className="absolute top-1/2 right-0 h-[40px] w-[40px] -translate-y-1/2 border-r border-dashed border-Very-Dark-Gray max-2xl:w-[26.29px] max-2xl:h-[26.29px]" />
        </div>

        <div
          className={`font-robotmono w-full flex justify-between items-center min-h-[96px] font-normal text-lg leading-[1.5] opacity-100 tracking-normal text-center p-[30px] relative max-2xl:p-6 max-lg:pt-10 max-lg:pb-5 max-lg:px-0 max-2xl:text-sm ${scrolled ? "shadow-none" : "border-dashed border-b border-dark-15"
            }`}
        >
          <div
            className={`flex items-center gap-[14px] transition-all duration-300 ease-in-out z-10 ${menuOpen
                ? "max-lg:flex-col max-lg:absolute max-lg:text-white max-lg:top-[110px] max-lg:left-0 max-lg:right-0 max-lg:bg-dark-10/85 backdrop-blur-lg max-lg:rounded-t-2xl max-lg:shadow-2xl max-lg:ring-1 max-lg:ring-white/10 max-lg:py-5 max-lg:px-5"
                : "max-lg:hidden"
              }`}
          >
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={handleCloseMenu}
                className={({ isActive }) =>
                  `h-[63px] flex hover:-translate-y-0.5 hover:shadow-lg rounded-[12px] max-2xl:rounded-[8px] max-2xl:h-[49px] max-lg:w-full ${isActive
                    ? "bg-dark-10 px-[30px] py-[18px] max-2xl:px-[24px] max-2xl:py-[14px] max-lg:bg-white/10 shadow-sm text-white"
                    : "px-[24px] py-[18px] border border-dashed max-lg:border-white/20 dark:hover:border-white/35 dark:hover:bg-white/5 dark:border-dark-15 max-2xl:px-5 max-2xl:py-[14px]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className={`${menuOpen ? "max-lg:hidden" : ""}`}>
            <NavLink to="/" onClick={handleCloseMenu}>
              {logo}
            </NavLink>
          </div>

          <div
            className={`flex gap-3.5 justify-center items-center ${menuOpen ? "max-lg:flex" : "max-lg:hidden"
              }`}
          >
            <button
              className={`relative bg-dark-10 text-white shadow-xl hover:-translate-y-0.5 p-[18px] rounded-[12px] opacity-100 flex justify-center items-center max-2xl:p-[14px] max-2xl:rounded-[8px] max-2xl:h-[48px] max-2xl:w-[48px] ${menuOpen ? "max-lg:h-[56px] max-lg:w-[56px]" : ""
                }`}
              onClick={openCart}
              aria-label="Open cart"
            >
              {market}
            </button>

            <button
              className={`${menuOpen
                  ? "flex justify-center items-center transition-all duration-300 ease-in-out w-full max-lg:flex max-lg:flex-col max-lg:absolute max-lg:top-[311px] max-lg:left-0 right-0 max-lg:bg-dark-10/85 backdrop-blur-lg max-lg:shadow-2xl max-lg:py-5 max-lg:px-5 max-lg:z-50"
                  : "max-lg:hidden"
                }`}
            >
              <NavLink
                onClick={handleCloseMenu}
                to={"/contact"}
                className={`shadow-xl hover:-translate-y-0.5 w-[136px] h-[63px] flex justify-center items-center bg-brown-60 text-primarybg px-[30px] py-[18px] rounded-[12px] max-2xl:py-[14px] max-2xl:rounded-[8px] max-2xl:h-[49px] max-2xl:w-[119px] max-lg:w-full`}
              >
                {btn}
              </NavLink>
            </button>

            <div
              className={`${menuOpen
                  ? "flex justify-center items-center transition-all duration-300 ease-in-out w-full max-lg:absolute max-lg:top-[391px] max-lg:left-0 right-0 max-lg:bg-dark-10/85 backdrop-blur-lg max-lg:rounded-b-2xl max-lg:shadow-2xl max-lg:py-5 max-lg:px-5"
                  : "max-lg:hidden"
                }`}
            >
              <ButtonLightDark />
            </div>
          </div>

          <div
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden max-lg:flex flex justify-center items-center rotate-0 opacity-100 rounded-[10px] p-[14px] bg-[#C2B4A3]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <IoClose className="w-7 h-7 text-dark-10" /> : HamburgerMenu}
          </div>
        </div>

        <div
          className={`w-[70px] h-[70px] relative flex justify-center items-center ml-[30px] max-2xl:w-[46px] max-2xl:h-[46px] max-2xl:ml-5 max-xl:hidden ${scrolled ? "hidden" : ""
            }`}
        >
          <div className="absolute bottom-0 right-0 w-[40px] h-0 border-b border-dashed border-Very-Dark-Gray max-2xl:w-[26.29px]" />
          <div className="absolute top-1/2 left-0 h-[40px] w-[40px] -translate-y-1/2 border-l border-dashed border-Very-Dark-Gray max-2xl:w-[26.29px] max-2xl:h-[26.29px]" />
        </div>
      </nav>

      <CartModal
        show={isOpenPop}
        onClose={() => setIsOpenPop(false)}
        showAnim={showAnim}
        closeBtnRef={closeBtnRef}
      />
    </>
  );
}

export default NavBar;
