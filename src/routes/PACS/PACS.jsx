import React, { useState } from "react";
import ColorToggleButton  from "../../components/buttons/ColorToggleButton";
import CanvasContainer from "../../components/container/CanvasContainer";
import "./PACS.module.css";
import StyledButton from "../../components/buttons/StyledButton";

export default function PACS() {
    return (
      <>
        <ColorToggleButton />
        <CanvasContainer/>
        <CanvasContainer/>
      </>
    );
  }