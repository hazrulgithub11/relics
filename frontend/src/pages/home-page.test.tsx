import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { HomePage } from "./home-page";

describe("HomePage", () => {
  it("renders hero and carousel section headings", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.getByText("The Archive Drop")).toBeInTheDocument();
    expect(screen.getByText("Shop the Archive Drop")).toBeInTheDocument();
    expect(screen.getByText("Collector's Edit")).toBeInTheDocument();
    expect(screen.getByText("New Arrivals Vol. 3")).toBeInTheDocument();
  });
});
