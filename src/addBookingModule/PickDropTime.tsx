import React from "react";
import TextField from '@material-ui/core/TextField';

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
        <TextField error={errors[4]} onChange={(e) => {handleErrors(e, 4); handleData({ textFeild5 : e.target.value }) }} style={{margin:20}} label="Feild5" variant="outlined" />
        <TextField error={errors[5]} onChange={(e) => {handleErrors(e, 5); handleData({ textFeild6 : e.target.value }) }} style={{margin:20}} label="Feild6" variant="outlined" />
      </div>
    </div>
  );
}

export default PickDropTime;