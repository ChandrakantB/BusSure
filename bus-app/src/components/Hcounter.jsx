import React, { useEffect, useState } from "react";
import "./Hcounter.css";

const countersData = [
  { label: "Bus routes across India", target: 5870, suffix: "+" },
  { label: "Bus partners", target: 3500, suffix: "+" },
  { label: "Trusted travellers", target: 400, suffix: "+" },
  { label: "Daily Offers", target: 50, suffix: "+" },
  { label: "Years of service", target: 19, suffix: "+" },
];

function Hcounter() {
  const [counts, setCounts] = useState(
    countersData.map(() => 0)
  );

  useEffect(() => {
    const durations = countersData.map(() => 2000); // 2 seconds animation

    const startTimes = countersData.map(() => null);
    const animationFrameIds = [];

    function animateCount(index, startTime) {
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
          // Ensure final value
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
      animateCount(idx, null);
    });

    return () => {
      animationFrameIds.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  return (
    <section className="counters-section">
      <div className="counters-container">
        {countersData.map(({ label, suffix }, idx) => (
          <div key={label} className="counter-card">
            <div className="counter-number">
              {counts[idx].toLocaleString()}
              {suffix}
            </div>
            <div className="counter-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hcounter;
