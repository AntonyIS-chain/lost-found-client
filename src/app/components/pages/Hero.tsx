"use client"
import styles from "../../styles/page.module.css";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import CustomButton from "../ui/Button";
import CustomIDCard from "../ui/IDCard";

export default function Hero() {
  const handleLostIdClick = () => {
    // Handle lost ID action
    console.log("Lost ID Reported");
  };

  const handleFoundIdClick = () => {
    // Handle found ID action
    console.log("Found ID Reported");
  };

  return (
    <Box className={styles.heroSection} sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left: Text Content */}
        <Grid size={6}>
          <Card elevation={0} className={styles.heroSectionLeftCard}>
            <CardContent>
              <Typography variant="h3" component="h1" gutterBottom>
                Lost Your ID? We&apos;ve Got You Covered.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Reclaim your lost identity documents quickly and securely. Our community-driven platform connects finders with rightful owners — making it easier than ever to reunite with your lost ID.
              </Typography>
              <Box className={styles.heroButtonBox}>
                <CustomButton label="Report Lost ID" color="success" onClick={handleLostIdClick} />
                <CustomButton label="Report Found ID" color="primary" onClick={handleFoundIdClick} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right: Image */}
        <Grid size={6}>
          <CustomIDCard />
        </Grid>
      </Grid>
    </Box>
  );
}
