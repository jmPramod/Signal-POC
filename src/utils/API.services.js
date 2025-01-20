
import axios from "axios";
const base_url="http://localhost:3500"

// const base_url = import.meta.env.VITE_REACT_APP_DEPLOY_URL;
export const login = async (payload) => {
    console.log(payload);
    
    
    try {
      const response = await axios.post(`${base_url}/api/login`, payload);
      console.log("response",response);
      
      if (response?.data?.token) {
        localStorage.setItem('token', JSON.stringify(response?.data?.token));
      }
      return {
        message: response.data.message,
        data: response.data.data,
        statusCode: response.data.statusCode,
        errorMessage:response.data.errorMessage||null
        
      };
    } catch (error) {
      console.log("error",error.response.data);
        if (error) {

          return {
            message: error.response.data.message||"",
            data: error.response.data.data||null,
            statusCode: error.response.data.statusCode||500,
            errorMessage:error.response.data.errorMessage||null
            
          };
      }
    }
  };
  
  export const register = async (payload) => {
    console.log(payload);
    
    
    try {
      const response = await axios.post(`${base_url}/api/register`, payload);
      console.log("response",response);
      
     
      return {
        message: response.data.message,
        data: response.data.data,
        statusCode: response.data.statusCode,
        token:response.data.token,
        errorMessage:response.data.errorMessage||null
        
      };
    } catch (error) {
      console.log("error",error.response.data);
      
        if (error) {

        return {
          statusCode:500,
          message: error,
          data: {},
        };
      }
    }
  };
  
export const  fetchHistory=async()=>{
  try {
    const token1 = localStorage.getItem('token');
    let token;
    if (token1) {
      token = JSON.parse(token1);
    }
    
    const response = await axios.get(`${base_url}/fetch-signal`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
   
    
    console.log("response007",response);
    return {
      message:response&&response.data.message,
      data:response&& response.data.data,
      statusCode:response&& response.data.statusCode,
      errorMessage:response&&response.data.errorMessage||null
      
    };
    
  } catch (error) {
    
    
    return {
      statusCode: 500,
      message: error,
      data: {},
    };
  }
}

export const profileUpdate = async (payload, id) => {
  try {
    const token1 = localStorage.getItem('token');

    let token;
    if (token1) {
      token = JSON.parse(token1);
    }
    const response = await axios.patch(
      `${base_url}/api/update-profile/${id}`,

      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      message: response.data.message,
      data: response.data.data,
      statusCode: response.data.statusCode,
    };
  } catch (error) {
    if (error) {
      return {
        statusCode: 500,
        message: error,
        data: {},
      };
    }
  }
};
