import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    container: {
      paddingTop: 40,
      paddingBottom: 40,
      backgroundColor: "#031c3c8f",
    },
    label: {
      color: "white",
    },
  })
);

export default function NavigationContainer({ steps, activeStep, setActiveStep }: any) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className={classes.container}
      >
        {steps.map((label: any, index: any) => (
          <Step key={label} onClick={() => {
            if(index < activeStep ){
              setActiveStep(index)
            }
          }} >
            <StepLabel style={{cursor: "pointer"}} classes={{ label: classes.label }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
