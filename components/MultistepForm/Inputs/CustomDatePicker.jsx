import DateAdapter from '@mui/lab/AdapterMoment'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { Box, TextField } from '@mui/material'
import { styled } from '@mui/system'
import moment from 'moment'
import React, { useContext } from 'react'
import { FormContext } from '../../../pages/multistepform'
// import { FormContext } from '../../App'

const CustomInputLabel = styled('label')(({ theme }) => ({
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '21px',
  marginTop: '15px',
  marginRight: '20px',
  display: 'inline-block',
  width: '100px',
  whiteSpace: 'initial',
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
}))

const CustomDatePicker = ({ name }) => {
  const [control] = useContext(FormContext)
  const [value, setValue] = React.useState(moment().format('DD-MM-YYYY'))
  const handleChange = (newValue) => {
    let date = moment(newValue).format('DD-MM-YYYY')
    setValue(date)
  }
  return (
    <Box sx={{ mb: 3 }}>
      <label className="general-text">Date</label>
      <br />
      <LocalizationProvider dateAdapter={DateAdapter}>
        {/* <Controller
          name={name}
          control={control}
          render={({ field: { ref, ...rest } }) => (
            
          )}
        /> */}
        <DesktopDatePicker
          value={value}
          onChange={handleChange}
          disabled
          renderInput={(params) => (
            <TextField sx={{ width: 355 }} {...params} />
          )}
        />
      </LocalizationProvider>
    </Box>
  )
}

export default CustomDatePicker
