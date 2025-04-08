import { Box,Card ,CardContent,Container} from '@mui/material';

import styles from "../../styles/page.module.css";
import Navbar from './Navbar';


export default function Dashboard({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box className={styles.dashboard}>
      <Container maxWidth="xl">
        <Card className={styles.dashboardCard}>
          <CardContent className={styles.dashboardCardContent}>
            <Navbar />
            {children}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
