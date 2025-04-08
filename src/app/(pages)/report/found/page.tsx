"use client"
import { Box, Card,CardContent, Grid } from "@mui/material";
import styles from "../../../styles/page.module.css";
import IdCard from "../../../components/ui/IdCard";
import Dashboard from "@/app/components/layout/Dashboard";
import ReportFoundForm from "@/app/components/forms/ReportFoundForm";


export default function Hero() {
  
    return (
      <Dashboard>
          <Card className={styles.cardHero}> 
            <CardContent>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6}}>
                       <ReportFoundForm />
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
