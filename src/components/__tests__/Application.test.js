import React from "react";

import { render, cleanup } from "@testing-library/react";
import { renderHook } from '@testing-library/react'

import Application from "components/Application";

afterEach(cleanup);

// change test.skip back to it to run test

test.skip("renders without crashing", () => {
  render(<Application />);
});
