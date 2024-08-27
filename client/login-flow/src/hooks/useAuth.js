const BASE_URL = import.meta.env.VITE_BASE_URL;


export const loginUser =async(data)=>{
    try{

     const response = await fetch(`${BASE_URL}/login`,{method:"POST",body:JSON.stringify(data)})
    console.log(response)
    }
catch(err){
    console.log(err)
}

}


