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
        <TextField error={errors[0]} onChange={(e) => {handleErrors(e, 0); handleData({ textFeild1 : e.target.value }) }} style={{margin:20}} label="Feild1" variant="outlined" />
        <TextField error={errors[1]} onChange={(e) => {handleErrors(e, 1); handleData({ textFeild2 : e.target.value }) }} style={{margin:20}} label="Feild2" variant="outlined" />
      </div>
    </div>
  );
}

export default PatientDetails;