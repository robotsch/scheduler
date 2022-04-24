export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter((dayObj) => dayObj.name === day);
  return filteredDays.length === 0
    ? []
    : filteredDays[0].appointments.map((apt) => state.appointments[apt]);
}

export function getInterview(state, interview) {
  return interview
    ? {
        student: interview.student,
        interviewer: { ...state.interviewers[interview.interviewer] },
      }
    : null;
}

export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.filter((dayObj) => dayObj.name === day);
  return filteredDays.length === 0
    ? []
    : filteredDays[0].interviewers.map((id) => state.interviewers[id]);
}