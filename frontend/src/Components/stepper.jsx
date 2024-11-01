import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FinalApplication from '../Pages/appTracker/finalApplication.jsx';
import LOI from '../Pages/appTracker/LOI.jsx';
import SelectGrant from '../Pages/appTracker/selectGrant.jsx';
import ProposalDevelopment from '../Pages/appTracker/proposalDevelopment.jsx';
import PostSubmission from '../Pages/appTracker/postSubmission.jsx';
import { useParams, useNavigate } from 'react-router-dom';

const DisplayComponent = (activeStep) => {
  // const { stepId } = useParams();

  switch (activeStep) {
    case 0:
      return <SelectGrant />;
    case 1:
      return <LOI />;
    case 2:
      return <ProposalDevelopment />;
    case 3:
      return <FinalApplication />;
    case 4:
      return <PostSubmission />;
    default:
      return <Typography>Step not found!</Typography>; // Handle invalid stepId
  }
};

export const HorizontalNonLinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const [completed, setCompleted] = React.useState({});
  const steps = ['Select a Grant',  'Letter of Intent', 'Proposal Development', 'Proposal Formatting & Submission', 'Post-Submission'];


  // const handleStepChange = (newStep) => {
  //   navigate(`/appTracker/${newStep}`);
  // };

  // const handleNext = () => {
  //   const nextStep = parseInt(stepId, 10) + 1;
  //   if (nextStep < steps.length) {
  //     handleStepChange(nextStep);
  //   }
  // };

  // const handleBack = () => {
  //   const prevStep = parseInt(stepId, 10) - 1;
  //   if (prevStep >= 0) {
  //     handleStepChange(prevStep);
  //   }
  // };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <>
    <Box sx={{ width: '100%'}}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button color="inherit" onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {DisplayComponent(activeStep)}
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button color="inherit" onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button color="inherit" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
                
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>

    </>
  );
  // return (
  //   <Box sx={{ width: '100%' }}>
  //     <Stepper nonLinear activeStep={parseInt(stepId, 10)}>
  //       {steps.map((label, index) => (
  //         <Step key={label}>
  //           <StepButton onClick={() => handleStepChange(index)}>
  //             {label}
  //           </StepButton>
  //         </Step>
  //       ))}
  //     </Stepper>
  //     <div>
  //       {/* Render the step-specific component */}
  //       <DisplayComponent />
  //       <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
  //         <Button
  //           disabled={parseInt(stepId, 10) === 0}
  //           onClick={handleBack}
  //           sx={{ mr: 1 }}
  //         >
  //           Back
  //         </Button>
  //         <Button onClick={handleNext}>
  //           Next
  //         </Button>
  //       </Box>
  //     </div>
  //   </Box>
  // );

  
}