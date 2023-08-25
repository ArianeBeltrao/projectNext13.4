import { Button } from "@mui/material";
import { CreditCard } from "@mui/icons-material";

const PixButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        mt: 2,
        width: "100%",
        height: "52px",
        backgroundColor: "#4CB8A9",
        boxShadow: "none",
        fontSize: '16px'
      }}
    >
      Pix
    </Button>
  );
};

export default PixButton;
