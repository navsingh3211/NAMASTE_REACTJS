import { useState,useEffect } from "react";

const useOnlineStatus = ()=>{
    const [useOnlineStatus,setUseOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setUseOnlineStatus(false);
        });
        window.addEventListener("online",()=>{
            setUseOnlineStatus(true);
        });
    },[]);
    return useOnlineStatus;
}

export default useOnlineStatus;