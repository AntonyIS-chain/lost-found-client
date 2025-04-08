"use client"
import { useState } from "react";
import { Box, Button,Card,CardContent,Grid,Typography } from "@mui/material";
import styles from "../../styles/page.module.css";
import CustomField from "../ui/CustomField";

export default function ReportLostForm() {
  const [idNumber, setIdNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState("");

  const handleidNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdNumber(event.target.value);
  };

  const handlesetFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleSetLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.value);
  };


  return (
    <Card className={styles.reportCard}>
        <CardContent>
            <Box className={styles.sessionBox}>
                {/* Input Section */}
                <Typography className={styles.reportHeader}>Report Lost</Typography>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6}}>
                        <CustomField
                            label="ID Number"
                            value={idNumber}
                            type="text"
                            id="id-number-input"
                            onChange={handleidNumberChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6}}>
                        <CustomField
                            label="Full Name"
                            value={fullName}
                            type="text"
                            id="full-name-input"
                            onChange={handlesetFullNameChange}
                        />
                    </Grid>
                </Grid>
               
                
                <CustomField
                    label="Location Found"
                    value={location}
                    type="text"
                    id="location-input"
                    onChange={handleSetLocationChange}
                />

                <CustomField
                    label="Your Phone Number"
                    value={phone}
                    type="text"
                    id="phone-input"
                    onChange={handlePhoneChange}
                />

                <CustomField
                    label="Upload file"
                    value={file}
                    type="text"
                    id="file-input"
                    onChange={handleUploadChange}
                />

                {/* Button Section */}
                <Box className={styles.buttonSection}>
                    <Button className={`${styles.button} ${styles.loginButton}`}>
                        <Typography className={styles.buttonText}>
                            Report
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </CardContent>
    </Card>
  );
}
