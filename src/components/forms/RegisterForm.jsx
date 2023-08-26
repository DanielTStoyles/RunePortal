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

const RegisterForm = ({ handleClose }) => {
  const { login } = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const { email, password, rsn } = data;

    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      alert("User with this email already exists!");
    } else {
      const newUser = {
        id: Date.now().toString(),
        email,
        password,
        rsn,
      };

      console.log("newUser", newUser);

      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));

      const token = "myToken";
      localStorage.setItem("authToken", token);

      login(token);
      handleClose();
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
            rules={{
              validate: {
                isValidLength: (value) =>
                  value.length >= 8 ||
                  "Password must be at least 8 characters long.",
                hasUpperCase: (value) =>
                  /[A-Z]/.test(value) ||
                  "Password must contain an uppercase letter.",
                hasLowerCase: (value) =>
                  /[a-z]/.test(value) ||
                  "Password must contain a lowercase letter.",
                hasNumber: (value) =>
                  /[0-9]/.test(value) || "Password must contain a number.",
                hasSpecialChar: (value) =>
                  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value) ||
                  "Password must contain a special character.",
              },
            }}
          />

          <InputWithController
            name="rsn"
            label="RSN"
            control={control}
            errors={errors}
          />

          <Button variant="contained" type="submit">
            Register
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
