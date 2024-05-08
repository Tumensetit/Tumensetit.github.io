import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function AddEvent() {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      start: new Date(startDate),
      end: new Date(endDate),
    };

    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];

    const updatedEvents = [...existingEvents, event];

    localStorage.setItem("events", JSON.stringify(updatedEvents));

    setTitle("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <>
      <div className="AddEvent">
        <header className="AddEvent-header">
          <Link to="/">
            <button>Return</button>
          </Link>
          <h2>Add Event</h2>
        </header>
        <main className="AddEvent-main">
          <form className="AddEvent-form" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="datetime-local"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="endDate">End Date:</label>
              <input
                type="datetime-local"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
            <button type="submit">Add Event</button>
          </form>
        </main>
      </div>
    </>
  );
}
