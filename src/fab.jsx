import React from 'react';
import { Fab } from '@mui/material';

export const Base64FAB = ({ base64Image }) => {
  return (
    <Fab
      color="primary"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
      }}
    >
      <img
        src={base64Image}
        alt="fab-icon"
        style={{ width: '24px', height: '24px' }}
      />
    </Fab>
  );
};


