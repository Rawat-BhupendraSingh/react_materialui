import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import AppBar from "@material-ui";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = (event, checked) => {};

  handleMenu = event => {};

  handleClose = () => {};

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Photos
            </Typography>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MenuAppBar />, rootElement);
