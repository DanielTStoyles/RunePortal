/** @format */

import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LoginForm from "../forms/LoginForm";

const LoginModal = ({ loginModalOpen, handleLoginModalClose }) => {
  return (
    <Modal open={loginModalOpen} onClose={handleLoginModalClose}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <LoginForm handleClose={handleLoginModalClose} />
      </Box>
    </Modal>
  );
};

export default LoginModal;
