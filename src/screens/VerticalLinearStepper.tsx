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
    container : {
      paddingTop : 40,
      paddingBottom : 40,
      backgroundColor: "#02162f",
    },
    label: {
      color: "white",
      '& .active' : {
        color : "white"
      }
    }
  })
);

export default function VerticalLinearStepper({ steps, activeStep }: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical" className={classes.container}>
        {steps.map((label : any, index : any) => (
          <Step key={label}>
            <StepLabel classes={{ label: classes.label}}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
