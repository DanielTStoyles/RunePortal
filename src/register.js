import React from 'react';
import { useForm } from 'react-hook-form';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import InputWithController from './InputWithController.jsx';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    navigate('/register'); 
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          
        <InputWithController name="email" label="Email" 
        control={control} errors={errors} />

<InputWithController name="password" label="Password" 
        control={control} errors={errors} />
          

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