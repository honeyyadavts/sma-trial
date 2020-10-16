import React from 'react';
import './App.css';
import NavigationContainer from './screens/NavigationContainer';
import RightSideComponent from './screens/RightSideComponent';
import Button from "@material-ui/core/Button";

function getSteps() {
  return [
    "Patient Details",
    "Origin & Destination",
    "Pickup/Dropoff Time",
    "Allergies",
    "Conditions",
    "Observations",
    "Medications",
    "Review & Sumbit"
  ];
}

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({});
  const [ errors, setErrors ] = React.useState([false, false]);
  const steps = getSteps();

  const handleData = (data : object) => {
    setFormData({ ...formData, ...data });
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleErrors = (e :any , index : any) => {
    if(e.target.value == ''){
      setErrors(errors.map((item, i) => {
        if(i == index) return true;
        return item;
      }));
    } else {
      setErrors(errors.map((item, i) => {
        if(i == index) return false;
        return item;
      }));
    }
    handleData(e.target.value);
  }

  const NextButton = ({ inputFeilds }: any) => {
    return(
      <Button style={{margin: 10}} variant="contained" color="primary" onClick={() => {
        for (let i = 0; i < inputFeilds.length; i++) {
          if(!formData.hasOwnProperty(inputFeilds[i])){
            alert("All Feilds are required.");
            return;
          }
        }
        handleNext();
      }}>
        Next
      </Button>
    )
  }

  return (
    <div style={{display:"flex", flex:1, flexDirection:"row"}}>
      <div style={{display:"flex", width:"18%" }}>
        <NavigationContainer steps={steps} activeStep={activeStep} />
      </div>
      <div style={{display:"flex", flex:1}}>
        <RightSideComponent errors={errors} handleErrors={handleErrors} data={formData} handleData={handleData} NextButton={NextButton} activeStep={activeStep} />
      </div>
    </div>
  );
}

export default App;
