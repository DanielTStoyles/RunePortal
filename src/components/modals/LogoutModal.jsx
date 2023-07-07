/** @format */

import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LogoutForm from "../forms/LogoutForm";

const LogoutModal = ({ logoutModalOpen, handleLogoutModalClose }) => {
  return (
    <Modal open={logoutModalOpen} onClose={handleLogoutModalClose}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <LogoutForm handleClose={handleLogoutModalClose} />
      </Box>
    </Modal>
  );
};

export default LogoutModal;
