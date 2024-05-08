import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/en-gb";

moment.updateLocale("en", {
  week: {
    dow: 1,
  },
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY-MM-DD",
    l: "YYYY-M-D",
    LL: "MMMM Do, YYYY",
    ll: "MMM D, YYYY",
    LLL: "MMMM Do, YYYY LT",
    lll: "MMM D, YYYY LT",
    LLLL: "dddd, MMMM Do, YYYY LT",
    llll: "ddd, MMM D, YYYY LT",
  },
});

const localizer = momentLocalizer(moment);

export default function CalendarComponent() {

  const events = JSON.parse(localStorage.getItem("events")) || [];

  return (
    <>
      <div
        style={{
          height: "80vh",
          justifyContent: "center",
        }}
      >
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </>
  );
}
