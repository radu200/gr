import React, { useState, useEffect, useRef, useTransition } from "react";
import SideNav from "./components/sideNav";
import Card from "./components/cards";
import FilterInput from "./components/inputs/";
import * as helpers from "./helpers";
import * as customHooks from "./hooks";
import * as types from "./types";
import "./App.scss";

interface IState {
  rows: number;
  columns: number;
  grid: types.IGrid;
}

export function App() {
  const [state, setState] = useState<IState>({
    rows: 2,
    columns: 2,
    grid: [],
  });
  const [isPending, startTransition] = useTransition();
  const childRef = useRef<HTMLInputElement | null>(null);
  const windowSize: types.IUseWindowSize = customHooks.useWindowSize();
  const toggleResult: types.IUseToggle = customHooks.useToggle();

  useEffect(() => {
    startTransition(() => {
      const grid: types.IGrid = helpers.generateGrid(state.rows, state.columns);
      setState((state) => ({ ...state, grid }));
    });
  }, [
    state.rows,
    state.columns,
    windowSize.width,
    windowSize.height,
    toggleResult.open,
  ]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    const inputValue: number = !value ? 0 : parseInt(value);

    if (inputValue > 10) {
      return;
    }
    setState({ ...state, [name]: inputValue });
  };

  return (
    <div className="App" data-testid="main-app">
      <SideNav {...toggleResult}>
        <div>
          <p>Rows</p>
          <FilterInput
            name="rows"
            value={state.rows}
            min={1}
            max={10}
            onChange={onChange}
          />
        </div>
        <div>
          <p>Columns</p>
          <FilterInput
            name="columns"
            value={state.columns}
            min={1}
            max={10}
            onChange={onChange}
          />
        </div>
      </SideNav>
      {isPending ? (
        <div> loading... </div>
      ) : (
        <div className="container">
          {state.grid.map((row, rowIndex) => (
            <div key={rowIndex} className="rows">
              {row.map((col, colIndex) => (
                <div key={`${rowIndex}${colIndex}`} className="columns">
                  <Card forwardRef={childRef} />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      ;
    </div>
  );
}
