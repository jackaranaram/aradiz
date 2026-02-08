"use client";

import { useState, useEffect } from "react";

interface SplashScreenProps {
    children: React.ReactNode;
    minDuration?: number; // Minimum display time in ms
}

export function SplashScreen({ children, minDuration = 2000 }: SplashScreenProps) {
    const [showSplash, setShowSplash] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Show splash for minimum duration on every page load
        const timer = setTimeout(() => {
            setIsExiting(true);
            // Wait for exit animation to complete
            setTimeout(() => {
                setShowSplash(false);
            }, 500);
        }, minDuration);

        return () => clearTimeout(timer);
    }, [minDuration]);

    if (!showSplash) {
        return <>{children}</>;
    }

    return (
        <>
            {/* Preload content behind splash */}
            <div className="invisible">{children}</div>

            {/* Splash Screen Overlay */}
            <div
                className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--aradiz-background)] transition-opacity duration-500 ${isExiting ? "opacity-0" : "opacity-100"
                    }`}
            >
                <div className="relative flex flex-col items-center justify-center gap-6">
                    {/* Animated rings container */}
                    <div className="relative flex items-center justify-center">
                        {/* Outer ring - ping effect */}
                        <div className="absolute h-28 w-28 rounded-full border-2 border-[var(--aradiz-accent)] opacity-20 animate-ping" />

                        {/* Middle ring - slow pulse */}
                        <div
                            className="absolute h-24 w-24 rounded-full border border-[var(--aradiz-primary)] opacity-40"
                            style={{ animation: "pulse 2s ease-in-out infinite" }}
                        />

                        {/* Inner ring - rotating */}
                        <div
                            className="absolute h-20 w-20 rounded-full border-t-2 border-r-2 border-[var(--aradiz-accent)] opacity-60"
                            style={{ animation: "spin 1.5s linear infinite" }}
                        />

                        {/* Letter A container */}
                        <div
                            className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--aradiz-primary)] to-[var(--aradiz-secondary)] shadow-2xl"
                            style={{ animation: "float 2s ease-in-out infinite" }}
                        >
                            <span className="text-3xl font-bold text-white tracking-tight select-none">
                                A
                            </span>
                        </div>
                    </div>

                    {/* Brand name with fade-in */}
                    <div
                        className="text-[var(--aradiz-primary)] font-semibold text-lg tracking-widest opacity-0"
                        style={{ animation: "fadeIn 0.8s ease-out 0.5s forwards" }}
                    >
                        ARADIZ
                    </div>
                </div>

                {/* Custom animations */}
                <style jsx>{`
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0) scale(1);
                        }
                        50% {
                            transform: translateY(-6px) scale(1.02);
                        }
                    }
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
            </div>
        </>
    );
}
