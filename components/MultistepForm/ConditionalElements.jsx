import { Typography } from '@mui/material'
import CustomSlider from './Inputs/CustomSlider'

const ConditionalElements = ({
  parentLabel,
  description,
  sliderExtra,
  sliderNote,
}) => {
  const labelArray = parentLabel.split('_')
  return (
    <>
      <Typography color="primary" className="general-text">
        How hazards will be controlled?{' '}
        {sliderExtra && <span className="general-text">{sliderExtra}</span>}
      </Typography>

      <Typography className="general-text-light">
        {description}
        {sliderNote && <p className="general-text">{sliderNote}</p>}
      </Typography>
      <CustomSlider
        label="Inherent Risk Rating"
        name={`${labelArray[0]}_${labelArray[1]}_Inherent_Risk_Rating`}
      />
      <br />
      <CustomSlider
        label="Residual Risk Rating"
        name={`${labelArray[0]}_${labelArray[1]}_Residual`}
      />
    </>
  )
}

export default ConditionalElements
