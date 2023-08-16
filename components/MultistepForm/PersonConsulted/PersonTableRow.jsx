import TableInputField from '../Inputs/TableInputField'

const PersonTableRow = ({ row_name }) => {
  return (
    <tr>
      <td>{row_name}</td>
      <td>
        <TableInputField name={`person1_${row_name}`} />
      </td>
      <td>
        <TableInputField name={`person2_${row_name}`} />
      </td>
      <td>
        <TableInputField name={`person3_${row_name}`} />
      </td>
      <td>
        <TableInputField name={`person4_${row_name}`} />
      </td>
    </tr>
  )
}

export default PersonTableRow
