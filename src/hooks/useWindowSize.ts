import { useEffect, useState } from "react";
import * as types from '../types';

interface IState {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = (): types.IUseWindowSize => {
  const [windowSize, setWindowSize] = useState<IState>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export default useWindowSize;
