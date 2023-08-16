import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useContext } from 'react'
import { Controller } from 'react-hook-form'
import { FormContext } from '../../../pages/multistepform'
// import { FormContext } from '../../App'

const CustomOption = ({ label, name, items, warning, component }) => {
  const [control, result, register, handleSubmit, watch] = useContext(
    FormContext
  )
  const condition = watch(name)
  return (
    <>
      <p className="radio-label ">
        {label}
        {warning && (
          <span className="option-warning">Is it a risk at this site?</span>
        )}
      </p>
      <Controller
        render={({ field }) => (
          <RadioGroup {...field} row defaultValue={false}>
            {[
              { label: 'yes', value: true },
              { label: 'no', value: false },
            ].map((item, index) => (
              <FormControlLabel
                key={index}
                value={item.value}
                control={<Radio />}
                label={item.label}
              />
            ))}
          </RadioGroup>
        )}
        name={name}
        control={control}
      />
      {condition === 'true' ? component : ''}
    </>
  )
}

export default CustomOption
