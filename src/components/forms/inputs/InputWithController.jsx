/** @format */

import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const InputWithController = ({
  name,
  label,
  control,
  type = "text",
  errors,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{ required: true }}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          id={name}
          type={type}
          error={Boolean(errors[name])}
          helperText={errors[name] && "This field is required"}
        />
      )}
    />
  );
};

export default InputWithController;
