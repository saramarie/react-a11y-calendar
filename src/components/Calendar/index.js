import React, { useState } from "react";
import { uuid } from "uuidv4";
import Header from "../Header";
import "./styles.css";

const daysOfWeek = [
  { name: "Sunday" },
  { name: "Monday" },
  { name: "Tuesday" },
  { name: "Wednesday" },
  { name: "Thursday" },
  { name: "Friday" },
  { name: "Saturday" }
];

export function getNumberOfWeeks(numDays) {
  return Math.ceil(numDays / daysOfWeek.length);
}

export function getDatesArray(numDays, type = "current") {
  const dates = [];
  for (let i = 1; i <= numDays; i++) {
    dates.push({ type, number: i });
  }
  return dates;
}

export function getRemainderDates(numDates) {
  const numWeeksToShow = getNumberOfWeeks(numDates);
  const numDaysToPrint = numWeeksToShow * daysOfWeek.length;
  return getDatesArray(numDaysToPrint - numDates, "next");
}

export function getMonthDates(month, year) {
  const prevMonthDates = getPreviousMonthDates(month, year);
  const numDaysInMonth = getDaysInMonth(month, year);
  const currMonthDates = getDatesArray(numDaysInMonth);
  const remainderDates = getRemainderDates(
    prevMonthDates.length + numDaysInMonth
  );

  return [...prevMonthDates, ...currMonthDates, ...remainderDates];
}

export function getPreviousMonthDates(month, year) {
  const startIndex = getFirstDayOfMonth(month, year);
  const prevMonthDays = getDaysInMonth(month - 1, year);
  const dates = [];
  for (let i = 0; i < startIndex; i++) {
    dates.push({ type: "previous", number: prevMonthDays - i });
  }
  return dates.reverse();
}

export function getFirstDayOfMonth(month, year) {
  const date = new Date(year, month);
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();
  return new Date(dateYear, dateMonth).getDay();
}

export function getDaysInMonth(month, year) {
  const date = new Date(year, month);
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();
  return new Date(dateYear, dateMonth + 1, 0).getDate();
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getCurrentMonth() {
  return new Date().getMonth();
}

function Calendar() {
  const [month, setMonth] = useState(getCurrentMonth());
  const [year, setYear] = useState(getCurrentYear());

  const decrementMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      return setMonth(11);
    }

    return setMonth(month - 1);
  };

  const incrementMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      return setMonth(0);
    }

    return setMonth(month + 1);
  };

  return (
    <section className="calendar">
      <Header
        decrementMonth={decrementMonth}
        incrementMonth={incrementMonth}
        month={month}
        year={year}
      />
      {daysOfWeek.map(day => (
        <div className="weekday" key={day.name}>
          {day.name}
        </div>
      ))}
      {getMonthDates(month, year).map(date => (
        <div className={`date ${date.type}`} key={uuid()}>
          {date.number}
        </div>
      ))}
    </section>
  );
}

export default Calendar;
