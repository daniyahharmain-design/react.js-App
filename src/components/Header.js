import { Link } from "react-router";
import { logoURL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantArr";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import HotelListContext from "../utils/HotelListContext";
import UserContext from "../utils/UserContext";

const Header= () => {
    const { hotelList, setHotelList } = useContext(HotelListContext);
    const userObj = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="header-logo"
         src = "https://ik.imagekit.io/q06kuqs4s/food.png"
         alt ="food Logo"
         />
      </div>

    <div className="header">
      </div>

          <div className="search-bar">
        <input placeholder="Search Restaurants..." onChange={(e)=>{

           const filteredArr =  allItems.filter((restaurantObj)=>{
              if(restaurantObj.info.name.toLowerCase().includes(e.target.value.toLowerCase())){
                return true
              } else {
                return false
              }
            })

            setHotelList(filteredArr)

        }} />
      </div>

      <div className="nav-items">
        <ul>

          <li>{useOnlineStatus ? <b>Online 🟢</b> : <b>Offline 🛑 </b>}</li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>
            <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <li>{userObj.name}</li>


{}
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
