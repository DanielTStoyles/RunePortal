/** @format */

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "./ThemeContext";

const LoginForm = () => {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // navigate("/register");
  };

  const { darkMode } = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        width: "400px",
        height: "auto",
        borderRadius: "10px",
        backgroundColor: darkMode ? theme.palette.primary.dark : "#fff",
        color: darkMode ? "#fff" : theme.palette.text.primary,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
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
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
