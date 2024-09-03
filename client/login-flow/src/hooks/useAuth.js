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

export const registerUser = async (data) => {
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      // If the response is not ok, handle the error
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data:", errorData);  // Log the error
        throw new Error(errorData.msg || "Something went wrong");
      }
  
      // Parse the response if successful
      const responseData = await response.json();
    // Log the success data
      return { success: true, message: responseData.message || 'Registration successful!' };
    } catch (error) {
 
      return { success: false, message: error.message || 'Something went wrong!' };
    }
  };
  


