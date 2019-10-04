import React from 'react';
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
} from './Calendar';

beforeEach(() => {
  const dateNow = Date.now.bind(global.Date);
  const dateNowStub = jest.fn(() => 1570210581412);
  global.Date.now = dateNowStub;
});

it('getRemainderDates() returns an array of dates to fill the last week', () => {
  expect(getRemainderDates()).toEqual([]);
});

it('getDatesArray() returns an array of dates based on a given length', () => {
  const mockNumDays = 28;
  const assertion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
  expect(getDatesArray(mockNumDays)).toEqual(assertion);
});

it('getNumberOfWeeks() returns number of weeks to print for month', () => {
  const mockNumDays = 33;
  expect(getNumberOfWeeks(mockNumDays)).toEqual(5);
});

it('getMonthDates() returns dates to fill up one month on the calendar', () => {
  const mockMonth = 1;
  const mockYear = 2020;
  const assertion = [26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
  expect(getMonthDates(mockMonth, mockYear)).toEqual(assertion);
});

it('getCurrentYear() returns the current year', () => {
  expect(getCurrentYear()).toEqual(2019);
});

it('getCurrentMonth() returns the zero-index number of the current month', () => {
  expect(getCurrentMonth()).toEqual(9);
});

it('getMonthName() returns the full name of a given month', () => {
  const mockMonth = 5;
  expect(getMonthName(mockMonth)).toEqual('June');
});

it('getFirstDayOfMonth() returns a zero-index number of the week for the first day of a given month', () => {
  const mockMonth = 5;
  const mockYear = 2018;
  expect(getFirstDayOfMonth(mockMonth, mockYear)).toEqual(5);
});

it('getDaysInMonth() returns the length of a month given by its zero-index number', () => {
  const mockMonth = 1;
  const mockYear = 2020;
  expect(getDaysInMonth(mockMonth, mockYear)).toEqual(29);
});

it('getPreviousMonthDates() returns an array of the previous month dates for the first week', () => {
  const mockMonth = 1;
  const mockYear = 2020;
  const assertion = [26, 27, 28, 29, 30, 31];
  expect(getPreviousMonthDates(mockMonth, mockYear)).toEqual(assertion);
});
