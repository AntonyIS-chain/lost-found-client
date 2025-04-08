"use client";
import { useState } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import styles from "../../styles/page.module.css";
import CustomField from "../ui/CustomField";
import Image from "next/image";
import useSignIn from "@/app/hooks/useSignIn";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const { signIn, loading, error } = useSignIn();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    if (!email || !password) {
      setFormError("Please fill in all fields.");
      return;
    }

    try {
      const data = await signIn(email, password);

      if (data?.login.success) {
        // Store token, redirect, or notify success
        console.log("Login successful!", data);
        localStorage.setItem("accessToken", data.login.results.access_token);
        // router.push("/dashboard") or similar
      } else {
        setFormError(data?.login.message || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setFormError("Something went wrong. Please try again later.");
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
        label="Password"
        value={password}
        type="password"
        id="password-input"
        onChange={handlePasswordChange}
      />

      {(formError || error) && (
        <Typography color="error" sx={{ mt: 1 }}>
          {formError || error?.message}
        </Typography>
      )}

      <Box className={styles.buttonSection}>
        <Button
          className={`${styles.button} ${styles.loginButton}`}
          onClick={handleSubmit}
          disabled={loading}
        >
          <Typography className={styles.buttonText}>
            {loading ? "Signing In..." : "Sign In"}
          </Typography>
        </Button>
      </Box>

      <Box className={styles.sessionBottonSection}>
        <Typography className={styles.sessiontextBottom}> Or </Typography>

        <Link href="/sign-up">
          <Typography className={styles.sessiontextBottom}>Create Account</Typography>
        </Link>
      </Box>
    </Box>
  );
}
