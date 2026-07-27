"use client";

import { useState } from "react";

import PersonalInformation,{
  PersonalInformationData,
} from "./PersonalInformation";

import FinancialInformation,{
  FinancialInformationData,
} from "./FinancialInformation";

import ProgressBar from "./ProgressBar";
import Stepper from "./Stepper";

export default function ApplicationForm(){

const [step,setStep]=useState(1);

const [personal,setPersonal]=useState<PersonalInformationData>({
firstName:"",
lastName:"",
identityNumber:"",
birthDate:"",
phone:"",
email:"",
city:"",
district:"",
address:"",
maritalStatus:"",
education:"",
occupation:"",
});

const [financial,setFinancial]=useState<FinancialInformationData>({
monthlyIncome:0,
monthlyExpense:0,
totalDebt:0,
creditCardDebt:0,
requestedCredit:0,
installment:0,
workStatus:"",
homeStatus:"",
selectedBank:"",
});

return(
<div className="mx-auto max-w-7xl">

<ProgressBar
currentStep={step}
totalSteps={3}
/>

<Stepper
currentStep={step}
/>

{step===1&&(

<PersonalInformation
data={personal}
onChange={(field,value)=>
setPersonal(prev=>({
...prev,
[field]:value
}))
}
/>

)}

{step===2&&(

<FinancialInformation
data={financial}
onChange={(field,value)=>
setFinancial(prev=>({
...prev,
[field]:value
}))
}
/>

)}

</div>

);

}