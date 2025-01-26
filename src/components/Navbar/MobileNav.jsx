import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import { styles } from './styles';
import { GlobalContext } from '@/context/GlobalContext';
import { useNavigate } from 'react-router-dom';

export default function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, setUser } = React.useContext(GlobalContext);

  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };
  const handleLogin = async () => {
    if (user) {
      localStorage.removeItem('User');
      console.log('logout');
      setUser(null);
      navigate('/login');

      console.log('login redir');
    } else {
      navigate('/login');
    }
  };
  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{ color: 'white' }}>
        <MenuIcon color="white" />
      </Button>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: '50%' }, // Set the drawer width to 50% of the viewport
        }}
      >
        <Box
          sx={{
            width: '100%', // Ensure the content fills the drawer width
            padding: 2, // Add some padding for spacing
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <styles.menuWrapperMob>
            {user && (
              <ListItem>
                <styles.menuButton
                  variant="contained"
                  onClick={() => navigate('/home')}
                >
                  Home
                </styles.menuButton>
              </ListItem>
            )}
            {user && (
              <ListItem>
                <styles.menuButton
                  variant="contained"
                  onClick={() => navigate('/profile')}
                >
                  Profile
                </styles.menuButton>
              </ListItem>
            )}
            <ListItem onClick={() => handleLogin()}>
              <styles.menuButton variant="contained">
                {!user ? 'Login' : 'Logout'}
              </styles.menuButton>
            </ListItem>
            {/* */}
          </styles.menuWrapperMob>
        </Box>
      </Drawer>
    </div>
  );
}
