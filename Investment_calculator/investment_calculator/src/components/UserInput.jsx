import { useState } from "react";

export default function UserInput({iiValue, aiValue, erValue, durValue, handleInitial, handleAnnual, handleReturn, handleDur}) {


    function handleInitialInvestment(event)
    {
        handleInitial(event.target.value);
    }
    function handleAnnualInvestment(event)
    {
        handleAnnual(event.target.value);
    }
    function handleExpectedReturn(event)
    {
        handleReturn(event.target.value);
    }
    function handleDuration(event)
    {
        handleDur(event.target.value);
    }
    return (
        <ol className="user-input">
            <li className="input-group">
                <label>Initial Investment</label>
                <input type="number" value={iiValue} onChange={handleInitialInvestment} />
                <label>Annual Investment</label>
                <input type="number" value={aiValue}  onChange={handleAnnualInvestment} />
                
            </li>

            <li className="input-group"> 
                <label>Expected return</label>
                <input type="number" value={erValue} onChange={handleExpectedReturn}/>
                
                <label>Duration</label>
                <input type="return" value={durValue} onChange={handleDuration}/>
                
            </li>
        </ol>

    );
}