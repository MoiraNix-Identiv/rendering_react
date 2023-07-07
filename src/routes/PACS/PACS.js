import React, { useState } from "react";
import { ToggleButtonGroup } from "@mui/material";
import CanvasContainer from "../../components/container/CanvasContainer";
import "./PACS.module.css";
import StyledButton from "../../components/buttons/StyledButton";

export default function PACS() {
    return (
      <>
        <div>
          <StyledButton text = {"Text here"}></StyledButton>
        </div>
        <ToggleButtonGroup />
        <CanvasContainer/>
        <CanvasContainer/>
      </>
    );
  }