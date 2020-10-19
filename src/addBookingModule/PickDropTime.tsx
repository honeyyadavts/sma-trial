import React from "react";
import TextInput from './TextInput';

const PickDropTime = ({ NextButton, handleData, data } : any) => {

  const handleNext = () => {
    // Here we can do validations
    if(!data.textField5 || data.textField5 == "" || !data.textField6 || data.textField6 == ""){
      if(!data.textField5 && !data.textField6) handleData({ textField5 : "", textField6 : "" });
      else if(!data.textField6) handleData({ textField6 : "" });
      else if(!data.textField5) handleData({ textField5 : "" });
      return false;
    }
    
    // If validations are not passed return

    // If validations are not passed 
    // then call API here

    // As this is our last component so you can navigate
    alert("Last component. Your Date -> " + JSON.stringify(data));
  }

  return(
    <div style={{display:"flex", flex:1, flexDirection: "column"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"flex-start"}}>
        <div style={{fontSize: 30}}>
          Pickup/Dropoff Time
        </div>
        <NextButton onClick={handleNext} />
      </div>
      <div style={{display:"flex", flex:1, flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
        <TextInput value={data.textField5} label="Field5" onChange={(e : any) => {handleData({ textField5 : e.target.value }) }} />
        <TextInput value={data.textField6} label="Field6" onChange={(e : any) => {handleData({ textField6 : e.target.value }) }} />
      </div>
    </div>
  );
}

export default PickDropTime;