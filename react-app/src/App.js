import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const App = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from the server
    async function fetchAppointments() {
      const response = await fetch("/api/appointments");
      const data = await response.json();
      setAppointments(data);
    }
    fetchAppointments();
  }, []);

  const handleSelectEvent = event => {
    // Handle appointment selection
  };

  return (
    <Calendar
      localizer={localizer}
      events={appointments}
      onSelectEvent={handleSelectEvent}
    />
  );
};

export default App;

