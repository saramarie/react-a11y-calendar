import React from "react";
import MockDate from "mockdate";
import Calendar, {
  getCurrentMonth,
  getMonthName,
  getCurrentYear,
  getFirstDayOfMonth,
  getDaysInMonth,
  getYearMonthDate,
  getPreviousMonthDates,
  getMonthDates,
  getNumberOfWeeks,
  getDatesArray,
  getRemainderDates
} from "./Calendar";

beforeEach(() => {
  MockDate.set(1570210581412);
});

afterEach(() => {
  MockDate.reset();
});

it("getRemainderDates() returns an array of dates to fill the last week", () => {
  expect(getRemainderDates()).toEqual([]);
});

it("getDatesArray() returns an array of dates based on a given length", () => {
  const mockNumDays = 4;
  const assertion = [
    { type: "current", number: 1 },
    { type: "current", number: 2 },
    { type: "current", number: 3 },
    { type: "current", number: 4 }
  ];
  expect(getDatesArray(mockNumDays)).toEqual(assertion);
});

it("getNumberOfWeeks() returns number of weeks to print for month", () => {
  const mockNumDays = 33;
  expect(getNumberOfWeeks(mockNumDays)).toEqual(5);
});

it("getMonthDates() returns dates to fill up one month on the calendar", () => {
  const mockMonth = 1;
  const mockYear = 2020;
  const mockDates = [
    {
      type: "previous",
      number: 26
    },
    {
      type: "previous",
      number: 27
    },
    {
      type: "previous",
      number: 28
    },
    {
      type: "previous",
      number: 29
    },
    {
      type: "previous",
      number: 30
    },
    {
      type: "previous",
      number: 31
    }
  ];
  for (let i = 1; i <= 29; i++) {
    mockDates.push({ type: "current", number: i });
  }
  expect(getMonthDates(mockMonth, mockYear)).toEqual(mockDates);
});

it("getCurrentYear() returns the current year", () => {
  expect(getCurrentYear()).toEqual(2019);
});

it("getCurrentMonth() returns the zero-index number of the current month", () => {
  expect(getCurrentMonth()).toEqual(9);
});

it("getMonthName() returns the full name of a given month", () => {
  const mockMonth = 5;
  expect(getMonthName(mockMonth)).toEqual("June");
});

it("getFirstDayOfMonth() returns a zero-index number of the week for the first day of a given month", () => {
  const mockMonth = 5;
  const mockYear = 2018;
  expect(getFirstDayOfMonth(mockMonth, mockYear)).toEqual(5);
});

it("getDaysInMonth() returns the length of a month given by its zero-index number", () => {
  const mockMonth = 1;
  const mockYear = 2020;
  expect(getDaysInMonth(mockMonth, mockYear)).toEqual(29);
});

it("getPreviousMonthDates() returns an array of the previous month dates for the first week", () => {
  const mockMonth = 1;
  const mockYear = 2020;
  const assertion = [
    { type: "previous", number: 26 },
    { type: "previous", number: 27 },
    { type: "previous", number: 28 },
    { type: "previous", number: 29 },
    { type: "previous", number: 30 },
    { type: "previous", number: 31 }
  ];
  expect(getPreviousMonthDates(mockMonth, mockYear)).toEqual(assertion);
});
