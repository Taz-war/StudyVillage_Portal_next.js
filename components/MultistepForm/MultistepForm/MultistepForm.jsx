import { Button, Step, StepLabel } from '@mui/material'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import * as React from 'react'
import { FormContext } from '../../../pages/multistepform'
import { steps } from './data'
// import './MultistepForm.css'


// const renderPage = (activeStep) => {
//   if (activeStep === 0) {
//     return;
//   }
// };

// const CustomStepBtn = styled((props) => (
//   <StepButton sx={{backgro}}} {...props}>{console.log(props)}</StepButton>
// ))(({ theme}) => ({
// }))
function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  console.log({
    imgRes: arr[1],
    n,
    mime,
  })

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  console.log({ arr: u8arr })

  return new File([u8arr], filename, { type: mime })
}

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 30,
  height: 30,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '& .MuiStepConnector-line ': {
    borderColor: theme.palette.primary.main,
  },
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,
  }),
  ...(ownerState.icon <= ownerState.activeStep + 1 && {
    backgroundColor: '#2F9EEC',
  }),
}))

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#4d8ef1',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#4d8ef1',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#D2D2D2',
    borderRadius: 1,
  },
}))

export default function MultistepForm() {
  const [
    control,
    register,
    handleSubmit,
    watch,
  ] = React.useContext(FormContext);
  const [activeStep, setActiveStep] = React.useState(0)
  const [completed, setCompleted] = React.useState({})
  const [stepConnector, setStepConnector] = React.useState(false)

  function ColorlibStepIcon(props) {
    const { active, completed, className, icon } = props

    return (
      <div className={`${activeStep + 1 === icon && 'stepper-icon-wrapper'}`}>
        <ColorlibStepIconRoot
          ownerState={{ completed, active, icon, activeStep }}
          className={className}
        >
          {icon}
        </ColorlibStepIconRoot>
      </div>
    )
  }
  console.log('outer', activeStep)

  const totalSteps = () => {
    return steps.length
  }
  const onSubmit = (data) => {
    // data['signature1'] = signature1
    // data['signature2'] = signature2
    // data['signature3'] = signature3

    // var url = data['signature1']
    // var file = dataURLtoFile(data['signature1'], 'signature1.png')
    // ZOHO.CRM.API.attachFile({
    //   Entity: 'Leads',
    //   RecordID: '1915689000037526018',
    //   File: { Name: 'signature1.png', Content: file },
    // }).then(function (data) {
    //   console.log(data)
    // })
    // var url = data['signature2']
    // var file = dataURLtoFile(data['signature2'], 'signature2.png')
    // ZOHO.CRM.API.attachFile({
    //   Entity: 'Leads',
    //   RecordID: '1915689000037526018',
    //   File: { Name: 'signature2.png', Content: file },
    // }).then(function (data) {
    //   console.log(data)
    // })
    // var url = data['signature3']
    // var file = dataURLtoFile(data['signature3'], 'signature3.png')
    // ZOHO.CRM.API.attachFile({
    //   Entity: 'Leads',
    //   RecordID: '1915689000037526018',
    //   File: { Name: 'signature3.png', Content: file },
    // }).then(function (data) {
    //   console.log(data)
    // })
    console.log(data)
  }
  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step) => () => {
    setActiveStep(step)
  }

  const handleComplete = (index) => {
    const newCompleted = completed
    for (let i = 0; i <= index; i++) {
      newCompleted[i] = true
    }
    setCompleted(newCompleted)
    console.log(completed)
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }
  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      <Stepper activeStep={activeStep} connector={<ColorlibConnector />} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={index} completed={completed[index]}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              onClick={handleStep(index)}
              index={index}
              activeStep={activeStep}
              sx={{ cursor: 'pointer', color: 'red' }}
            >{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <React.Fragment>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              {steps[activeStep]?.input}

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  variant="contained"
                  onClick={handleBack}
                  sx={{
                    mr: 1,
                    visibility: `${activeStep === 0 && 'hidden'}`,
                  }}
                >
                  Back
                </Button>
                <Box>
                  {activeStep === steps.length - 1 && (
                    <Button
                      type="submit"
                      variant="contained"
                      color="success"
                      sx={{ mr: 1 }}
                    >
                      Submit
                    </Button>
                  )}
                  {activeStep !== steps.length - 1 && (
                    <Button onClick={handleNext} variant="contained">
                      Next
                    </Button>
                  )}
                </Box>
              </Box>
            </form>
          </Box>
        </React.Fragment>
      </div>
    </Box>
  )
}

{
  /* {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))} */
}
