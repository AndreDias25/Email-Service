import { Input } from "@chakra-ui/react";

interface PrimaryInputProps{
    name: string,
    value: string,
    onChange: 

}

export default function PrimaryInputProps({}: PrimaryInputProps){
    return(
        <Input variant='filled' placeholder='Filled' name={}/>
    )
}