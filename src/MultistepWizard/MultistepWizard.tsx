import React from "react";
import NextButton from "./NextButton";
import NavigationContainer from "./Stepper";

export default function MultistepWizard({ components, formState, stepState}: any) {
  const NextButtonWrapper = ({ onClick = () => console.log("Button Clicked.") }: any) => {
    return (
      <NextButton
        setActiveStep={stepState[1]}
        finalStep={stepState[0] == Object.keys(components).length - 1}
        onClick={onClick}
      />
    );
  };
  
  const handleData = (data : object) => {
    formState[1]({ ...formState[0], ...data });
  }

  const Component = components[Object.keys(components)[stepState[0]]];
  return (
    <>
      <div style={{ display: "flex", width: "18%" }}>
        <NavigationContainer steps={Object.keys(components)} setActiveStep={stepState[1]} activeStep={stepState[0]} />
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <Component
          data={formState[0]}
          handleData={handleData}
          NextButton={NextButtonWrapper}
        />
      </div>
    </>
  );
}
