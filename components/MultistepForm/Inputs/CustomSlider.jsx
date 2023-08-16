import { FormControl, Slider } from '@mui/material'
import { useContext } from 'react'
import { Controller } from 'react-hook-form'
import { FormContext } from '../../../pages/multistepform'
// import { FormContext } from '../../App'

const marks = [
  {
    value: 0,
    label: '0',
  },

  {
    value: 10,
    label: '10',
  },
]

function valuetext(value) {
  return `${value}`
}

const CustomSlider = ({ label, name }) => {
  const [control, result, register, handleSubmit, watch] = useContext(
    FormContext
  )
  // const value = watch(name)
  return (
    <FormControl sx={{margin: '8px 0px'}}>
      <b className="slider-label">{label}</b>
      <Controller
        render={({ field }) => (
          <Slider
            defaultValue={0}
            getAriaValueText={valuetext}
            // valueLabelDisplay={`${value === undefined ? 'auto' : 'on'}`}
            {...field}
            step={1}
            marks={marks}
            min={0}
            max={10}
          />
        )}
        name={name}
        control={control}
      />
      {/* {console.log(value)} */}
    </FormControl>
  )
}

export default CustomSlider
