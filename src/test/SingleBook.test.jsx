import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SingleBook from "/src/components/SingleBook";

describe("testing single book", () => {
  it("checks single book get red on click", () => {
    // 1)
    render(<SingleBook />);
    // 2)
    const book = screen.getById("red-book");
    // 3)
    const red = fireEvent.click();
    // 4)
    expect(book).toBeInTheDocument();
  });
});
