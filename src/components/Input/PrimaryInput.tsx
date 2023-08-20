import { Input } from "@chakra-ui/react";
import {ChangeEventHandler} from "react";
import "./primary-input.css"

interface PrimaryInputProps{
    name: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>
    label: string
}


export default function PrimaryInputProps({name, value, onChange, label}: PrimaryInputProps){
    return(
        <div className="input-container">
            <label className="label">{label}</label>
            <Input variant='filled' 
            placeholder='Digite seu nome' 
            name={name} 
            value={value} 
            onChange={onChange}/>
        </div>
    )
}