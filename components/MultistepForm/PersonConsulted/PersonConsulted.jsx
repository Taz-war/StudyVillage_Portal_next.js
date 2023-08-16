import { Box } from '@mui/material'
import PersonTableRow from './PersonTableRow'

const PersonConsulted = () => {
  return (
    <Box sx={{ pt: 3 }}>
      <p className="general-text">
        PERSONS CONSULTED IN DEVELOPMENT, REVIEW AND APPROVAL OF SWMS :
      </p>
      <table
        className="table-spacing"
        style={{ width: '100%', paddingTop: '5px' }}
      >
        <thead>
          <tr>
            <th></th>
            <th>Person 1</th>
            <th>Person 2</th>
            <th>Person 3</th>
            <th>Person 4</th>
          </tr>
        </thead>
        <tbody>
          <PersonTableRow row_name="Name" />
          <PersonTableRow row_name="Initial" />
          <PersonTableRow row_name="Date" />
        </tbody>
      </table>
    </Box>
  )
}

export default PersonConsulted
