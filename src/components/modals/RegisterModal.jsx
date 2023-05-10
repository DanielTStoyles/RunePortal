/** @format */

import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import RegisterForm from "../forms/RegisterForm";

const RegisterModal = ({ registerModalOpen, handleRegisterModalClose }) => {
  return (
    <Modal open={registerModalOpen} onClose={handleRegisterModalClose}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <RegisterForm handleClose={handleRegisterModalClose} />
      </Box>
    </Modal>
  );
};

export default RegisterModal;
