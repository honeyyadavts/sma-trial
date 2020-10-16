import React from "react";
import PatientDetails from './PatientDetails';
import OriginDestination from './OriginDestination';
import PickDropTime from './PickDropTime';

const Success = ({ data } : any) => {
  return(
    <div style={{display:"flex", flex:1}}>
      <div style={{display:"flex", flex:1, flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div style={{fontSize: 40}}>Your details are submitted successfully.</div>
        <div style={{fontSize: 20}}>{JSON.stringify(data)}</div>
      </div>
    </div>
  );
}

const componentMap : any = [
  PatientDetails, OriginDestination, PickDropTime, Success
];

export default function ContentContainer({ NextButton, handleData, errors, handleErrors, activeStep, data }: any) {
  const Component = componentMap[activeStep];
  return <Component data={data} errors={errors} handleErrors={handleErrors} NextButton={NextButton} handleData={handleData} />;
}
