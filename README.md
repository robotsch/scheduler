# Interview Scheduler

## Setup

Install dependencies with `npm install`.

Install and run the [Scheduler API](https://github.com/lighthouse-labs/scheduler-api)

## Running Webpack Development Server

```sh
npm start
```

## Usage

Landing on the page will display the schedule as-is

[Landing](https://github.com/robotsch/scheduler/blob/main/docs/landing.PNG?raw=true)

Users can select the day, then add, edit or delete scheduled appointments

[Edit/delete(https://github.com/robotsch/scheduler/blob/main/docs/edit_delete.PNG?raw=true)

Edit and delete functionality is hidden until the user mouses over an appointment

[Mouseover](https://github.com/robotsch/scheduler/blob/main/docs/mouseover.PNG?raw=true)

## Functional Requirements
- Development focuses on a single page application (SPA) called Interview
- Scheduler, built using React.
- Data is persisted by the API server using a PostgreSQL database.
- The client application communicates with an API server over HTTP, using the JSON format.
- Jest tests are used through the development of the project.

## Behavioural Requirements

- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in  progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Tech

- [React](https://reactjs.org)
- [Webpack](https://webpack.js.org), [Babel](https://babeljs.io)
- [Axios](https://github.com/axios/axios)
- [Storybook](https://storybook.js.org/), [Wepback Dev Server](https://github.com/webpack/webpack-dev-server), [Jest](https://jestjs.io/en/), [Testing Library](https://testing-library.com/)

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
