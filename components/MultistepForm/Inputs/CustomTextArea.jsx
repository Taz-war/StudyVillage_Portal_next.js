import { TextField } from '@mui/material'
import { useContext } from 'react'
import { Controller } from 'react-hook-form'
import { FormContext } from '../../../pages/multistepform'
// import { FormContext } from '../../App'

const CustomTextArea = ({ name, rows }) => {
  let [control] = useContext(FormContext)
  return (
    <section style={{ marginBottom: '10px' }}>
      <label className="checkbox-label">{name}</label>
      <br />
      <Controller
        render={({ field }) => (
          <TextField sx={{ mb: 2, mt: 1 }} multiline rows={3} fullWidth />
        )}
        name={name}
        control={control}
      />
    </section>
  )
}

export default CustomTextArea
