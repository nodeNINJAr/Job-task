"use client";


import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  initialDuration: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }; 
  className?: string;
}

// 
export function CountdownTimer({ initialDuration, className }: CountdownTimerProps) {

  const [timeLeft, setTimeLeft] = useState({
    days: initialDuration.days,
    hours: initialDuration.hours,
    minutes: initialDuration.minutes,
    seconds: initialDuration.seconds,
  });
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isCounting, setIsCounting] = useState(false);

//  
 const totalMilliseconds =
        initialDuration.days * 24 * 60 * 60 * 1000 +
        initialDuration.hours * 60 * 60 * 1000 +
        initialDuration.minutes * 60 * 1000 +
        initialDuration.seconds * 1000;

//   
useEffect(() => {
    // Initial display of initialDuration 
    const initialTimeout = setTimeout(() => {
      const now = new Date(); // Current time
      setEndDate(new Date(now.getTime() + totalMilliseconds));
      setIsCounting(true); // Start the countdown
    }, 1000); 

    // Cleanup
    return () => clearTimeout(initialTimeout);
  }, [initialDuration]);
 
  //   
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCounting && endDate) {
      timer = setInterval(() => {
        const now = new Date();
        const difference = endDate.getTime() - now.getTime();

        if (difference <= 0) {
          // Countdown reached zero, reset to initial duration
          const newEndDate = new Date(now.getTime() + totalMilliseconds);
          setEndDate(newEndDate);
          setTimeLeft({ ...initialDuration }); // Reset visually
          return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }, 1000); // Update every second
    }

    // Cleanup 
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isCounting, endDate, initialDuration]);

  const timeSegments = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hour" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Second" },
  ];

  return (
    <div className={cn("flex items-center justify-center md:justify-start gap-4 rounded-lg mt-8", className)}>
      {timeSegments.map((segment, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-20 h-24 bg-white rounded-lg shadow-md"
        >
          <span className="text-3xl font-bold text-primary">{segment.value.toString().padStart(2, "0")}</span>
          <span className="text-lg text-secondary">{segment.label}</span>
        </div>
      ))}
    </div>
  );
}