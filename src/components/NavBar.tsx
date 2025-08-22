import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import ButtonLightDark from "./ButtonLightDark";
import { GrClose } from "react-icons/gr";
import { logo, market, HamburgerMenu } from "../data/NavImg";

function NavBar() {
  const { navLinks, btn } = useSelector((state: RootState) => state.nav);

  const [isOpenPop, setisOpenPop] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [showAnim, setShowAnim] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpenPop) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // next tick -> animate
      const t = requestAnimationFrame(() => setShowAnim(true));
      // focus trap start focus
      const tf = setTimeout(() => closeBtnRef.current?.focus(), 40);
      return () => {
        document.body.style.overflow = prev;
        cancelAnimationFrame(t);
        clearTimeout(tf);
        setShowAnim(false);
      };
    }
  }, [isOpenPop]);

  useEffect(() => {
    if (!isOpenPop) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setisOpenPop(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpenPop]);

  const OpenPop = () => setisOpenPop(true);

  return (
    <nav
      className={`w-full flex justify-center items-center px-[62px]
        max-2xl:px-3.5 max-lg:px-4 fixed top-0 left-0 right-0 z-[1000]
        ${
          scrolled
            ? "shadow-md shadow-black/20 backdrop-blur-md bg-white/80 dark:bg-primarybg/80 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-primarybg/60"
            : "shadow-none bg-white dark:bg-primarybg"
        }`}
    >
      <div
        className={`w-[70px] h-[70px] relative flex justify-center items-center mr-[30px]
          max-2xl:w-[46px] max-2xl:h-[46px] max-2xl:mr-5 max-xl:hidden
          ${scrolled ? "invisible" : ""}`}
      >
        <div className="absolute bottom-0 left-0 h-0 w-[40px] border-b border-dashed border-Very-Dark-Gray max-2xl:w-[26.29px]" />
        <div className="absolute top-1/2 right-0 h-[40px] w-[40px] -translate-y-1/2 border-r border-dashed border-Very-Dark-Gray max-2xl:w-[26.29px] max-2xl:h-[26.29px]" />
      </div>

      <div
        className={`font-robotmono w-full flex justify-between items-center min-h-[96px] font-normal text-lg leading-[1.5] opacity-100 tracking-normal text-center p-[30px] relative max-2xl:p-6 max-lg:pt-10 max-lg:pb-5 max-lg:px-0 max-2xl:text-sm ${
          scrolled ? "shadow-none" : "border-dashed border-b border-dark-15"
        }`}
      >
        <div
          className={`flex items-center gap-[14px] transition-all duration-300 ease-in-out z-10 ${
            menuOpen
              ? "max-lg:flex-col max-lg:absolute max-lg:text-white max-lg:top-[110px] max-lg:left-0 max-lg:right-0 max-lg:bg-dark-10/85 backdrop-blur-lg max-lg:rounded-t-2xl max-lg:shadow-2xl max-lg:ring-1 max-lg:ring-white/10 max-lg:py-5 max-lg:px-5"
              : "max-lg:hidden"
          }`}
        >
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `h-[63px] flex hover:-translate-y-0.5 hover:shadow-lg rounded-[12px] max-2xl:rounded-[8px] max-2xl:h-[49px] max-lg:w-full ${
                  isActive
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
          <NavLink to={""}>{logo}</NavLink>
        </div>

        <div
          className={`flex gap-3.5 justify-center items-center ${
            menuOpen ? "max-lg:flex" : "max-lg:hidden"
          }`}
        >
          <button
            className={`relative bg-dark-10 text-white shadow-xl hover:-translate-y-0.5 p-[18px] rounded-[12px] opacity-100 flex justify-center items-center max-2xl:p-[14px] max-2xl:rounded-[8px] max-2xl:h-[48px] max-2xl:w-[48px] ${
              menuOpen ? "max-lg:h-[56px] max-lg:w-[56px]" : ""
            }`}
            onClick={OpenPop}
            aria-label="Open cart"
          >
            {market}
          </button>

          <button
            className={`${
              menuOpen
                ? "flex justify-center items-center transition-all duration-300 ease-in-out w-full max-lg:flex max-lg:flex-col max-lg:absolute max-lg:top-[311px] max-lg:left-0 right-0 max-lg:bg-dark-10/85 backdrop-blur-lg max-lg:shadow-2xl max-lg:py-5 max-lg:px-5 max-lg:z-50"
                : "max-lg:hidden"
            }`}
          >
            <NavLink
              to={"/contact"}
              className={`shadow-xl hover:-translate-y-0.5 w-[136px] h-[63px] flex justify-center items-center bg-brown-60 text-primarybg px-[30px] py-[18px] rounded-[12px] max-2xl:py-[14px] max-2xl:rounded-[8px] max-2xl:h-[49px] max-2xl:w-[119px] max-lg:w-full`}
            >
              {btn}
            </NavLink>
          </button>

          <div
            className={`${
              menuOpen
                ? "flex justify-center items-center transition-all duration-300 ease-in-out w-full max-lg:absolute max-lg:top-[391px] max-lg:left-0 right-0 max-lg:bg-dark-10/85 backdrop-blur-lg max-lg:rounded-b-2xl max-lg:shadow-2xl max-lg:py-5 max-lg:px-5"
                : "max-lg:hidden"
            }`}
          >
            <ButtonLightDark />
          </div>
        </div>

        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden max-lg:flex flex justify-center items-center rotate-0 opacity-100 rounded-[10px] p-[14px] bg-[#C2B4A3]"
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoClose className="w-7 h-7 text-dark-10" /> : HamburgerMenu}
        </div>
      </div>

      <div
        className={`w-[70px] h-[70px] relative flex justify-center items-center ml-[30px]
          max-2xl:w-[46px] max-2xl:h-[46px] max-2xl:ml-5 max-xl:hidden
          ${scrolled ? "invisible" : ""}`}
      >
        <div className="absolute bottom-0 right-0 w-[40px] h-0 border-b border-dashed border-Very-Dark-Gray max-2xl:w-[26.29px]" />
        <div className="absolute top-1/2 left-0 h-[40px] w-[40px] -translate-y-1/2 border-l border-dashed border-Very-Dark-Gray max-2xl:w-[26.29px] max-2xl:h-[26.29px]" />
      </div>

      {isOpenPop && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center" role="dialog" aria-modal="true">
          <button
            onClick={() => setisOpenPop(false)}
            aria-label="Close cart backdrop"
            className={`absolute inset-0 transition-opacity duration-300 ${
              showAnim ? "opacity-100" : "opacity-0"
            } bg-black/40 backdrop-blur-[2px]`}
          />

          <div
            className={`relative w-[min(92vw,520px)] rounded-3xl bg-dark-12 border border-dashed border-gray-40 shadow-2xl transition-[transform,opacity] duration-300 ease-out ${
              showAnim ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            role="document"
          >
            <div className="flex items-center justify-between bg-dark-15 px-6 py-4 rounded-t-3xl border-b border-dashed border-gray-40">
              <h3 className="font-robotmono text-lg 2xl:text-2xl text-white">Shopping Cart</h3>
              <button
                ref={closeBtnRef}
                onClick={() => setisOpenPop(false)}
                className="p-2 rounded-lg hover:bg-dark-20 text-gray-80 focus:outline-none focus:ring-2 focus:ring-brown-70"
                aria-label="Close cart"
                title="Close"
              >
                <GrClose />
              </button>
            </div>

            <div className="px-8 py-10 text-center">
              <div className="mx-auto mb-5 w-20 h-20 rounded-2xl border-2 border-dashed border-gray-40 grid place-items-center text-gray-70 text-2xl">
                👜
              </div>
              <h4 className="text-white text-xl 2xl:text-2xl">Your cart is empty</h4>
              <p className="text-gray-80 mt-1">Looks like you haven’t added anything yet.</p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <button
                  onClick={() => setisOpenPop(false)}
                  className="h-12 rounded-2xl border border-dashed border-gray-40 text-white hover:bg-dark-20"
                >
                  Continue shopping
                </button>
                <NavLink
                  to="/shop"
                  className="h-12 rounded-2xl bg-brown-70 text-dark-10 hover:opacity-90 flex items-center justify-center"
                  onClick={() => setisOpenPop(false)}
                >
                  Go to shop
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
