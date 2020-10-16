import React from "react";
import TextField from '@material-ui/core/TextField';

const PatientDetails = ({ NextButton, handleData, errors, handleErrors } : any) => {
  return(
    <div style={{display:"flex", flex:1, flexDirection: "column"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"flex-start"}}>
        <div style={{fontSize: 40}}>
          Patient Details
        </div>
        <NextButton inputFeilds={["textFeild1", "textFeild2"]} />
      </div>
      <div style={{display:"flex", flex:1, flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
        <TextField error={errors[0]} onChange={(e) => {handleErrors(e, 0); handleData({ textFeild1 : e.target.value }) }} style={{margin:20}} label="Name" variant="outlined" />
        <TextField error={errors[1]} onChange={(e) => {handleErrors(e, 1); handleData({ textFeild2 : e.target.value }) }} style={{margin:20}} label="Surname" variant="outlined" />
      </div>
    </div>
  );
}

const OriginDestination = ({ NextButton, handleData, errors, handleErrors } : any) => {
  return(
    <div style={{display:"flex", flex:1, flexDirection: "column"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"flex-start"}}>
        <div style={{fontSize: 40}}>
        Origin & Destination
        </div>
        <NextButton inputFeilds={["textFeild3", "textFeild4"]} />
      </div>
      <div style={{display:"flex", flex:1, flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
        <TextField error={errors[2]} onChange={(e) => {handleErrors(e, 2); handleData({ textFeild3 : e.target.value }) }} style={{margin:20}} label="Name" variant="outlined" />
        <TextField error={errors[3]} onChange={(e) => {handleErrors(e, 3); handleData({ textFeild4 : e.target.value }) }} style={{margin:20}} label="Surname" variant="outlined" />
      </div>
    </div>
  );
}

const PickDropTime = ({ NextButton, handleData, errors, handleErrors } : any) => {
  return(
    <div style={{display:"flex", flex:1, flexDirection: "column"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"flex-start"}}>
        <div style={{fontSize: 40}}>
          Pickup/Dropoff Time
        </div>
        <NextButton inputFeilds={["textFeild5", "textFeild6"]} />
      </div>
      <div style={{display:"flex", flex:1, flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
        <TextField error={errors[4]} onChange={(e) => {handleErrors(e, 4); handleData({ textFeild5 : e.target.value }) }} style={{margin:20}} label="Name" variant="outlined" />
        <TextField error={errors[5]} onChange={(e) => {handleErrors(e, 5); handleData({ textFeild6 : e.target.value }) }} style={{margin:20}} label="Surname" variant="outlined" />
      </div>
    </div>
  );
}

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

export default function RightSideComponent({ NextButton, handleData, errors, handleErrors, activeStep, data }: any) {
  const Component = componentMap[activeStep];
  return <Component data={data} errors={errors} handleErrors={handleErrors} NextButton={NextButton} handleData={handleData} />;
}
