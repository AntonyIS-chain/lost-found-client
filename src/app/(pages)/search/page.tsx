"use client"
import { useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import styles from "../../styles/page.module.css";
import Dashboard from "@/app/components/layout/Dashboard";
import CustomField from "@/app/components/ui/CustomField";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

export default function Page() {
    const router = useRouter(); 
    
    const [searchText, setSearchText] = useState("");
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const ids = [
        { fullName: "John Doe", idNumber: "12345678", location: "Nairobi West", file: "idImage" },
        { fullName: "Jane Smith", idNumber: "23456789", location: "Westlands", file: "idImage" },
        { fullName: "Samuel Lee", idNumber: "34567890", location: "Nairobi East", file: "idImage" },
        { fullName: "Marie Johnson", idNumber: "45678901", location: "Kilimani", file: "idImage" },
    ];

    // Filter ids based on searchText
    const filteredIds = ids.filter((id) =>
        id.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
        id.idNumber.includes(searchText)
    );

    const handleOnClick = (id: string) => {
        if (id) {
            router.push(`/id/${id}`); 
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
                        
                        {/* ID Cards */}
                        <Box>
                            <Grid container spacing={2}>
                                {filteredIds.map((id, index) => (
                                    <Grid  size={{ xs: 12, md: 3}} key={index}>
                                        <Card className={styles.idCard} onClick={() => handleOnClick(id.idNumber)}>
                                            <CardContent>
                                                {/* Display ID Info */}
                                                <Typography variant="h6" component="div">
                                                    {id.fullName}
                                                </Typography>
                                                
                                                <Typography className={styles.idLabelSpan}>
                                                    ID Number:{" "}
                                                    <Typography component="span" className={styles.idLabel}>
                                                        {id.idNumber}
                                                    </Typography>
                                                </Typography>
                                                
                                                <Typography className={styles.idLabelSpan}>
                                                    Location:{" "}
                                                    <Typography component="span" className={styles.idLabel}>
                                                        {id.location}
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
