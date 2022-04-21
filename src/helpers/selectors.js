export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter((dayObj) => dayObj.name === day);
  return filteredDays.length === 0
    ? []
    : filteredDays[0].appointments.map((apt) => state.appointments[apt]);
}
