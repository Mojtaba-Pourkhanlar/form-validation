import { Grid } from "@mui/material";
import React from "react";
import { LeftComponent } from "./register/LeftComponent";
import { RightComponent } from "./register/RightComponent";

export const RegisterContainer = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={5}
        sx={{
          background: "#f1f1f1",
          minHeight: "100vh",
        }}>
        <LeftComponent />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        lg={7}
        sx={{
          backgroundColor: "#121519",
          minHeight: "100vh",
          display: {
            xs: "none",
            md: "flex",
          },
        }}>
        <RightComponent />
      </Grid>
    </Grid>
  );
};
