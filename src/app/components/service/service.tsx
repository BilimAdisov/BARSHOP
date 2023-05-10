"use client";

import { BsListColumns } from "react-icons/bs";
import { MService } from "../modal/serviceModal";
import { useState } from "react";
import { Slider } from "../slider/slider";

export function ServiceComponent() {
  const [openSM, setOpenSM] = useState<boolean>(false);
  return (
    <div className="service">
      <div className="service-wrapper">
        <div
          className="icon-container"
          data-clue="Показать как список"
          onClick={() => setOpenSM(true)}
        >
          <BsListColumns size={30} />
        </div>
        <MService open={openSM} close={() => setOpenSM(false)} />
        <div className="slider-container">
          <Slider />
        </div>
      </div>
    </div>
  );
}
