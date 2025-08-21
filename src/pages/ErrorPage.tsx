import { NavLink } from "react-router-dom";
import ErrorImg from "../assets/images/Error.png";
function ErrorPage() {
  return (
    <div className="font-robotmono flex relative flex-col items-center justify-center min-h-screen bg-primarybg  overflow-hidden">
      <h1
        className="text-8xl md:text-9xl font-black italic leading-[0.9]
  bg-gradient-to-b from-[#E2D3BD] to-[#BFA17A] bg-clip-text text-transparent
  drop-shadow-[0_8px_20px_rgba(217,195,166,0.15)]"
      >
        404
      </h1>
      <p className="font-medium mt-4 text-2xl text-brown-70 ">
        – Page Not Found.
      </p>
      <p className="mt-2 text-base md:text-lg text-brown-70/80 tracking-wide text-center">
        Looks like you took a wrong turn.
      </p>
      <NavLink
        to={"/"}
        className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 border border-brown-70/40
             text-[#D9C3A6] hover:bg-brown-70/10 focus:outline-none focus:ring-2 focus:ring-brown-70/50 shadow-[0_6px_18px_-6px_rgba(217,195,166,0.25)] transition"
      >
        Go Home
      </NavLink>

      <div
        className="pointer-events-none absolute -top-10 -left-24 w-48 sm:w-60 md:w-72 opacity-80
  animate-[spin_60s_linear_infinite]"
      >
        <img src={ErrorImg} alt="" />
      </div>

      <div
        className="pointer-events-none absolute -bottom-10 -right-24 w-48 sm:w-60 md:w-72 opacity-80
  animate-[spin_70s_linear_infinite_reverse]"
      >
        <img src={ErrorImg} alt="" />
      </div>
    </div>
  );
}

export default ErrorPage;
