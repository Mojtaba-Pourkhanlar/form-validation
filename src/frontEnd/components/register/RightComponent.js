import { Box } from "@mui/material";
import register from "../../images/register.svg";

export const RightComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}>
      <Box
        sx={{
          width: {
            md: "100%",
            lg: "80%",
          },
        }}>
        <img src={register} alt="registerSVG" style={{ width: "100%" }} />
      </Box>
    </Box>
  );
};

