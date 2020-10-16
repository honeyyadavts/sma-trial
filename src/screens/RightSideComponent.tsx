import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

const RightSideComponent1 = ({ handleNext, handleData } : any) => {
  const [ name, setName ] = React.useState('');
  const [ surName, setSurName ] = React.useState('');
  return(
    <div style={{display:"flex", flex:1, flexDirection: "column"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"flex-start"}}>
        <div style={{fontSize: 40}}>
          Patient Details
        </div>
        <Button style={{margin: 10}} variant="contained" color="primary" onClick={() => {
          if(name == '' || surName == '') return;
          handleNext()
          }}>
          Next
        </Button>
      </div>
      <div style={{display:"flex", flex:1, flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
        <TextField error={name.length == 0} onChange={(e) => {handleData({name: e.target.value}); setName(e.target.value)}} style={{margin:20}} label="Name" variant="outlined" />
        <TextField error={surName.length == 0} onChange={(e) => {handleData({surName: e.target.value}); setSurName(e.target.value)}} style={{margin:20}} label="Surname" variant="outlined" />
      </div>
    </div>
  );
}

const RightSideComponent2 = ({ handleNext, handleData } : any) => {
  return(
    <div style={{display:"flex", flexDirection:"column",flex:1}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"flex-start"}}>
        <div style={{fontSize: 40}}>
          Origin & Destination
        </div>
        <Button style={{margin: 10}} variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </div>
      <div style={{display:"flex", flex:1, flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
        <TextField onChange={(e) => handleData({name2: e.target.value})} style={{margin:20}} label="Name2" variant="outlined" />
        <TextField onChange={(e) => handleData({surName2: e.target.value})} style={{margin:20}} label="Surname2" variant="outlined" />
      </div>
    </div>
  );
}

const RightSideComponent3 = ({ handleNext, handleData } : any) => {
  return(
    <div style={{display:"flex", flex:1, flexDirection:"column"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"flex-start"}}>
        <div style={{fontSize: 40}}>
          Pickup/Dropoff Time
        </div>
        <Button style={{margin: 10}} variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </div>
      <div style={{display:"flex", flex:1, flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
        <TextField onChange={(e) => handleData({name3: e.target.value})} style={{margin:20}} label="Name3" variant="outlined" />
        <TextField onChange={(e) => handleData({surName3: e.target.value})} style={{margin:20}} label="Surname3" variant="outlined" />
      </div>
    </div>
  );
}

const RightSideComponent4 = ({ data } : any) => {
  return(
    <div style={{display:"flex", flex:1}}>
      <div style={{display:"flex", flex:1, flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div style={{fontSize: 50}}>Your details are submitted successfully.</div>
        <div>{JSON.stringify(data)}</div>
      </div>
    </div>
  );
}

const componentMap : any = [
  RightSideComponent1, RightSideComponent2, RightSideComponent3, RightSideComponent4
];

export default function RightSideComponent({ handleNext, handleData, activeStep, data }: any) {
  const Component = componentMap[activeStep];
  return <Component data={data} handleNext={handleNext} handleData={handleData} />;
}
