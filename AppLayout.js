import { Outlet, useViewTransitionState } from "react-router";
import Footer from "./src/components/Footer";
import { useState, useEffect } from "react";
import Header from "./src/Components/Header";
import UserContext from "./src/utils/UserContext";
import HotelListContext from "./src/utils/HotelListContext";

const AppLayout = () => {
  let [user, setUser] = useState({
    name: "default name",
    email: "default@example.com",
  });


  const [allItems, setAllItems]= useState(null); // Master COPY

  const [hotelList, setHotelList] = useState(null); // UI COPY

  return (
    <div>
      <HotelListContext.Provider value={{hotelList, setHotelList, allItems, setAllItems}}>
        <UserContext.Provider value={user}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </HotelListContext.Provider>
    </div>
  );
};

export default AppLayout;