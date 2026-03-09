"use client";

import React from "react";

export const Countdown: React.FC = () => {
  const [countdown, setCountdown] = React.useState(60);

  React.useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 60));
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);
  return (
    <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
      Next update in: <span className="text-base">{countdown} sec</span>
    </div>
  );
};
