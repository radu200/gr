///hooks
export interface IUseContainerSize {
    width: number | undefined;
    height: number | undefined;
}

export interface IUseWindowSize {
    width: number | undefined;
    height: number | undefined;
}

export interface IUseToggle {
   open:boolean;
   toggle:() => void;
}

//grid
export type IGrid = number[][]
