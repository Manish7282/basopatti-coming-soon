"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const [time, setTime] = useState<any>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = +launchDate - +new Date();

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1e3a8a, #020617)",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          textAlign: "center",
          background: "rgba(255,255,255,0.05)",
          padding: "50px 30px",
          borderRadius: "16px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "800",
            marginBottom: "8px",
            letterSpacing: "1px",
          }}
        >
          Basopatti<span style={{ color: "#60a5fa" }}>.in</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "18px",
            color: "#cbd5f5",
            marginBottom: "30px",
          }}
        >
          Official Digital City Portal
        </p>

        {/* Coming Soon */}
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            color: "#facc15",
            marginBottom: "12px",
          }}
        >
          🚀 Website Coming Soon
        </h2>

        <p
          style={{
            fontSize: "15px",
            color: "#e5e7eb",
            marginBottom: "35px",
          }}
        >
          Jobs • News • Events • Citizen Services
        </p>

        {/* Countdown */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <TimeBox label="Days" value={time.days} />
          <TimeBox label="Hours" value={time.hours} />
          <TimeBox label="Minutes" value={time.minutes} />
          <TimeBox label="Seconds" value={time.seconds} />
        </div>

        {/* Footer */}
        <p
          style={{
            marginTop: "40px",
            fontSize: "12px",
            color: "#94a3b8",
          }}
        >
          © {new Date().getFullYear()} Basopatti City Initiative
        </p>
      </div>
    </div>
  );
}

function TimeBox({ label, value }: any) {
  return (
    <div
      style={{
        minWidth: "100px",
        padding: "16px",
        background: "linear-gradient(145deg, #1e293b, #020617)",
        borderRadius: "12px",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          fontWeight: "700",
        }}
      >
        {value ?? "--"}
      </div>
      <div
        style={{
          fontSize: "12px",
          letterSpacing: "1px",
          color: "#c7d2fe",
          marginTop: "4px",
        }}
      >
        {label.toUpperCase()}
      </div>
    </div>
  );
}
