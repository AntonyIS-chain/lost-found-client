"use client";
import { useState } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import styles from "../../styles/page.module.css";
import { CustomField } from "../ui/CustomField";
import Image from "next/image";
import useSignUp from "../../hooks/useSignUp"; // Make sure the path is correct
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { signUp, loading } = useSignUp();

  const handleSubmit = async () => {
    setError(null);

    if (!email || !phoneNumber || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const role_id = 3
      const role_name = "Guest"
      const response = await signUp(email, role_id, role_name, password); 

      if (response?.signup?.success) {
        console.log("Signup successful:", response.signup.results);
        router.push("/sign-in"); // Redirect after successful signup
      } else {
        setError(response?.signup?.message || "Sign up failed.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <Box className={styles.sessionBox}>
      <Box className={styles.sessionImageBox}>
        <Image
          src="/images/logo.png"
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
        onChange={(e) => setEmail(e.target.value)}
      />

      <CustomField
        label="Phone Number"
        value={phoneNumber}
        type="tel"
        id="phone-input"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <CustomField
        label="Password"
        value={password}
        type="password"
        id="password-input"
        onChange={(e) => setPassword(e.target.value)}
      />

      <CustomField
        label="Confirm Password"
        value={confirmPassword}
        type="password"
        id="confirm-password-input"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {error && (
        <Typography color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}

      <Box className={styles.buttonSection}>
        <Button
          className={`${styles.button} ${styles.loginButton}`}
          onClick={handleSubmit}
          disabled={loading}
        >
          <Typography className={styles.buttonText}>
            {loading ? "Creating..." : "Create Account"}
          </Typography>
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
