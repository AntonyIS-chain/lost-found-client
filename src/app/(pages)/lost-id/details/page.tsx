"use client";
import { useSearchParams } from "next/navigation";  // Import useSearchParams
import { Card, CardContent, Typography, Box ,Grid} from "@mui/material";
import Dashboard from "@/app/components/layout/Dashboard";
import styles from "../../../styles/page.module.css";
import Image from "next/image";
import useGetLostId from "@/app/hooks/getLostIdDetails";

const LostIdDetailsPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data, loading, error } = useGetLostId(id as string); 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const idDetails = data?.getLostId.results;

  return (
    <Dashboard>
        <Grid container spacing={2}>
            <Grid  size={{ xs: 12, md: 4}}>
                <Card className={styles.idCard}>
                    <CardContent>
                        {/* Display ID Info */}
                        <Typography variant="h6" component="div">
                            {idDetails?.full_name}
                        </Typography>

                        <Typography className={styles.idLabelSpan}>
                            ID Number:{" "}
                            <Typography component="span" className={styles.idLabel}>
                            {idDetails?.id_number}
                            </Typography>
                        </Typography>

                        <Typography className={styles.idLabelSpan}>
                            Location:{" "}
                            <Typography component="span" className={styles.idLabel}>
                            {idDetails?.location_found}
                            </Typography>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid  size={{ xs: 12, md: 4}}>
                <Card className={styles.idCard}>
                    <CardContent>
                        {/* Image or Placeholder for ID File */}
                        <Box mt={2}>
                            <Box className={styles.idImageWrapper} sx={{ height: 120, mt: 1 }}>
                            <Image
                                src="/images/idfront.jpg"
                                alt="Kenyan sample ID"
                                width={310}
                                height={120}
                                layout="responsive"
                                className={styles.idImage}
                            />
                            </Box>
                    </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid  size={{ xs: 12, md: 4}}>
                <Card className={styles.idCard}>
                    <CardContent>
                        {/* Display ID Info */}
                        <Typography variant="h6" component="div">
                            {idDetails?.full_name}
                        </Typography>

                        <Typography className={styles.idLabelSpan}>
                            ID Number:{" "}
                            <Typography component="span" className={styles.idLabel}>
                            {idDetails?.id_number}
                            </Typography>
                        </Typography>

                        <Typography className={styles.idLabelSpan}>
                            Location:{" "}
                            <Typography component="span" className={styles.idLabel}>
                            {idDetails?.location_found}
                            </Typography>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

     
    </Dashboard>
  );
};

export default LostIdDetailsPage;