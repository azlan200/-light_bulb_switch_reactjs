import React,{useState, createContext} from 'react';
import Bulb from "./Bulb.js"
const LightBulbContext = createContext();
const LightBulb =()=>{
    const[isOn,setisOn]= useState("")
    // const handelClick =()=>{
    //     setisOn("66")
    // }
    
    const delay = 3;
    
    return (
        <LightBulbContext.Provider value = {delay}>
            <Bulb/>
        </LightBulbContext.Provider>
        
)
}
export default LightBulb;
export {LightBulbContext};