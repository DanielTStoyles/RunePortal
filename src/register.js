import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    navigate('/register'); 
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              label="Name"
              variant="outlined"
              type="text"
              id="name"
              {...register("name", { required: true })}
              error={Boolean(errors.name)}
              helperText={errors.name && "This field is required"}
            />
          </div>

          <div>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              id="email"
              {...register("email", { required: true })}
              error={Boolean(errors.email)}
              helperText={errors.email && "This field is required"}
            />
          </div>

          <div>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              id="password"
              {...register("password", { required: true })}
              error={Boolean(errors.password)}
              helperText={errors.password && "This field is required"}
            />
          </div>

          <Button variant="contained" type="submit">
            Register
          </Button>
        </form>
        <Button onClick={() => navigate('/')}>
          Go to Login
        </Button>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;