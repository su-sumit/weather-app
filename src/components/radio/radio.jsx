import React from "react";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";

import { useStyles } from "./styles";

export default function TemperatureUnitRadioGroup({ value, onTempUnitChange }) {
  const classes = useStyles();

  const handleChange = (event) => {
    onTempUnitChange(event.target.value);
  };

  return (
    <FormControl className={classes.root}>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="c" control={<Radio />} label="Celsius" />
        <FormControlLabel value="f" control={<Radio />} label="Fahrenheit" />
      </RadioGroup>
    </FormControl>
  );
}
