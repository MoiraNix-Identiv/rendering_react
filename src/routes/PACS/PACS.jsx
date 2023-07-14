import React, { useState } from "react";
import ColorToggleButton  from "../../components/buttons/ColorToggleButton";
//import "./PACS.module.css";

export default function PACS() {
    return (
      <div className="PACS">
        <ColorToggleButton />
        <ColorToggleButton />
      </div>
    );
  }