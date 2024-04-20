
import { useState,useCallback} from "react";
import axios from "axios";

const useHttp = () => {
    const [isLoading, setIsloading] = useState(true);
    
    const fireRequest = useCallback(async(url="", method="GET",) => {

try {
    const response = await axios(url,{method,
    });
    return {data:response.data, statusCode:response.status};
} catch (error) {
    console.log(error);
    return {...error, isError:true};
} finally{
    setIsloading(false);
}
 },[]);
 return {
  isLoading,
  fireRequest,
};
};

export default useHttp;

