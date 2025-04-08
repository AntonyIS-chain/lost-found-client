import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from "../../styles/page.module.css";
import Link from 'next/link';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar>
          <Box  sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Typography variant="h6" component="div" className={styles.brand}>
                Saka ID
              </Typography>
            </Link>
          </Box>
        
          <Link href="/sign-in">
            <Button color="inherit">
              <Typography className={styles.pageLink}>Sign In </Typography>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button color="inherit">
              <Typography className={styles.pageLink}>Create Account</Typography>
            </Button>
          </Link>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
