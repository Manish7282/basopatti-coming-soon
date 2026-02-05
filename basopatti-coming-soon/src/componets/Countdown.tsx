"use client";
import { useEffect, useState } from "react";

const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

export default function Countdown() {
  const [time, setTime] = useState(get());

  function get() {
    const diff = +launchDate - +new Date();
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    };
  }

  useEffect(() => {
    const t = setInterval(() => setTime(get()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex justify-center gap-3 mt-6">
      {Object.entries(time).map(([k, v]) => (
        <div key={k} className="bg-black/30 px-4 py-3 rounded-lg">
          <p className="text-2xl font-bold">{v}</p>
          <p className="text-xs uppercase">{k}</p>
        </div>
      ))}
    </div>
  );
}