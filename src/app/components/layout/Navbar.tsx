"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from "../../styles/page.module.css";
import Link from 'next/link';
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Typography variant="h6" component="div" className={styles.brand}>
                Saka ID
              </Typography>
            </Link>
            
          </Box>
          
          {isAuthenticated ? (
            <Box>
               <Button color="inherit">
                <Typography className={styles.pageLink}>Profile</Typography>
              </Button>
              <Button color="inherit" onClick={logout}>
                <Typography className={styles.pageLink}>Logout</Typography>
              </Button>
            </Box>
            
          ) : (
            <Box>
              <Link href="/sign-in">
                <Button color="inherit">
                  <Typography className={styles.pageLink}>Sign In</Typography>
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button color="inherit">
                  <Typography className={styles.pageLink}>Create Account</Typography>
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
