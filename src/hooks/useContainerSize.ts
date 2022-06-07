import { useEffect, useState } from "react";
import * as types from '../types';

interface IRefCurrent {
  clientWidth:number;
  clientHeight:number;
}

interface IProps {
    current: IRefCurrent | undefined
}

const useContainerSize = (refNode:IProps):types.IUseContainerSize => {
  const [state, setState] = useState<types.IUseContainerSize> ({
    width: undefined,
    height: undefined,
  });
  
  useEffect(() => {
    setState((state) => ({
      ...state,
      width: refNode?.current?.clientWidth,
      height: refNode?.current?.clientHeight,
    }));
  }, [refNode, refNode?.current?.clientWidth, refNode?.current?.clientHeight]);

  return state;
};

export default useContainerSize;
