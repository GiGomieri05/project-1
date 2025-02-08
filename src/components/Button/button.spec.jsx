import { render, screen } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

describe("<Button />", () => {
  it('should render the button with the text "Load More Posts"', () => {
    render(<Button text="Load More Posts" />);

    expect.assertions(1);

    const button = screen.getByRole("button", { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button text="Load More Posts" onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more posts/i });

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled is true", () => {
    render(<Button text="Load More Posts" disabled={true} />);

    const button = screen.getByRole("button", { name: /load more posts/i });

    userEvent.click(button);

    expect(button).toBeDisabled();
  });

  it("should be disabled when disabled is false", () => {
    render(<Button text="Load More Posts" disabled={false} />);

    const button = screen.getByRole("button", { name: /load more posts/i });

    userEvent.click(button);

    expect(button).toBeEnabled();
  });

  // it("should match snapshot", () => {
  //   const fn = jest.fn();
  //   const { container } = render(
  //     <Button text="Load More Posts" onClick={fn} />
  //   );

  //   expect(container.firstChild).toMatchSnapshot();
  // });
});
