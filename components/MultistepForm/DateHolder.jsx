import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import { Box } from '@mui/material'

const DateHolder = () => {
  return (
    <>
      <p className="general-text">Date</p>
      <Box sx={{ display: 'flex', marginBottom: '10px' }}>
        <Box
          sx={{
            width: '355px',
            height: '30px',

            backgroundColor: '#f5f5f5',
          }}
        ></Box>
        <CalendarMonthOutlinedIcon />
      </Box>
    </>
  )
}

export default DateHolder
