import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const LoginForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  id="email"
                  {...field}
                  error={Boolean(errors.email)}
                  helperText={errors.email && "This field is required"}
                />
              )}
            />
          </div>

          <div>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  id="password"
                  {...field}
                  error={Boolean(errors.password)}
                  helperText={errors.password && "This field is required"}
                />
              )}
            />
          </div>

          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
