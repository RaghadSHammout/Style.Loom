import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import type { RefObject } from "react";

type Props = {
    show: boolean;
    onClose: () => void;
    showAnim: boolean;
  closeBtnRef: RefObject<HTMLButtonElement | null>; 
};

export default function CartModal({ show, onClose, showAnim, closeBtnRef }: Props) {
    if (!show) return null;

    return createPortal(
        <div className="fixed inset-0 z-[10000]" role="dialog" aria-modal="true">
            <button
                onClick={onClose}
                aria-label="Close cart backdrop"
                className={`absolute inset-0 transition-opacity duration-300 ${showAnim ? "opacity-100" : "opacity-0"} bg-black/40 backdrop-blur-[2px]`}
            />

            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[min(92vw,520px)] rounded-3xl bg-dark-12 border border-dashed border-gray-40 shadow-2xl
                    transition-[transform,opacity] duration-300 ease-out
                    ${showAnim ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                role="document"
            >
                <div className="flex items-center justify-between bg-dark-15 px-6 py-4 rounded-t-3xl border-b border-dashed border-gray-40">
                    <h3 className="font-robotmono text-lg 2xl:text-2xl text-white">Shopping Cart</h3>
                    <button
                        ref={closeBtnRef}
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-dark-20 text-gray-80 focus:outline-none focus:ring-2 focus:ring-brown-70"
                        aria-label="Close cart"
                        title="Close"
                    >
                        <GrClose />
                    </button>
                </div>

                <div className="px-8 py-10 text-center">
                    <div className="mx-auto mb-5 w-20 h-20 rounded-2xl border-2 border-dashed border-gray-40 grid place-items-center text-gray-70 text-2xl">👜</div>
                    <h4 className="text-white text-xl 2xl:text-2xl">Your cart is empty</h4>
                    <p className="text-gray-80 mt-1">Looks like you haven’t added anything yet.</p>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                        <button onClick={onClose} className="h-12 rounded-2xl border border-dashed border-gray-40 text-white hover:bg-dark-20">
                            Continue shopping
                        </button>
                        <NavLink to="/shop" onClick={onClose} className="h-12 rounded-2xl bg-brown-70 text-dark-10 hover:opacity-90 flex items-center justify-center">
                            Go to shop
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
