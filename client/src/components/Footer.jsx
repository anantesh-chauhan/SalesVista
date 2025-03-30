import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.alt,
        color: theme.palette.text.primary,
        textAlign: 'center',
        py: 3,
        mt: 4,
        boxShadow: theme.palette.mode === 'dark' 
          ? '0 -4px 8px rgba(0, 0, 0, 0.3)' 
          : '0 -4px 8px rgba(0, 0, 0, 0.1)',
        borderTop: `1px solid ${theme.palette.neutral.main}`,
      }}
    >
      <Typography variant="h6" gutterBottom>
        SalesVista
      </Typography>
      <Typography variant="body2">
        © {new Date().getFullYear()} SalesVista. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Designed with passion and precision by <i><bold>Anantesh</bold></i> .

      </Typography>
    </Box>
  );
};

export default Footer;
