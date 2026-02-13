"use client";

import { useEffect, useState } from "react";

export default function Home() {
  // 🔥 FIXED LAUNCH DATE (March 5, 2026 – change year if needed)
  const launchDate = new Date("2026-03-05T00:00:00");

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const launchDate = new Date("2026-03-05T00:00:00");

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = launchDate.getTime() - now;

      if (diff <= 0) return;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page">
      <div className="bg-blur" />

      <div className="card">

        {/* 🔥 LOGO */}
        <div className="logo-wrap">
          <img src="/logo.png" alt="Basopatti Logo" />
        </div>

        <h1>
          Basopatti<span>.in</span>
        </h1>

        <p className="tagline">Official Digital City Portal</p>

        <div className="badge">🚀 Website Launching Soon</div>

        <p className="features">
          Jobs • News • Events • Citizen Services
        </p>

        <div className="countdown">
          <Box label="Days" value={time.days} />
          <Box label="Hours" value={time.hours} />
          <Box label="Minutes" value={time.minutes} />
          <Box label="Seconds" value={time.seconds} />
        </div>

        <p className="date">
          Launch Date: <strong>5 March 2026</strong>
        </p>

        <footer>© 2026 Basopatti City Initiative</footer>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at top, #2563eb, transparent 60%),
            linear-gradient(160deg, #020617, #020617);
          font-family: Inter, Arial, sans-serif;
          color: white;
          position: relative;
        }

        .bg-blur {
          position: absolute;
          width: 500px;
          height: 500px;
          background: #3b82f6;
          filter: blur(140px);
          opacity: 0.3;
          top: -150px;
          right: -150px;
        }

        .card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          border-radius: 20px;
          padding: 50px 40px;
          max-width: 720px;
          width: 100%;
          text-align: center;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        /* 🔥 LOGO ANIMATION */
        .logo-wrap {
          margin-bottom: 14px;
          animation: float 4s ease-in-out infinite;
        }

        .logo-wrap img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          box-shadow: 0 0 40px rgba(96, 165, 250, 0.6);
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        h1 {
          font-size: 52px;
          font-weight: 800;
          margin: 0;
        }

        h1 span {
          color: #60a5fa;
        }

        .tagline {
          margin-top: 8px;
          font-size: 18px;
          color: #c7d2fe;
        }

        .badge {
          margin: 28px auto 12px;
          padding: 8px 16px;
          border-radius: 50px;
          background: linear-gradient(90deg, #facc15, #fb923c);
          color: #000;
          font-weight: 600;
          font-size: 14px;
          display: inline-block;
        }

        .features {
          margin-top: 10px;
          color: #e5e7eb;
          font-size: 15px;
        }

        .countdown {
          margin-top: 36px;
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .box {
          width: 110px;
          padding: 18px 10px;
          border-radius: 14px;
          background: linear-gradient(145deg, #020617, #111827);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .value {
          font-size: 32px;
          font-weight: 800;
        }

        .label {
          margin-top: 6px;
          font-size: 12px;
          color: #94a3b8;
        }

        footer {
          margin-top: 32px;
          font-size: 12px;
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
}

function Box({ label, value }: { label: string; value: number }) {
  return (
    <div className="box">
      <div className="value">{value}</div>
      <div className="label">{label.toUpperCase()}</div>
    </div>
  );
}
      const diff = launchDate.getTime() - now;

      if (diff <= 0) return;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page">
      <div className="bg-blur" />

      <div className="card">
        <h1>
          Basopatti<span>.in</span>
        </h1>

        <p className="tagline">Official Digital City Portal</p>

        <div className="badge">🚀 Website Launching Soon</div>

        <p className="features">
          Jobs • News • Events • Citizen Services
        </p>

        <div className="countdown">
          <Box label="Days" value={time.days} />
          <Box label="Hours" value={time.hours} />
          <Box label="Minutes" value={time.minutes} />
          <Box label="Seconds" value={time.seconds} />
        </div>

        <p className="date">
          Launch Date: <strong>5 March 2026</strong>
        </p>

        <footer>© 2026 Basopatti City Initiative
          Made andd Design By Manish
        </footer>
      </div>

      {/* 🔽 STYLES */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(
              circle at top,
              #2563eb,
              transparent 60%
            ),
            linear-gradient(160deg, #020617, #020617);
          font-family: Inter, Arial, sans-serif;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .bg-blur {
          position: absolute;
          width: 500px;
          height: 500px;
          background: #3b82f6;
          filter: blur(140px);
          opacity: 0.3;
          top: -150px;
          right: -150px;
        }

        .card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          border-radius: 20px;
          padding: 50px 40px;
          max-width: 720px;
          width: 100%;
          text-align: center;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        h1 {
          font-size: 52px;
          font-weight: 800;
          margin: 0;
          letter-spacing: 1px;
        }

        h1 span {
          color: #60a5fa;
        }

        .tagline {
          margin-top: 8px;
          font-size: 18px;
          color: #c7d2fe;
        }

        .badge {
          margin: 28px auto 12px;
          display: inline-block;
          padding: 8px 16px;
          border-radius: 50px;
          background: linear-gradient(90deg, #facc15, #fb923c);
          color: #000;
          font-weight: 600;
          font-size: 14px;
        }

        .features {
          margin-top: 10px;
          color: #e5e7eb;
          font-size: 15px;
        }

        .countdown {
          margin-top: 36px;
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .box {
          width: 110px;
          padding: 18px 10px;
          border-radius: 14px;
          background: linear-gradient(145deg, #020617, #111827);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .value {
          font-size: 32px;
          font-weight: 800;
        }

        .label {
          margin-top: 6px;
          font-size: 12px;
          letter-spacing: 1px;
          color: #94a3b8;
        }

        .date {
          margin-top: 28px;
          font-size: 14px;
          color: #cbd5f5;
        }

        footer {
          margin-top: 32px;
          font-size: 12px;
          color: #94a3b8;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 38px;
          }
          .card {
            padding: 40px 20px;
          }
        }
      `}</style>
    </div>
  );
}

function Box({ label, value }: { label: string; value: number }) {
  return (
    <div className="box">
      <div className="value">{value}</div>
      <div className="label">{label.toUpperCase()}</div>
    </div>
  );
}
