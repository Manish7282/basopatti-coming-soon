"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle, #1e3a8a, #000000)",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>Basopatti.in</h1>
      <p style={{ fontSize: "20px", marginBottom: "30px" }}>Website is coming soon!</p>
      {timeLeft ? (
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              style={{
                background: "#ffffff22",
                padding: "15px 20px",
                borderRadius: "10px",
                minWidth: "80px",
              }}
            >
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</div>
              <div style={{ fontSize: "14px", textTransform: "uppercase", marginTop: "5px" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Launch time reached!</p>
      )}
    </div>
  );
}
