import React from "react";

import { GridBackground } from "../GridBackground";

type Props = {};

export const Hero = (_props: Props) => {
  return (
    <>
      <GridBackground
        Comp={<h1>Hello World</h1>}
        className="w-[22rem] h-[22rem] rounded-2xl"
        classNameForGrid="rounded-2xl"
      />
    </>
  );
};
