import Display from "./components/Display";
import Example from "./components/Example";
import Result from "./components/Result"
import UserInput from "./components/UserInput"

import { useState } from "react"


let finalResult = [];
function App() {
  const[initialInvestment, setInitialInvestment] = useState('');
const[annualInvestment, setAnnualInvestment] = useState('');
const[expectedReturn, setExpectedReturn] = useState('');
const[duration, setDuration] = useState('');

const[inputValue, setInputValue] = useState("");
function handleChange(event)
{
    setInputValue(event.target.value);
}

function handleInitial(userInitialInvestment)
{
  setInitialInvestment(userInitialInvestment)
}
function handleAnnual(userAnnualInvestment)
{
  setAnnualInvestment(userAnnualInvestment)
}
function handleReturn(userReturn)
{
  setExpectedReturn(userReturn)
}
function handleDur(userDuration)
{
setDuration(userDuration)
}

let result = [...finalResult];

if(initialInvestment >0 && annualInvestment >0 && expectedReturn >0 && duration >0)
{
 calculateResults();
  }
function calculateResults()
{
  let finalAnnual = 0;
  let totalInterest = 0;
  let investmentValue = Number(initialInvestment);
  for( let i=0; i< (Number(duration)); i++)
  {
    finalAnnual = finalAnnual + Number(annualInvestment);
    let year = i+1;
    let interest = investmentValue * Number(expectedReturn)/100;
    totalInterest = totalInterest+interest;
    investmentValue = investmentValue + interest + finalAnnual;
    let investedCapital = Number(initialInvestment)+finalAnnual
    result.push({
      year: year,
      investment: investmentValue,
      interest: interest,
      TotalInterest: totalInterest,
      investeCapital: investedCapital
    })
}

}
console.log(result);
  return (
    <>
    <UserInput iiValue={initialInvestment} aiValue={annualInvestment} erValue={expectedReturn} durValue={duration} handleInitial={handleInitial} handleAnnual={handleAnnual} handleReturn={handleReturn} handleDur={handleDur} />
    <Result results={result} />
    <Example handleChangeProp = {handleChange} inputValueProp = {inputValue} />
    <Display inputValueProp = {inputValue} />
    </>
  )
}

export default App
