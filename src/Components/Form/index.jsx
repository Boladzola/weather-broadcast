import { Box, Button, TextField } from "@mui/material";
import React from "react";
import styles from "./index.module.scss";

const Form = ({ weatherMethod }) => {
  return (
    <form onSubmit={weatherMethod}>
      <Box className={styles.form}>
        <TextField
          label="enter the City"
          variant="outlined"
          type="text"
          placeholder="City"
          name="city"
        />
        <Button type="submit" variant="contained">
          Get weather
        </Button>
      </Box>
    </form>
  );
};

export default Form;
