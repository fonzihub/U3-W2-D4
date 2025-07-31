import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CommentArea from "/src/components/CommentArea";

describe("testing comment area mounting", () => {
  it("checks comment area is renderized", () => {
    // qui montiamo il componente
    render(<CommentArea asin="12345" />);
    const commento = screen.getByTestId("add-comment");
    expect(commento).toBeInTheDocument();
  });
});
