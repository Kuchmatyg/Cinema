import React, {createContext, useState, useEffect} from 'react';


export const HallsContext = createContext();


export const HallsContextProvider = ({children}) => {

    const [halls, setHalls] = useState([]);

    useEffect(() => {
        const GetHalls = async () => {
            const response = await fetch("http://localhost:3000/halls");

            if (!response.ok) {
                throw new Error("Ошибка сети http://localhost:3000/halls    " + response.status)
            }

            try {
                const data = await response.json();
                setHalls(data);
            }
            catch (error) {
                console.error("Ошика при загрузке залов", error.message)
            }
        }
        GetHalls();
        console.log("Выполняется GetHalls");
    }, [])
    


    return (
        <HallsContext.Provider value={halls}>
            {children}
        </HallsContext.Provider>
    );
}