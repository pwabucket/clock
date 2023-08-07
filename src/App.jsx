import Clock from "react-clock";
import clsx from "clsx";
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
        "flex justify-center items-center",
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
    </div>
  );
};
