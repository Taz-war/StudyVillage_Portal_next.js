import { Box, TextField } from '@mui/material'
import { useContext } from 'react'
import { Controller } from 'react-hook-form'
import { FormContext } from '../../../pages/multistepform'
// import { FormContext } from '../../App'
// import '../../App.css'

const TableInputField = ({ name }) => {
  let [control, result, register] = useContext(FormContext)
  return (
    <Box sx={{ margin: '0px 10px' }}>
      <Controller
        render={({ field }) => <TextField fullWidth {...field}></TextField>}
        name={name}
        control={control}
      />
    </Box>
  )
}

export default TableInputField
