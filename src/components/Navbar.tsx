import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';


const navItems = [
  { title: 'navigation.home', path: '/' },
  { title: 'navigation.about', path: '/about' },
  { title: 'navigation.services', path: '/services' },
  { title: 'navigation.contact', path: '/contact' },
  { title: 'navigation.executives', path: '/executives' }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.title} disablePadding>
          <ListItemButton
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={t(item.title)} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                mr: 3
              }}
            >

             
              {t('welcome')}

            </Typography>
            {!isMobile && (
              <Box sx={{ display: 'flex' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.title}
                    component={Link}
                    to={item.path}
                    sx={{ color: '#fff', mx: 1 }}
                  >
                    {t(item.title)}
                  </Button>
                ))}
              </Box>
            )}
          </Box>
          <Box sx={{ ml: 2 }}>
            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
