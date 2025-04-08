"use client"
import { Card,CardContent, Grid } from "@mui/material";
import styles from "../../../styles/page.module.css";
import Dashboard from "@/app/components/layout/Dashboard";


export default function Hero() {
  
    return (
      <Dashboard>
          <Card className={styles.cardHero}> 
            <CardContent>
                <Grid container spacing={2}>
                    
                </Grid>
            </CardContent>
        </Card>
      </Dashboard>
        
    );
}
