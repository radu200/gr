import { renderHook, act } from "@testing-library/react";
import * as customHooks from "..";

describe("Test useContainerSize hook", () => {
  it("should return  correct width and height", () => {
    const refNode = {
      current: {
        clientWidth: 10,
        clientHeight: 20,
      },
    };
    const { result } = renderHook(() => customHooks.useContainerSize(refNode));
    expect(result.current.width).toBe(10);
    expect(result.current.height).toBe(20);
  });
});

describe("Test useToggle hook", () => {
  it("should be falsy", () => {
    const status = true;
    const { result } = renderHook(() => customHooks.useToggle(status));

    act(() => {
      result.current.toggle();
    });
    expect(result.current.open).toBeFalsy();
  });

  it("should be truthy", () => {
    const status = false;
    const { result } = renderHook(() => customHooks.useToggle(status));

    act(() => {
      result.current.toggle();
    });
    expect(result.current.open).toBeTruthy();
  });
});
