/** @format */

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputWithController from "./inputs/InputWithController.jsx";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { UserContext } from "../../context/UserContext.jsx";

const LoginForm = ({ handleClose }) => {
  const { login } = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const { email, password } = data;

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        const token = "myToken";
        localStorage.setItem("authToken", token);
        login(token);
        const userObject = {
          email: user.email,
          rsn: user.rsn,
          authToken: token,
        };
        localStorage.setItem("user", JSON.stringify(userObject));
        handleClose();
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
    }
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
          <InputWithController
            name="email"
            label="Email"
            control={control}
            errors={errors}
          />

          <InputWithController
            name="password"
            label="Password"
            control={control}
            errors={errors}
          />

          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
