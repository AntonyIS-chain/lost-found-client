import React, { useEffect, useState } from "react";
import { CircularProgress, Box, Typography, Button } from "@mui/material";

interface CustomErrorProps {
  onRetry?: () => void;
  message: string;  // Ensure we pass an error message to display
}

const CustomError: React.FC<CustomErrorProps> = ({ onRetry, message }) => {
  const [showError, setShowError] = useState(false);
  console.log("error", message)
  useEffect(() => {
    if (message) {
      setShowError(true);
    }
  }, [message]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      {showError ? (
        <>
          <Typography variant="h6" color="error" gutterBottom>
            Oops! Something went wrong.
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {message}
          </Typography>
          {onRetry && (
            <Button variant="outlined" onClick={onRetry} sx={{ mt: 2 }}>
              Retry
            </Button>
          )}
        </>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default CustomError;
