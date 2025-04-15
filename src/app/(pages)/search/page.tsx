"use client";
import { useState } from "react";
import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import styles from "../../styles/page.module.css";
import Dashboard from "@/app/components/layout/Dashboard";
import { CustomField } from "@/app/components/ui/CustomField";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useGetIDDocuments from "@/app/hooks/useGetIDDocuments";
import CustomSpinnner from "@/app/components/ui/Spinner";
import CustomError from "@/app/components/ui/Error";

export default function Page() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [idType, setIdType] = useState<"lost" | "found">("lost"); // 👈 default is "lost"

  const { data, loading, error } = useGetIDDocuments(idType); // 👈 depends on idType

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleTypeSwitch = (type: "lost" | "found") => {
    setIdType(type);
    setSearchText(""); // Optional: clear search on switch
  };

  const filteredIds = Array.isArray(data?.results)
  ? data.results.filter((IDdocument) =>
      (IDdocument.full_name ?? "").toLowerCase().includes(searchText.toLowerCase()) ||
      (IDdocument.location ?? "").toLowerCase().includes(searchText.toLowerCase()) ||
      IDdocument.id_number.includes(searchText)
    )
  : [];


  const handleOnClick = (id: string) => {
    if (id) {
      router.push(`/report/${idType}/${id}`);
    }
  };


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

            {/* Toggle Buttons */}
            <Box className={styles.switchBox}>
              <Button
                className={`${styles.switchBoxButton} ${idType === "lost" ? styles.switchBoxButtonActive : ""}`}
                onClick={() => handleTypeSwitch("lost")}
              >
                Lost
              </Button>
              <Button
                className={`${styles.switchBoxButton} ${idType === "found" ? styles.switchBoxButtonActive : ""}`}
                onClick={() => handleTypeSwitch("found")}
              >
                Found
              </Button>
            </Box>
            {error && (
                <CustomError message={error.message || "An error occurred."} />
              )}

            { loading ? (
                <CustomSpinnner />
            ) : (
              <Box sx={{height:"40vh", overflowY: "auto" }}  className={styles.scrollBox}>
                <Grid container spacing={2}>
                  {filteredIds.map((id, index) => (
                    <Grid size={{ xs: 12, md: 3 }} key={index} >
                      <Card
                        className={styles.idCard}
                        onClick={() => handleOnClick(id.id_number)}
                      >
                        <CardContent>
                          <Typography className={styles.idLabelSpan}>
                            Full Name:{" "}
                            <Typography component="span" className={styles.idLabel}>
                              {id.full_name}
                            </Typography>
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
                              {id.location}
                            </Typography>
                          </Typography>

                          <Typography className={styles.idLabelSpan}>
                            Status:{" "}
                            <Typography component="span" className={styles.idLabel}>
                              {id.status}
                            </Typography>
                          </Typography>

                          <Box mt={2}>
                            <Box className={styles.idImageWrapper} sx={{ height: 120, mt: 1 }}>
                              <Image
                                src="/images/idfront.jpg"
                                alt="Kenyan sample ID"
                                width={310}
                                height={100}
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
              )}

           
          </Box>
        </CardContent>
      </Card>
    </Dashboard>
  );
}
