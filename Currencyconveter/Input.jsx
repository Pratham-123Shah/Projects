import { useId } from "react";
import React from "react";

const Input=({label, amount,onAmountchange,onCurrencychange,currencyOptions=[],SelectCurrency='usd',
amountDisble=false,currencyDisable=false, className=''})=>{
    const amountid=useId() //not used for generating keys in a list\
    return(
       <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
       <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={amountid}>{label}</label>
        <input type="number" placeholder="amount" className="outline-none w-full bg-transparent py-1.5" id={amountid}
            disabled={amountDisble} value={amount}  onChange={(e)=>onAmountchange && onAmountchange(Number(e.target.value))}
        />
       </div>
       <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
        value={SelectCurrency} onChange={(e)=>onCurrencychange&&onCurrencychange(e.target.value)} disabled={currencyDisable}>
            {currencyOptions.map((val)=>(
                <option key={val} value={val}>{val}</option>
            ))}

        </select>
       </div>
       </div>
    )
}

export default Input