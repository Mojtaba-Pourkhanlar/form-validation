import { useState, useEffect } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
// Icon
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { validate, notify } from "../../helper";

export const LeftComponent = () => {
  // States
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [passwordType, setPasswordType] = useState(false);

  // Eye Password
  //#region
  const togglePassword = () => {
    setPasswordType(!passwordType);
  };
  //#endregion

  // Submit form
  //#region
  useEffect(() => {
    window.scrollTo(0, 0);
    setErrors(validate(data, "SignUp"));
  }, [data]);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("https://apingweb.com/api/register", data)
      .then((response) => {
        if (response.data.status === 200) {
          notify(`${response.data.message} 😉`, "success");
          //   navigate("/login");
        }
      })
      .catch((err) => {
        notify(`${err.response.data.errors[0]} 😒`, "error");
      });
    setTouched({
      name: true,
      email: true,
      phone: true,
      password: true,
      password_confirmation: true,
    });
  };

  // Style
  //#region

  const password = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    outline: "none",
    height: "100%",
  };
  const passToggle = {
    position: "absolute",
    width: "calc(50px - 100%)",
    right: "30px",
    zIndex: "100",
    bottom: "10px",
    cursor: "pointer",
  };

  const errorText = {
    margin: "5px 0 7px 0",
    width: " fit-content",
    fontSize: "1.2rem",
    color: "#dc3545",
    padding: "0 5px",
    borderRadius: "3px",
    backgroundColor: "#ff00002d",
  };

  const button = {
    width: "100%",
    height: "50px",
    mt: "50px",
    backgroundColor: "#084430",
  };

  const CssTextField = {
    margin: "30px 0 3px",
    width: "100%",
    "& label": {
      color: "#212121",
    },
    "& label.Mui-focused": {
      color: "#048830",
    },
    "& input": {
      color: "#212121",
      fontSize: "20px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#048830",
    },
  };
  //#endregion

  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: {
            xs: "10%",
            lg: "15%",
          },
          alignItems: "center",
          px: {
            xs: "50px",
            sm: "100px",
            md: "50px",
            lg: "100px",
            xl: "200px",
          },
        }}>
        <Typography
          variant="h4"
          sx={{
            color: "#084430",
            fontWeight: 600,
            textAlign: "center",
          }}>
          Signup
        </Typography>

        <form onSubmit={submitHandler} style={{ width: "inherit" }}>
          <Grid item xs={12}>
            <TextField
              sx={CssTextField}
              label="Name"
              variant="standard"
              name="name"
              value={data.name}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.name && touched.name && (
              <Typography variant="span" style={errorText}>
                {errors.name}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <TextField
              sx={CssTextField}
              label="Email"
              variant="standard"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.email && touched.email && (
              <Typography variant="span" style={errorText}>
                {errors.email}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <TextField
              sx={CssTextField}
              label="Phone"
              variant="standard"
              type="number"
              name="phone"
              value={data.phone}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.phone && touched.phone && (
              <Typography variant="span" style={errorText}>
                {errors.phone}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Box component="div" sx={password}>
              <TextField
                sx={CssTextField}
                variant="standard"
                label="Password"
                name="password"
                type={passwordType ? "text" : "password"}
                value={data.password}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              <Box component="span" sx={passToggle} onClick={togglePassword}>
                {passwordType ? (
                  <VisibilityOutlined color="success" />
                ) : (
                  <VisibilityOffOutlined color="error" />
                )}
              </Box>
            </Box>
            {errors.password && touched.password && (
              <Typography variant="span" style={errorText}>
                {errors.password}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Box component="div" sx={password}>
              <TextField
                sx={CssTextField}
                variant="standard"
                label="Confirm Password"
                name="password_confirmation"
                type={passwordType ? "text" : "password"}
                value={data.password_confirmation}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              <Box component="span" sx={passToggle} onClick={togglePassword}>
                {passwordType ? (
                  <VisibilityOutlined color="success" />
                ) : (
                  <VisibilityOffOutlined color="error" />
                )}
              </Box>
            </Box>
            {errors.password_confirmation && touched.password_confirmation && (
              <Typography variant="span" style={errorText}>
                {errors.password_confirmation}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" type="submit" sx={button}>
              Signup
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};
