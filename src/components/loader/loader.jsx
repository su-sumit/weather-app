import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

export default function Loader({ show = true }) {
  return (
    <Backdrop open={show}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
