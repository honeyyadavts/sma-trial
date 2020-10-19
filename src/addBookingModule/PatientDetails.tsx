import React from "react";
import TextInput from './TextInput';

const PatientDetails = ({ NextButton, handleData, data } : any) => {

  const handleNext = () => {
    // Here we can do validations
    if(!data.textField1 || data.textField1 == "" || !data.textField2 || data.textField2 == ""){
      if(!data.textField1 && !data.textField2) handleData({ textField1 : "", textField2 : "" });
      else if(!data.textField2) handleData({ textField2 : "" });
      else if(!data.textField1) handleData({ textField1 : "" });
      return false;
    }
    
    // If validations are not passed return

    // If validations are passed 
    // then call API here
  }

  return(
    <div style={{display:"flex", flex:1, flexDirection: "column"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"flex-start"}}>
        <div style={{fontSize: 30}}>
          Patient Details
        </div>
        <NextButton onClick={handleNext} />
      </div>
      <div style={{display:"flex", flex:1, flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
        <TextInput value={data.textField1} label="Field1" onChange={(e : any) => {handleData({ textField1 : e.target.value }) }} />
        <TextInput value={data.textField2} label="Field2" onChange={(e : any) => {handleData({ textField2 : e.target.value }) }} />
      </div>
    </div>
  );
}

export default PatientDetails;