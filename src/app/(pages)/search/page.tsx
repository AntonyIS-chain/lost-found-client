"use client";
import { useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import styles from "../../styles/page.module.css";
import Dashboard from "@/app/components/layout/Dashboard";
import {CustomField} from "@/app/components/ui/CustomField";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useGetLostIds from "@/app/hooks/useGetLostIds";

export default function Page() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const { data, loading, error } = useGetLostIds(); // Use the custom hook to fetch data

  // Handle search input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  // Filter the fetched ids based on searchText
  const filteredIds = data?.getLostIds.results.filter((id) =>
    id.full_name.toLowerCase().includes(searchText.toLowerCase()) ||
    id.id_number.includes(searchText)
  ) || [];

  const handleOnClick = (id: string) => {
    if (id) {
      router.push(`/lost-id/details?id=${id}`);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Dashboard>
      
      <Card className={styles.cardHero}>
        <CardContent>
          <Box className={styles.idListBox}>
            {/* Search Input */}
            <Box mb={2}>
              <CustomField
                label="Search..."
                value={searchText}
                type="text"
                id="search-input"
                onChange={handleChange}
              />
            </Box>

            {/* ID Cards */}
            <Box>
              <Grid container spacing={2}>
                {filteredIds.map((id, index) => (
                <Grid  size={{ xs: 12, md: 3}} key={index}>
                    <Card
                      className={styles.idCard}
                      onClick={() => handleOnClick(id.id_number)}
                    >
                      <CardContent>
                        {/* Display ID Info */}
                        <Typography variant="h6" component="div">
                          {id.full_name}
                        </Typography>

                        <Typography className={styles.idLabelSpan}>
                          ID Number:{" "}
                          <Typography component="span" className={styles.idLabel}>
                            {id.id_number}
                          </Typography>
                        </Typography>

                        <Typography className={styles.idLabelSpan}>
                          Location:{" "}
                          <Typography component="span" className={styles.idLabel}>
                            {id.location_found}
                          </Typography>
                        </Typography>

                        {/* Image or Placeholder for ID File */}
                        <Box mt={2}>
                          <Typography variant="caption" className={styles.idLabelSpan}>
                            ID Image
                          </Typography>
                          <Box
                            className={styles.idImageWrapper}
                            sx={{ height: 120, mt: 1 }}
                          >
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
                ))}
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Dashboard>
  );
}
