import { TextField } from '@mui/material'
import { useContext } from 'react'
import { Controller } from 'react-hook-form'
import { FormContext } from '../../../pages/multistepform'
// import { FormContext } from '../../App'
// import '../../App.css'

const CustomTextField = ({ label, name, ...rest }) => {
  let [control, result, register] = useContext(FormContext)
  return (
    <section style={{ marginBottom: 7 }}>
      <label className="checkbox-label">{label}</label>
      <Controller
        render={({ field }) => (
          <TextField sx={{ mb: 2, mt: 1 }} fullWidth {...field}></TextField>
        )}
        name={name}
        control={control}
      />
    </section>
  )
}

export default CustomTextField
