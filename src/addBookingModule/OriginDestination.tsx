import React from "react";
import TextInput from './TextInput';

const OriginDestination = ({ NextButton, handleData, data } : any) => {

  const handleNext = () => {
    // Here we can do validations
    if(!data.textField3 || data.textField3 == "" || !data.textField4 || data.textField4 == ""){
      if(!data.textField3 && !data.textField4) handleData({ textField3 : "", textField4 : "" });
      else if(!data.textField4) handleData({ textField4 : "" });
      else if(!data.textField3) handleData({ textField3 : "" });
      return false;
    }

    
    // If validations are not passed return

    // If validations are not passed
    // then call API here
  }

  return(
    <div style={{display:"flex", flex:1, flexDirection: "column"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"flex-start"}}>
        <div style={{fontSize: 30}}>
        Origin & Destination
        </div>
        <NextButton onClick={handleNext} />
      </div>
      <div style={{display:"flex", flex:1, flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
        <TextInput value={data.textField3} label="Field3" onChange={(e : any) => {handleData({ textField3 : e.target.value }) }} />
        <TextInput value={data.textField4} label="Field4" onChange={(e : any) => {handleData({ textField4 : e.target.value }) }} />
      </div>
    </div>
  );
}

export default OriginDestination;