import { render, screen } from "@testing-library/react";

import { Typography } from "../Typography";

describe("<Typography />", () => {
  it("should render the text", () => {
    render(<Typography>Hi There!</Typography>);

    const text = screen.getByText("Hi There!");

    expect(text).toBeInTheDocument();
  });

  it("should render 'paragraph' as the default class", () => {
    const { container } = render(<Typography>Hi There!</Typography>);

    expect(container.firstChild).toHaveClass("typography--paragraph");
  });

  it("should render a different typeScale", () => {
    const { container } = render(
      <Typography typeScale="eyebrown">Hi There!</Typography>
    );

    expect(container.firstChild).toHaveClass("typography--eyebrown");
  });

  it("should render a <span> as a default", () => {
    render(<Typography>Hi There!</Typography>);

    const text = screen.getByText("Hi There!");

    expect(text.tagName).toBe("SPAN");
  });

  it("should render a different HTML tag", () => {
    render(<Typography component="h1">Hi There!</Typography>);

    const text = screen.getByText("Hi There!");

    expect(text.tagName).toBe("H1");
  });
});

export {};
