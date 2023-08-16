import MultistepForm from "../components/MultistepForm/MultistepForm/MultistepForm";
import { useForm } from "react-hook-form";
import { createContext } from "react";
import { Box, Typography } from "@mui/material";

export const FormContext = createContext();

const Multistepform = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();

  return (

    <Box sx={{pb: 3}}>
      <Box
      sx={{
        maxWidth: '800px',
        margin: '30px auto 0px auto',
        border: '1px solid #d6d6d6',
        boxShadow: '0 0px 3px #e1e1e1',
        borderRadius: '2px',
        bgcolor: 'white',
      }}
    >
      <Box
        sx={{
          padding: '10px 0px',
          backgroundColor: '#494949',
          color: '#fff',
          width: '100%',
        }}
      >
        <Typography variant="h5" sx={{ml: 2, color: 'white'}}>
        _ELICOS A1
        </Typography>
      </Box>

      <FormContext.Provider
        value={[control, register, handleSubmit, watch]}
      >
        <Box sx={{ padding: '0px 30px 20px 30px', minHeight: '700px' }}>
          <MultistepForm />
        </Box>
      </FormContext.Provider>
    </Box>
    </Box>

  );
};

export default Multistepform;
