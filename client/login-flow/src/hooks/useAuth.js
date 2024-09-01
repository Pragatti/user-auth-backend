const BASE_URL = import.meta.env.VITE_BASE_URL;


export const loginUser =async(data)=>{
    try{

        const response = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        
        const responseData = await response.json();
        console.log(responseData);
    }
    catch(err){
    console.log(err)
}

}

export const registerUser =async(data)=>{
    try{

        const response = await fetch(`${BASE_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        
        const responseData = await response.json();
        console.log(responseData);
    }
    catch(err){
    console.log(err)
}

}

