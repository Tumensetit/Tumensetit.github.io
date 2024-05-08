import React from "react";
import "./styles.css";
import CalendarComponent from "./CalendarComponent";
import AddEvent from "./AddEvent";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <div className="Calendar">
          <header className="Calendar-header">
            <h1>Calendar</h1>
          </header>
          <main className="Calendar-main">
            <Link to="/add-event">
              <button>Add Event</button>
            </Link>
          </main>
          <Routes>
            <Route path="/add-event" Component={AddEvent} />
            <Route path="/" Component={CalendarComponent} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
