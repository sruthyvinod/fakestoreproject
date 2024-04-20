import { useContext } from "react";
import Brand from "./Brand";
import IconButton from "./IconButton";
import {IoSearch,IoPerson,IoBag} from "react-icons/io5";
import Button from "./Button";
import {NavLink} from "react-router-dom";
import cartContext from "../store/cart-context";

const Navbar = () => {

const { getTotalItems} = useContext(cartContext);
console.log(getTotalItems);

  const NAV_ITEMS = [
    {title:"Products", to:"/products"},
    {title:"Shop All", to:"/shop-all"},
    {title:"New" ,to:"/new"},
    {title:"Sales", to:"/sales"},
    {title:"Reviews",to:"/reviews"},
    {title:"About Us",to:"/about"},
  ];
  return (
     <div className="p-3 flex items-center justify-between border-b">
      <Brand/>
      <div className="flex items-center justify-between gap-3">
        {NAV_ITEMS.map((navItem) =>(
          <NavLink 
          key={navItem.to}
            to={navItem.to}
            className={({isActive})=>
              isActive
              ? "text-primary-500 hover:text-primary-600 cursor-pointer"
              : "text-slate-500 hover:text-primary-400 cursor-pointer hover:underline"}
              >
                 {navItem.title}
              </NavLink> 
       ))}
      </div>
     <div className="flex items-center">
     <IconButton>
        <IoSearch/>
      </IconButton>
      <IconButton>
        <IoPerson/>
      </IconButton>
      <Button startIcon={ <IoBag/>} variant="text">
       Cart
       {getTotalItems() && getTotalItems()}
      </Button>
     </div>
    </div>
  );
  
};

export default Navbar;
