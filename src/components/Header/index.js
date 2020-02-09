import React from "react";
import "./styles.css";

export function getMonthName(month) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return monthNames[month];
}

const Header = ({ decrementMonth, incrementMonth, month, year }) => (
  <header className="heading">
    <button
      type="button"
      onClick={decrementMonth}
      aria-label="View previous month"
    >
      &larr; Previous
    </button>
    <h2 className="month" aria-live="polite">
      {getMonthName(month)} {year}
    </h2>
    <button type="button" onClick={incrementMonth} aria-label="View next month">
      Next &rarr;
    </button>
  </header>
);

export default Header;
