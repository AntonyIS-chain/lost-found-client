import { Card, CardContent } from "@mui/material";
import Image from "next/image";
import styles from "../../styles/page.module.css";

export default function IdCard() {
  return (
    <Card className={styles.idCard}>
      <CardContent className={styles.idCardCardContent}>
        <Image
          src="/images/idfront.jpg"
          alt="Kenyan sample ID"
          layout="fill"
          objectFit="cover"
          className={styles.idImage}
        />
      </CardContent>
    </Card>
  );
}
