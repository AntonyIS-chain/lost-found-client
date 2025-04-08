"use client";
import { useState } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import styles from "../../styles/page.module.css";
import CustomField from "../ui/CustomField";
import Image from "next/image";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!email || !phoneNumber || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phoneNumber,
          password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Sign up failed.");
        return;
      }

      // Handle successful signup (redirect, show success message, etc.)
      console.log("Account created successfully!");
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <Box className={styles.sessionBox}>
      <Box className={styles.sessionImageBox}>
        <Image
          src="/images/appIcon.png"
          alt="Kenyan sample ID"
          width={100}
          height={100}
          className={styles.idImage}
        />
      </Box>

      <CustomField
        label="Email Address"
        value={email}
        type="email"
        id="email-input"
        onChange={handleEmailChange}
      />

      <CustomField
        label="Phone Number"
        value={phoneNumber}
        type="tel"
        id="phone-input"
        onChange={handlePhoneNumberChange}
      />

      <CustomField
        label="Password"
        value={password}
        type="password"
        id="password-input"
        onChange={handlePasswordChange}
      />

      <CustomField
        label="Confirm Password"
        value={confirmPassword}
        type="password"
        id="confirm-password-input"
        onChange={handleConfirmPasswordChange}
      />

      {error && (
        <Typography color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}

      <Box className={styles.buttonSection}>
        <Button className={`${styles.button} ${styles.loginButton}`} onClick={handleSubmit}>
          <Typography className={styles.buttonText}>Create Account</Typography>
        </Button>
      </Box>

      <Box className={styles.sessionBottonSection}>
        <Typography className={styles.sessiontextBottom}> Or </Typography>

        <Link href="/sign-in">
          <Typography className={styles.sessiontextBottom}>Sign In</Typography>
        </Link>
      </Box>
    </Box>
  );
}
