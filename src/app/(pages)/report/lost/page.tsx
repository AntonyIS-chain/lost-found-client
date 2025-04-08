"use client"
import { Box, Card,CardContent, Grid } from "@mui/material";
import styles from "../../../styles/page.module.css";
import IdCard from "../../../components/ui/IdCard";
import Dashboard from "@/app/components/layout/Dashboard";
import ReportLostForm from "@/app/components/forms/ReportLostForm";


export default function Hero() {
  
    return (
      <Dashboard>
          <Card className={styles.cardHero}> 
            <CardContent>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6}}>
                        <ReportLostForm />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6}}>
                        <Box className={styles.cardGrid}>
                            <IdCard />
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
      </Dashboard>
        
    );
}
