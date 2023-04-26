import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const InputWithController = ({ name, label, register, errors }) => {
  return (
    <div>
      <Controller
        name={name}
        control={register}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            id={name}
            type={name}
            error={Boolean(errors[name])}
            helperText={errors[name] && 'This field is required'}
          />
        )}
      />
    </div>
  );
};

export default InputWithController;
