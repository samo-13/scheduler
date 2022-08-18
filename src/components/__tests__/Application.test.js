import React from "react";

import { render, cleanup } from "@testing-library/react";
import { renderHook } from '@testing-library/react'

import Application from "components/Application";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Application />);
});
