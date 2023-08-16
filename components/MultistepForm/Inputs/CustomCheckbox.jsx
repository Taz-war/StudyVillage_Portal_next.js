import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { Controller } from "react-hook-form";
import { FormContext } from "../../../pages/multistepform";

const CustomCheckbox = ({ label, name }) => {
  const [control, result, register, handleSubmit, watch] =
    useContext(FormContext);
  // const myResult = watch(name);
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                onChange={(e) => field.onChange(e.target.checked)}
                checked={field.value}
              />
            }
            label={label}
          />
        )}
      />
    </Box>
  );
};

export default CustomCheckbox;
