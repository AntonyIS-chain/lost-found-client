"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import Dashboard from "@/app/components/layout/Dashboard";
import styles from "../../../../styles/page.module.css";
import Image from "next/image";
import useGetIDDocument from "@/app/hooks/useGetIDDocument"; // ✅ import the correct hook
import CustomSpinnner from "@/app/components/ui/Spinner";
import CustomError from "@/app/components/ui/Error";

const LostIdDetailsPage = () => {
  const params = useParams();
  const id = params.id as string;
  const idType = params.idType as string;

  const { data, loading, error } = useGetIDDocument(id, idType); 


  const idDetails = data?.results;

  return (
    <Dashboard>
      {error && (
        <CustomError message={error.message || "An error occurred."} />
      )}
      {loading ? (
        <CustomSpinnner />
      ) : ( 
        <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }} >
          <Card className={styles.idCard}>
            <CardContent>
            <Typography className={styles.idLabelSpan}>
              Full Name:{" "}
              <Typography component="span" className={styles.idLabel}>
                {idDetails?.full_name}
              </Typography>
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
                  {idDetails?.location}
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} >
          <Card className={styles.idCard}>
            <CardContent>
              <Box mt={2}>
                <Box className={styles.idImageWrapper} sx={{ height: 120 }}>
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

        <Grid size={{ xs: 12, md: 4 }} >
          <Card className={styles.idCard}>
            <CardContent>
              <Typography variant="h6">{idDetails?.full_name}</Typography>

              <Typography className={styles.idLabelSpan}>
                ID Number:{" "}
                <Typography component="span" className={styles.idLabel}>
                  {idDetails?.id_number}
                </Typography>
              </Typography>

              <Typography className={styles.idLabelSpan}>
                Location:{" "}
                <Typography component="span" className={styles.idLabel}>
                  {idDetails?.location}
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      ) }

    </Dashboard>
  );
};

export default LostIdDetailsPage;
