import React from "react";

export type LoaderProps = {
    label?: string;
    full?: boolean;
    size?: number;
    variant?: "brand" | "ring" | "bar" | "dots";
    charDelay?: number;
    autoHide?: boolean;
    onDone?: () => void;
};

const Loader: React.FC<LoaderProps> = ({
    label = "Loading...",
    full = true,
    size = 48,
    variant = "brand",
    charDelay = 90,
    autoHide = true,
    onDone,
}) => {
    const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
        full ? (
            <div
                className="fixed inset-0 z-50 grid place-items-center bg-[color:var(--color-dark-12)]/85 backdrop-blur-sm"
                role="presentation"
                aria-hidden
            >
                {children}
            </div>
        ) : (
            <div className="inline-flex items-center justify-center">{children}</div>
        );

    const Ring = () => (
        <svg
            className="animate-spin motion-reduce:animate-none"
            width={size}
            height={size}
            viewBox="0 0 48 48"
            aria-hidden
            focusable={false}
        >
            <defs>
                <linearGradient id="loaderGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--color-brown-70)" />
                    <stop offset="50%" stopColor="var(--color-green)" />
                    <stop offset="100%" stopColor="var(--color-gray-70)" />
                </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="20" stroke="var(--color-gray-80)" strokeWidth="4" fill="none" opacity="0.25" />
            <path d="M44 24a20 20 0 0 0-20-20" stroke="url(#loaderGradient)" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
    );

    const Bar = () => (
        <div className="w-56 h-2 rounded-full overflow-hidden bg-[color:var(--color-gray-80)]/20" role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100}>
            <div
                className="h-full w-1/3 rounded-full animate-[loader-sweep_1.2s_ease-in-out_infinite] motion-reduce:animate-none"
                style={{ background: "linear-gradient(90deg, var(--color-brown-70), var(--color-green), var(--color-gray-70))" }}
            />
        </div>
    );

    const Dots = () => (
        <div className="flex items-center gap-2" aria-hidden>
            {[0, 1, 2].map((i) => (
                <span
                    key={i}
                    className="block size-2.5 rounded-full animate-bounce motion-reduce:animate-none"
                    style={{
                        background: i === 1 ? "var(--color-green)" : i === 2 ? "var(--color-gray-70)" : "var(--color-brown-70)",
                        animationDelay: `${i * 120}ms`,
                    }}
                />
            ))}
        </div>
    );

    const Brand = () => {
        const prefersReduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        const fullText = "Style.Loom";

        const [count, setCount] = React.useState(prefersReduced ? fullText.length : 0);
        const [fade, setFade] = React.useState(false);

        const tokens = React.useMemo(() => fullText.split("").map((ch, idx) => ({ ch, idx })), []);

        React.useEffect(() => {
            if (prefersReduced) return; // show instantly
            if (count >= tokens.length) return; // finished typing

            const id = window.setTimeout(() => setCount((c) => c + 1), charDelay);
            return () => window.clearTimeout(id);
        }, [count, tokens.length, charDelay, prefersReduced]);

        React.useEffect(() => {
            if (count !== tokens.length) return;
            const hold = window.setTimeout(() => {
                if (autoHide) {
                    setFade(true);
                    window.setTimeout(() => onDone?.(), 360);
                } else {
                    onDone?.();
                }
            }, 450);
            return () => window.clearTimeout(hold);
        }, [count, tokens.length, autoHide, onDone]);

        return (
            <div
                className={`flex flex-col items-center gap-4 select-none ${fade ? "animate-[brand-fade_0.36s_ease-out_forwards]" : ""}`}
                role="status"
                aria-live="polite"
                aria-label="Loading Style.Loom"
            >
                <div className="flex items-center">
                    <span className="font-bold tracking-wide leading-none text-[40px] sm:text-5xl md:text-6xl" style={{ color: "#fff" }}>
                        {tokens.slice(0, count).map(({ ch, idx }) => (
                            ch === "." ? (
                                <span key={idx} style={{ color: "var(--color-brown-70)" }}>•</span>
                            ) : (
                                <span key={idx}>{ch}</span>
                            )
                        ))}
                        {count < tokens.length && (
                            <span className="inline-block w-[2px] h-[0.9em] align-[-0.1em] bg-white ml-0.5 animate-[caret-blink_1s_steps(2)_infinite]" />
                        )}
                    </span>
                </div>
                <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--color-gray-70)" }}>
                    Please wait
                </span>
            </div>
        );
    };

    return (
        <Wrapper>
            {variant === "brand" ? (
                <Brand />
            ) : (
                <div className="flex flex-col items-center gap-4" role="status" aria-live="polite" aria-label={label}>
                    {variant === "ring" && <Ring />}
                    {variant === "bar" && <Bar />}
                    {variant === "dots" && <Dots />}
                    <span className="text-sm select-none" style={{ color: "var(--color-gray-70)" }}>
                        {label}
                    </span>
                </div>
            )}

            <style>{`$1`}</style>
        </Wrapper>
    );
};

export default Loader;
