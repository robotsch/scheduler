import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  // Set state defaults
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  // Grab API data, assign to state when all requests resolve
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      const [days, appointments, interviewers] = all;
      setState((prev) => ({
        ...prev,
        days: days.data,
        appointments: appointments.data,
        interviewers: interviewers.data,
      }));
    });
  }, []);

  const setDay = (day) => {
    setState((prev) => ({ ...prev, day }));
  };

  /**
   * My least favorite function in the entire codebase
   * @param {*} appointments array with referential appointment IDs
   * @returns an days object with an updated spots count
   */
  const updateSpots = (appointments) => {
    const days = [...state.days];
    days.forEach((day) => {
      if (state.day === day.name) {
        day.spots = 0;
        day.appointments.forEach((id) => {
          if (!appointments[id].interview) day.spots++;
        });
      }
    });
    return days;
  };

  // Creates an interview, updates state with new interview if successful
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(() => {
        const days = updateSpots(appointments);
        setState((prev) => ({
          ...prev,
          days,
          appointments,
        }));
      })
      .catch((err) => console.log(err));
  };

  // Deletes an interview, updates state if successful
  const cancelInterview = (id) => {
    return axios.delete(`/api/appointments/${id}`).then(() => {
      const appointment = {
        ...state.appointments[id],
        interview: null,
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment,
      };
      const days = updateSpots(appointments);
      setState((prev) => ({
        ...prev,
        days,
        appointments,
      }));
    });
  };
  return { state, setDay, bookInterview, cancelInterview, updateSpots };
}
