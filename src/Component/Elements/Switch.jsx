import React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const FormControlLabelPosition = (props) => {
  const handleClick = (e) => {
    props.onClick(e.target.value);
  };
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value={props.value}
          control={
            <Switch
              color="default"
              checked={props.checked}
              onClick={handleClick}
            />
          }
          label={props.label}
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
};
export default FormControlLabelPosition;
