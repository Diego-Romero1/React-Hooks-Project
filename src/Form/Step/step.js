import React, { useState, useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import { CounterContext } from "../../Context"

const Step = ({ data, step, pasos }) => {
  const { inputs, buttonText, onSubmit } = data;

  const counterData = useContext(CounterContext);

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={onSubmit}
    >
        <strong>Es valor del contador es: {counterData.count}</strong>
      {inputs.map((input, i) => {
        const { label, type, value, valid, onChange, helperText, validator } =
          input;

        return (
          <TextField
            key={i}
            label={label}
            variant="standard"
            fullWidth
            margin="dense"
            type={type}
            error={valid === false}
            helperText={valid === false && helperText}
            value={value}
            onChange={(e) => onChange(e,step, i, validator)}
          />
        );
      })}

      <Button variant="contained" type="submit">
        {buttonText}
      </Button>
    </Box>
  );
};

export default Step;