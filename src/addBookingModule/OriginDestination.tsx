import React from "react";
import TextField from '@material-ui/core/TextField';

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
        <TextField error={errors[2]} onChange={(e) => {handleErrors(e, 2); handleData({ textFeild3 : e.target.value }) }} style={{margin:20}} label="Feild3" variant="outlined" />
        <TextField error={errors[3]} onChange={(e) => {handleErrors(e, 3); handleData({ textFeild4 : e.target.value }) }} style={{margin:20}} label="Feild4" variant="outlined" />
      </div>
    </div>
  );
}

export default OriginDestination;