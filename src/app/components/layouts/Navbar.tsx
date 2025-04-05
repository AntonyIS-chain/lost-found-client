import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from "../../styles/page.module.css"
import Link from 'next/link';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Saka ID
          </Typography>
          <Link href="/sign-in">
            <Button color="inherit">Sign In</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
