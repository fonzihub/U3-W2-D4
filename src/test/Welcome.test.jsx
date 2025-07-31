import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "/src/components/Welcome";

describe("testing initial mounting", () => {
  it("checks welcome page is mounted", () => {
    // montiamo il componente nel dom virtuale
    render(<Welcome />);
    const benvenuto = screen.getByText(/benvenuti in epibooks/i);
    expect(benvenuto).toBeInTheDocument();
  });
});
