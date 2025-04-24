import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "Lawyer Appointment"; // Default title

    switch (location.pathname) {
      case "/":
        title = "Home | Lawyer Appointment";
        break;
      case "/lawyerDetails/:id":
        title = "Lawyer Details | Lawyer Appointment";
        break;
      case "/my-bookings":
        title = "My Bookings | Lawyer Appointment";
        break;
      case "/error":
        title = "Error | Lawyer Appointment";
        break;

      default:
        title = "Lawyer Appointment"; 
    }

    document.title = title; 
  }, [location.pathname]);
};

export default useDynamicTitle;
