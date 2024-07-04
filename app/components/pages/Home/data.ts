import { useState, useEffect } from "react";

export const useHomeData = () => {
  const [message, setMessage] = useState<string[]>([]);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (message.length > 0) {
      const timeout = setTimeout(() => {
        setMessage((prev) => prev.slice(1));
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [message]);

  const handleClick = () => {
    switch (counter) {
      case 0:
        setMessage((prev) => [
          ...prev,
          "I have no idea what you're trying to do, don't click that.",
        ]);

        setCounter(1);

        break;
      case 1:
        setMessage((prev) => [
          ...prev,
          "Seriously, that button is off limits.",
        ]);
        setCounter(2);
        break;

      case 2:
        setMessage((prev) => [...prev, "Nope, still off limits."]);
        setCounter(3);
        break;

      case 3:
        setMessage((prev) => [
          ...prev,
          "By the way, have you found the secret modal yet?",
        ]);
        setCounter(0);
        break;

      default:
        setMessage([]);
        setCounter(0);
    }
  };

  return { message, handleClick };
};
