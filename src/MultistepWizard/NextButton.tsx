import React from 'react';
import Button from "@material-ui/core/Button";

const NextButton = ({ setActiveStep, onClick, finalStep }: any) => {
  const handleNext = () => {
    const validate = onClick();
    if(validate == false || finalStep) return;
    setActiveStep((prevActiveStep : any) => prevActiveStep + 1);
  };
  return(
    <Button style={{ margin: 10 }} variant="contained" color="primary" onClick={handleNext}>
      {finalStep ? "Submit" : "Next"}
    </Button>
  )
}

export default NextButton;