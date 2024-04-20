import {FaSpinner} from "react-icons/fa";
import Portal from "./Portal";

const Spinner = () => {
  return (
    <Portal>
     
        <FaSpinner className="text-primary-500 animate-spin" size={50} />
   
    </Portal>   
  );
};

export default Spinner;
