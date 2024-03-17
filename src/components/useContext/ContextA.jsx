import React, { useState } from "react";
import ContextB from "./ContextB"


export const SuperHeroName = React.createContext()
export const SuperHeroNameNew = React.createContext()
export const HandleName = React.createContext();
export const Nme = React.createContext();

const ContextA = () => {

    const [Name, SetName] = useState("JavaScript")
 
    const HandleName = () => {

        const lng = ["JavaScript", "React", "NodeJs", "ExpressJs", "MongoDB"]
        const int = Math.floor(Math.random() * lng.length -1)
        SetName(lng[int])

    }

    let Nme = `My favorate Language is ${Name}`

    return(
        <div>
            <SuperHeroName.Provider value={"superman"}>
                <SuperHeroNameNew.Provider value={"Batman"}>

                    <HandleName.Provider value={{
                        HandleName : HandleName,
                        Nme : Nme
                        }}>
                       

                <ContextB/>
                
                    </HandleName.Provider>

                </SuperHeroNameNew.Provider>
            </SuperHeroName.Provider>
        </div>
    )
}

export default ContextA