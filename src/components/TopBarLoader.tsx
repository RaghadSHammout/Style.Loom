import React from "react";

type Props = {
    blur?: boolean;
    allowClicks?: boolean;
    zIndexClass?: string;
};

const TopBarLoader: React.FC<Props> = ({
    blur = false,
    allowClicks = false,
    zIndexClass = "z-[9999]",
}) => {
    return (
        <div
            className={`fixed inset-0 ${zIndexClass} ${allowClicks ? "pointer-events-none" : "pointer-events-auto"
                }`}
            role="progressbar"
            aria-busy="true"
        >
            <div
                className={`absolute inset-0 bg-black/20 dark:bg-black/40 ${blur ? "backdrop-blur-[2px]" : ""
                    } ${allowClicks ? "pointer-events-none" : "pointer-events-auto"}`}
            />

            <div className="absolute left-0 top-0 h-2 w-full overflow-hidden">
                <div
                    className="h-full w-1/3 animate-[progress_1.2s_ease-in-out_infinite]"
                    style={{
                        background: `linear-gradient( 90deg,
                                    #AE9B84, /* brown-60 */
                                    #C2B4A3, /* brown-70 */
                                    #D6CDC2, /* brown-80 */
                                    #AE9B84  /* brown-60 */
)`,
                    }}
                />
            </div>

            <style>{`
                        @keyframes progress {
                        0% { transform: translateX(-100%); }
                        50% { transform: translateX(50%); width: 50%; }
                        100% { transform: translateX(200%); }
                        }
      `}</style>
        </div>
    );
};

export default TopBarLoader;
