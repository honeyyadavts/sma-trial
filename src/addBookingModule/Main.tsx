import React from 'react';
import MultistepWizard from '../MultistepWizard/MultistepWizard';
import PatientDetails from './PatientDetails';
import OriginDestination from './OriginDestination';
import PickDropTime from './PickDropTime';

const compMap = {
  "Patient Details": PatientDetails,
  "Origin & Destination": OriginDestination,
  "Pickup/Dropoff Time": PickDropTime
};

const Main = () => {
  const stepState = React.useState(0);
  const formState = React.useState({});

  return (
    <div style={{display:"flex", flex:1, flexDirection:"row"}}>
      <MultistepWizard 
        // data={formData}
        // handleData={handleData}
        // activeStep={activeStep}
        // setActiveStep={setActiveStep}
        formState={formState}
        stepState={stepState}
        components={compMap}
      />
    </div>
  );
}

export default Main;
