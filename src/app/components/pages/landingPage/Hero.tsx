"use client"
import { Box, Button, Card,CardContent, Grid, Typography } from "@mui/material";
import styles from "../../../styles/page.module.css";
import IdCard from "../../ui/CustonIdCard";
import { useRouter } from "next/navigation"; 


export default function Hero() {
   const router = useRouter(); 

  const handleReportLostID = () => {
    router.push("/report/lost"); 
  };

  const handleReportFoundID = () => {
    router.push("/report/found"); 
  };

  const handleSearchID = () => {
    router.push("/search"); 
  };
    return (
        <Card className={styles.cardHero}> 
            <CardContent>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6}}>
                        <Box className={styles.cardGrid}>
                            <Box className={styles.cardLeftGrid}>
                                <Typography className={styles.heroIntro}>Lost and Found ID Service</Typography>
                                <Typography className={styles.heroIntroSubtext}>
                                    Welcome to the Lost and Found ID App. Whether you&apos;ve lost an ID or found one,
                                    this platform allows you to report and search for lost IDs to reunite them with
                                    their owners.
                                </Typography>
                                <Box className={styles.heroButtonBox}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={styles.button}
                                        onClick={handleReportLostID} 
                                    >
                                        <Typography className={styles.buttonText}>Report Lost ID</Typography>
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={styles.button}
                                        onClick={handleReportFoundID}
                                    >
                                        <Typography className={styles.buttonText}>Report Found ID</Typography>
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={styles.button}
                                        onClick={handleSearchID} 
                                    >
                                        <Typography className={styles.buttonText}>Search ID</Typography>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6}}>
                        <Box className={styles.cardGrid}>
                            <IdCard />
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
