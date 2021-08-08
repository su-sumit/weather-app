import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  styled,
} from "@material-ui/core";

const StyledFormControl = styled(FormControl)({
  display: "flex",
  "& .MuiFormGroup-root": {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
});

export default function TemperatureUnitRadioGroup({ value, onTempUnitChange }) {
  const handleChange = (event) => {
    onTempUnitChange(event.target.value);
  };

  return (
    <StyledFormControl>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="c" control={<Radio />} label="Celsius" />
        <FormControlLabel value="f" control={<Radio />} label="Fahrenheit" />
      </RadioGroup>
    </StyledFormControl>
  );
}
