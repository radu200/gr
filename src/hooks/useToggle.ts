import { useState } from "react";
import * as types from "../types";



const useToggle = (status:boolean = true): types.IUseToggle => {
  const [open, setOpen] = useState<boolean>(status);

  const toggle = () => setOpen(!open);

  return { open, toggle };
};

export default useToggle;
