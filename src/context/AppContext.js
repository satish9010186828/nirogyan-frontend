import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  
  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <AppContext.Provider value={{ bookings, addBooking }}>
      {children}
    </AppContext.Provider>
  );
};