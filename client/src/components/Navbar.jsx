import { useState } from 'react';
import React from 'react';
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material';
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profileImage from "assets/profile.jpeg";
import { AppBar, Button, IconButton, InputBase, Toolbar, MenuItem, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const Navbar = ({
  user,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: 'static',
        background: theme.palette.background.alt,
        boxShadow: 'none',
      }}>

      <Toolbar sx={{ justifyContent: "space-between" }}>
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon sx={{ color: theme.palette.text.primary }} />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder='Search...' sx={{ color: theme.palette.text.primary }} />
            <IconButton>
              <Search sx={{ color: theme.palette.text.primary }} />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined sx={{ fontSize: "25px", color: theme.palette.text.primary }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px", color: theme.palette.text.primary }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px", color: theme.palette.text.primary }} />
          </IconButton>

          <FlexBetween>
            <Button onClick={handleClick} sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textTransform: "none",
              gap: "1rem",
            }}>
              <Box
                component="img"
                alt='profile'
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography fontWeight="bold" fontSize="0.85rem" sx={{ color: theme.palette.text.primary }}>
                  {user.name}
                </Typography>
                <Typography fontSize="0.75rem" sx={{ color: theme.palette.text.secondary }}>
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined sx={{ color: theme.palette.text.primary, fontSize: "25px" }} />
            </Button>
            <MenuIcon
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClick} sx={{ color: theme.palette.text.primary }}>Log Out</MenuItem>
            </MenuIcon>
          </FlexBetween>
        </FlexBetween>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
