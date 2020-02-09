import React from "react";
import Heading, { getMonthName } from ".";

it("getMonthName() returns the full name of a given month", () => {
  const mockMonth = 5;
  expect(getMonthName(mockMonth)).toEqual("June");
});
