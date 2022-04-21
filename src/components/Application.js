import React, { useState, useEffect } from "react";
import DayList from "./DayList";
import "components/Application.scss";
import Appointment from "components/Appointment";
import axios from "axios";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // appointments: {},
  });
  const setDay = (day) => {
    setState({ ...state, day });
  };
  const setDays = (days) => {
    setState((prev) => ({ ...prev, days }));
  };
  useEffect(() => {
    axios.get("/api/days").then((res) => setDays(res.data));
  }, []);

  useEffect(() => {
    axios.get("/api/days").then((res) => setDays(res.data));
  }, []);

  const appointmentArr = [];

  Object.values(appointments).forEach((appointment) => {
    appointmentArr.push(<Appointment key={appointment.id} {...appointment} />);
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">{appointmentArr}</section>
    </main>
  );
}
