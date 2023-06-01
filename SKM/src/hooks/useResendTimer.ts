import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const useResendTimer = ({
  defaultTime = 60,
  autoStart = true,
}: {
  defaultTime?: number;
  autoStart?: boolean;
}) => {
  const [timer, setTimer] = useState({
    active: autoStart,
    time: defaultTime,
  });
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (timer.active) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev.time === 0) {
            clearInterval(timerRef.current);
            return {
              active: false,
              time: defaultTime,
            };
          }
          return {
            ...prev,
            time: prev.time - 1,
          };
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timer.active, defaultTime]);

  const activate = useCallback(() => {
    setTimer({ time: defaultTime, active: true });
  }, [defaultTime]);

  return useMemo(() => {
    return {
      time: timer.time,
      active: timer.active,
      activate,
    };
  }, [timer, activate]);
};

export default useResendTimer;
