import { Children, createContext } from "react";

const globalaStore = createContext



export default function MainStore({children}){


    const values= {

    }
    return <globalaStore.provider value={values}>
        {children}
    </globalaStore.provider>
}