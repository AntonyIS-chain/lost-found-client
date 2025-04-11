import { Box, TextField,Typography } from "@mui/material";

type Props = {
  label: string;
  value: string;
  type: string;
  id: string;
  error?: boolean;
  helperText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
};


type CustomFileInputProps = {
  label: string;
  id: string;
  accept?: string;
  error?: boolean;
  helperText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export  function CustomField({
  label,
  value,
  type,
  id,
  error = false,
  helperText = "",
  onChange,
}: Props) {
  return (
    <Box>
      <TextField
        id={id}
        label={label}
        value={value}
        type={type}
        variant="outlined"
        fullWidth
        error={error}
        helperText={helperText}
        onChange={onChange} 
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", 
              borderRadius: "12px", 
              border: "1px solid rgba(255, 255, 255, 0.2)", 
            //   boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", 
            },
            "&:hover fieldset": {
              borderColor: "white", 
            //   boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.47)", 
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", 
            //   boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.6)", 
            },
          },
          "& .MuiInputLabel-root": {
            color: "white", 
            fontFamily: "'Outfit', sans-serif",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white", 
            fontFamily: "'Outfit', sans-serif", 
          },
          "& .MuiInputBase-input": {
            color: "white", 
            fontFamily: "'Outfit', sans-serif", 
          },
        }}
      />
    </Box>
  );
}




export function CustomFileInput({
  label,
  id,
  accept,
  error = false,
  helperText = "",
  onChange,
}: CustomFileInputProps) {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography sx={{fontFamily:"'Outfit', sans-serif", color:"#fff"}}>
        {label}
      </Typography>
      <input
        id={id}
        type="file"
        accept={accept}
        onChange={onChange}
        style={{
          color: "white",
          background: "transparent",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          padding: "10px",
          borderRadius: "12px",
          fontFamily: "'Outfit', sans-serif",
          width: "100%",
          height:"44px"
        }}
      />
      {helperText && (
        <Typography
          sx={{
            color: error ? "#f44336" : "white",
            mt: 1,
            fontSize: "12px",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          {helperText}
        </Typography>
      )}
    </Box>
  );
}