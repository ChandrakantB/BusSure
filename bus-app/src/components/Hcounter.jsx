// src/components/Hcounter.jsx
import React, { useEffect, useState } from "react";

const countersData = [
  { label: "Bus routes across India", target: 12500, suffix: "+" },
  { label: "Verified bus operators", target: 4800, suffix: "+" },
  { label: "Happy travellers", target: 920000, suffix: "+" },
  { label: "Daily trips", target: 15000, suffix: "+" },
  { label: "Years of trusted service", target: 12, suffix: "+" },
];

function Hcounter() {
  const [counts, setCounts] = useState(countersData.map(() => 0));

  useEffect(() => {
    const durations = countersData.map(() => 2000); // 2s animation
    const startTimes = countersData.map(() => null);
    const animationFrameIds = [];

    function animateCount(index) {
      function step(timestamp) {
        if (!startTimes[index]) startTimes[index] = timestamp;
        const progress = timestamp - startTimes[index];
        const duration = durations[index];
        const target = countersData[index].target;

        const progressRatio = Math.min(progress / duration, 1);
        const currentCount = Math.floor(progressRatio * target);

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = currentCount;
          return newCounts;
        });

        if (progress < duration) {
          animationFrameIds[index] = requestAnimationFrame(step);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = target;
            return newCounts;
          });
        }
      }
      animationFrameIds[index] = requestAnimationFrame(step);
    }

    countersData.forEach((_, idx) => {
      animateCount(idx);
    });

    return () => {
      animationFrameIds.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  return (
    <section className="bg-gradient-to-br from-cyan-50 to-white py-12 px-4 text-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {countersData.map(({ label, suffix }, idx) => (
          <div
            key={label}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 p-6 cursor-default"
          >
            <div className="text-4xl font-extrabold text-gray-900 mb-2 relative">
              {counts[idx].toLocaleString()}
              <span className="text-green-500 text-xl font-bold ml-1">{suffix}</span>
            </div>
            <div className="text-base font-semibold text-slate-600">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hcounter;
