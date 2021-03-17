import React, {useState, useEffect} from 'react';
import { Phone } from '../comp/phone/phone' 

export const Pages = () => {

    const [todo,setTodo] = useState([])

    useEffect(() => {
        fetch('/phones').then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(data => console.log(data))
    },[])



    return (
        <>
        <Phone/>
        </>
    )
} 