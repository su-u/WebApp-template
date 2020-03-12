import React from 'react';
import styled from 'styled-components';
import { MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Container>
      <Bar>
        <Toolbar>
          <MenuButton aria-label="menu" onClick={() => setOpen(true)}>
            <MenuIcon />
          </MenuButton>
          <Title variant="h6">News</Title>
          <LoginButton>Login</LoginButton>
        </Toolbar>
      </Bar>
      <Drawer width={200} open={open} onClose={() => setOpen(false)}>
        <MenuItem>React</MenuItem>
        <MenuItem>Redux</MenuItem>
        <MenuItem>React Router</MenuItem>
        <MenuItem>Material UI</MenuItem>
        <MenuItem>Electron</MenuItem>
      </Drawer>
    </Container>
  );
};

const LoginButton = styled(Button)`
  color: white;
`;

const Container = styled.div`
  flex-grow: 1;
`;

const Bar = styled(AppBar)`
  absolute: static;
`;

const Title = styled(Typography)`
  flex-grow: 1;
`;

const MenuButton = styled(IconButton)`
  margin: 0 16px 0 -12px;
  color: white;
`;

export default NavBar;
