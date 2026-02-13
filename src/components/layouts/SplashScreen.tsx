"use client";

import { useState, useEffect } from "react";

interface SplashScreenProps {
    children: React.ReactNode;
    minDuration?: number; // Minimum display time in ms
}

export function SplashScreen({ children, minDuration = 1000 }: SplashScreenProps) {
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
                className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${isExiting ? "opacity-0" : "opacity-100"
                    }`}
            >
                <div className="relative flex flex-col items-center justify-center gap-6">
                    {/* Animated rings container */}
                    <div className="relative flex items-center justify-center">
                        {/* Outer ring - ping effect */}
                        <div className="absolute h-28 w-28 rounded-full border-2 border-accent opacity-20 animate-ping" />

                        {/* Middle ring - slow pulse */}
                        <div
                            className="absolute h-24 w-24 rounded-full border border-primary opacity-40"
                            style={{ animation: "pulse 2s ease-in-out infinite" }}
                        />

                        {/* Inner ring - rotating */}
                        <div
                            className="absolute h-20 w-20 rounded-full border-t-2 border-r-2 border-accent opacity-60"
                            style={{ animation: "spin 1.5s linear infinite" }}
                        />

                        {/* Letter A container */}
                        <div
                            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl"
                        >
                            <span className="text-3xl font-bold text-white tracking-tight select-none">
                                A
                            </span>
                        </div>
                    </div>

                    {/* Brand name with fade-in */}
                    <div
                        className="text-primary font-semibold text-lg tracking-widest"
                        style={{
                            opacity: 0,
                            animation: "fadeIn 0.8s ease-out 0.3s forwards"
                        }}
                    >
                        aradiz
                    </div>
                </div>

            </div>
        </>
    );
}
