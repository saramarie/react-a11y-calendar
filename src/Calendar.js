import React, { Fragment } from 'react';

const daysOfWeek = [
  { name: 'Sunday' },
  { name: 'Monday' },
  { name: 'Tuesday' },
  { name: 'Wednesday' },
  { name: 'Thursday' },
  { name: 'Friday' },
  { name: 'Saturday' }
];

export function getNumberOfWeeks(numDays) {
  return Math.ceil(numDays / daysOfWeek.length);
}

export function getDatesArray(numDays) {
  const dates = [];
  for (let i = 1; i <= numDays; i++) {
    dates.push(i);
  }
  return dates;
}

export function getRemainderDates(numDates) {
  const numWeeksToShow = getNumberOfWeeks(numDates);
  const numDaysToPrint = numWeeksToShow * daysOfWeek.length;
  return getDatesArray(numDaysToPrint - numDates);
}

export function getMonthDates(month, year) {
  const prevMonthDates = getPreviousMonthDates(month, year);
  const numDaysInMonth = getDaysInMonth(month, year);
  const currMonthDates = getDatesArray(numDaysInMonth);
  const remainderDates = getRemainderDates(prevMonthDates.length + numDaysInMonth);

  return [
    ...prevMonthDates,
    ...currMonthDates,
    ...remainderDates
  ];
}

export function getPreviousMonthDates(month, year) {
  const startIndex = getFirstDayOfMonth(month, year);
  const prevMonthDays = getDaysInMonth(month - 1, year);
  const dates = [];
  for (let i = 0; i < startIndex; i++) {
    dates.push(prevMonthDays - i);
  }
  return dates.reverse();
}

export function getFirstDayOfMonth(month, year) {
  const date = new Date(year , month);
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();
  return new Date(dateYear, dateMonth).getDay();
}

export function getDaysInMonth(month, year) {
  const date = new Date(year , month);
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();
  return new Date(dateYear, dateMonth + 1, 0).getDate();
}

export function getCurrentYear() {
  return (new Date()).getFullYear();
}

export function getCurrentMonth() {
  return (new Date()).getMonth();
}

export function getMonthName(month) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return monthNames[month];
}

function Calendar() {
  return (
    <Fragment>
      <div>{getMonthName(getCurrentMonth())}</div>
      <div>
        {daysOfWeek.map(day => (
          <span key={day.name}>{day.name}</span>
        ))}
      </div>
      <div>
        {getMonthDates(getCurrentMonth(), getCurrentYear()).map((date) => (
          <span>{date}</span>
        ))}
      </div>
    </Fragment>
  );
}

export default Calendar;
