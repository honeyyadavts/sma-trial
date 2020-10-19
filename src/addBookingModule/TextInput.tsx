import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = ({ value, onChange, label }: any) => {
  return (
    <TextField
      error={value == ""}
      size="small"
      helperText={value == "" ? "Required Field" : ""}
      onChange={onChange}
      style={{ margin: 20 }}
      label={label}
      variant="outlined"
      value={value}
    />
  );
};

export default TextInput;
