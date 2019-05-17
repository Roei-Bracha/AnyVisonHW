import React  from "react"

export default function InputRow ({
        name ,
        label=name,
        type = "text" ,
        onChange ,
        value ,
        showLabel = false,
        required=false})
    {
    return(
        <div className={"formRow"}>
            {showLabel && <label>{label}:</label>}
            <input className={"effect-9"} placeholder={showLabel ? undefined : label} type={type} name={name} required={required} value={value} onChange={(e)=>{onChange(e.target.value)}}/>
        </div>
    )
}
