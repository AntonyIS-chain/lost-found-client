import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CustomSpinner() {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: '50vh' }}>
      <CircularProgress sx={{ color: "#fff" }} />
    </Box>
  );
}
