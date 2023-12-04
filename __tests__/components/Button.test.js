import { render, fireEvent, screen } from "@testing-library/react";
import Home from "../../src/pages/index"; // adjust the path according to your project structure
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { store } from "../../src/features/store";

test("completed tasks hidden and un hidden", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const button = screen.getByText("Show Completed");
  fireEvent.click(button);
  const newButton = screen.getByText("Hide Completed");
  expect(newButton).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
