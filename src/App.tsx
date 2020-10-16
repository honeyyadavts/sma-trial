import React from 'react';
import './App.css';
import VerticalLinearStepper from './screens/VerticalLinearStepper';

import RightSideComponent from './screens/RightSideComponent';

function getSteps() {
  return [
    "Patient Details",
    "Origin & Destination",
    "Pickup/Dropoff Time",
    "Allergies",
    "Conditions",
    "Observations",
    "Medications",
    "Review & Sumbit"
  ];
}

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [fullData, setFullData] = React.useState({});
  const steps = getSteps();

  const handleData = (data : object) => {
    setFullData({ ...fullData, ...data });
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div style={{display:"flex", flex:1, flexDirection:"row"}}>
      <div style={{display:"flex", width:"18%" }}>
        <VerticalLinearStepper steps={steps} activeStep={activeStep} />
      </div>
      <div style={{display:"flex", flex:1}}>
        <RightSideComponent data={fullData} handleData={handleData} handleNext={handleNext} activeStep={activeStep} />
      </div>
    </div>
  );
}

export default App;
