import Clock from "react-clock";
import clsx from "clsx";
import dateFormat from "dateformat";
import { useInterval } from "react-use";
import { useState } from "react";

export const App = () => {
  const [time, setTime] = useState(new Date());

  // Update time
  useInterval(() => setTime(new Date()), 1000);

  return (
    <div
      className={clsx(
        "container p-4 mx-auto",
        "flex flex-col gap-4 justify-center items-center",
        "min-h-screen supports-[min-height:100dvh]:min-h-[100dvh]"
      )}
    >
      <div className="w-10/12 max-w-xs">
        <Clock
          value={time}
          size="100%"
          className="aspect-square"
          renderNumbers
        />
      </div>

      <div
        className={clsx(
          "bg-opacity-90 bg-neutral-100 dark:bg-neutral-800",
          "backdrop-blur-sm py-4 rounded-full",
          "font-orbitron font-bold",
          "text-2xl text-center",
          "min-w-[theme(spacing.60)]"
        )}
      >
        {dateFormat(time, "hh:MM:ss TT")}
      </div>
    </div>
  );
};
