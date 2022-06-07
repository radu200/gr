import "./style.scss";
import * as customHooks from "../../hooks";
import * as types from "../../types";

interface IPropsRefNode {
  current: HTMLDivElement | undefined;
}

interface forwardRef {
  forwardRef: IPropsRefNode | undefined;
}

const Card = ({ forwardRef }: forwardRef) => {
  const { width, height }: types.IUseContainerSize =
    customHooks.useContainerSize(forwardRef);

  return (
    <div ref={forwardRef} className="card">
      <p>
        {width} x {height}
      </p>
    </div>
  );
};

export default Card;
