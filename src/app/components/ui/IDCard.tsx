import { Box, Card, CardContent, Typography, Avatar, Grid } from "@mui/material";
import styles from "../../styles/page.module.css";
import Image from "next/image";

export default function IDCard() {
  return (
    <Card className={styles.idCard}>
      <CardContent>
        {/* Header with Coat of Arms and Title */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>

           <Image
             src="/images/arms.jpg" 
             alt="Kenya Coat of Arms"
             width={50}
              height={50}
              layout="responsive"
              className={styles.idImage}
            />
          <Typography variant="subtitle2" fontWeight={700}>
            REPUBLIC OF KENYA
          </Typography>
        </Box>

        <Typography variant="subtitle1" fontWeight={700} mb={1}>
          NATIONAL IDENTITY CARD
        </Typography>

        {/* Body: Image and details */}
        <Grid container spacing={1}>
          <Grid size={4}>
            <Avatar
              src="/images/user.jpeg" // Replace with real or user image
              alt="ID Holder"
              variant="rounded"
              sx={{ width: "100%", height: "auto", borderRadius: 2 }}
            />
          </Grid>

          <Grid size={8}>
            <Typography variant="body2">
              <strong>Name:</strong> Jane Wanjiku Doe
            </Typography>
            <Typography variant="body2">
              <strong>ID No:</strong> 12345678
            </Typography>
            <Typography variant="body2">
              <strong>D.O.B:</strong> 01-Jan-1990
            </Typography>
            <Typography variant="body2">
              <strong>Gender:</strong> Female
            </Typography>
            <Typography variant="body2">
              <strong>Nationality:</strong> Kenyan
            </Typography>
          </Grid>
        </Grid>

        {/* Footer: Flag colors */}
        <Box
          mt={2}
          display="flex"
          height={10}
          sx={{ borderRadius: 2, overflow: "hidden" }}
        >
          <Box flex={1} bgcolor="black" />
          <Box flex={1} bgcolor="red" />
          <Box flex={1} bgcolor="green" />
        </Box>
      </CardContent>
    </Card>
  );
}
