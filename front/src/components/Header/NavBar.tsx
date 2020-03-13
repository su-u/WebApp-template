import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import SideMenu from '@/components/Header/SideMenu';

interface Props {
  title: string;
}

const NavBar: React.FC<Props> = ({ title = 'AppBar' }: Props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Container>
      <Bar>
        <Toolbar>
          <MenuButton aria-label="menu" onClick={() => setOpen(true)}>
            <MenuIcon />
          </MenuButton>
          <Title variant="h6">{title}</Title>
          <LoginButton>Login</LoginButton>
        </Toolbar>
      </Bar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <SideMenu />
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
  background-color: black;
`;

const Title = styled(Typography)`
  flex-grow: 1;
`;

const MenuButton = styled(IconButton)`
  margin: 0 16px 0 -12px;
  color: white;
`;

export default NavBar;
