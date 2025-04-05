import { Box, Card, CardContent, Container } from "@mui/material";
import Navbar from "./Navbar";
import styles from "../../styles/page.module.css";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box className={styles.landingPage}>
        <Container maxWidth="xl">
            <Card className={styles.glassCard}>
                <CardContent>
                <Navbar />
                    {children}
                </CardContent>
            </Card>
        </Container>
    </Box>
  );
}
