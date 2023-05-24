/** @format */

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import "./navStyle.css";

const DrawerButton = ({ drawerOpen, setDrawerOpen }) => {
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  <IconButton
    aria-label="open drawer"
    onClick={toggleDrawer}
    className={`drawer-toggle ${drawerOpen ? "open" : ""}`}
  >
    <MenuIcon />
  </IconButton>;
};

export default DrawerButton;
