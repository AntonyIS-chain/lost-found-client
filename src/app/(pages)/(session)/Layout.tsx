import { Box,Card ,CardContent} from '@mui/material';
import styles from "../../styles/page.module.css";


export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box className={styles.sessionSection}>
      <Card className={styles.sessionCard}>
          <CardContent className={styles.sessionCardContent}>
            {children}
          </CardContent>
        </Card>
    </Box>
  );
}
