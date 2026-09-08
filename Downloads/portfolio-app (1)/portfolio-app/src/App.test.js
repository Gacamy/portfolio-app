import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// Each "test(...)" below checks one small thing the app should do.
// render(<App />) puts the app into a fake test browser page.
// screen lets us look for text/elements on that fake page.

test("renders the header title", () => {
  render(<App />);
  const heading = screen.getByText(/Personal Project Showcase App/i);
  expect(heading).toBeInTheDocument();
});

test("shows the starter projects on load", () => {
  render(<App />);
  expect(screen.getByText("Project 1")).toBeInTheDocument();
  expect(screen.getByText("Project 2")).toBeInTheDocument();
  expect(screen.getByText("Project 3")).toBeInTheDocument();
});

test("search filters the project list", async () => {
  const user = userEvent.setup();
  render(<App />);

  const searchInput = screen.getByPlaceholderText(/search projects/i);
  await user.type(searchInput, "Project 2");

  // The project we searched for should still be visible
  expect(screen.getByText("Project 2")).toBeInTheDocument();
  // Projects that don't match should be gone
  expect(screen.queryByText("Project 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Project 3")).not.toBeInTheDocument();
});

test("adding a new project shows it in the list", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByLabelText("Title"), "My New Project");
  await user.type(screen.getByLabelText("Description"), "Built during a test");
  await user.click(screen.getByRole("button", { name: /^add$/i }));

  expect(screen.getByText("My New Project")).toBeInTheDocument();
});

test("shows a message when no projects match the search", async () => {
  const user = userEvent.setup();
  render(<App />);

  const searchInput = screen.getByPlaceholderText(/search projects/i);
  await user.type(searchInput, "nothing matches this");

  expect(screen.getByText(/no projects match your search/i)).toBeInTheDocument();
});
