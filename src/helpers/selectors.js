// Returns an array of appointments for a given day
export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter((dayObj) => dayObj.name === day);
  return filteredDays.length === 0
    ? []
    : filteredDays[0].appointments.map((apt) => state.appointments[apt]);
}

// Returns a formatted interview object
export function getInterview(state, interview) {
  return interview
    ? {
        student: interview.student,
        interviewer: { ...state.interviewers[interview.interviewer] },
      }
    : null;
}

// Returns an array of interviewers for a given day
export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.filter((dayObj) => dayObj.name === day);
  return filteredDays.length === 0
    ? []
    : filteredDays[0].interviewers.map((id) => state.interviewers[id]);
}
