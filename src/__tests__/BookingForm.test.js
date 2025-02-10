import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm"; // Adjust path if needed

// Mock function for form submission
const mockSubmitForm = jest.fn();
const mockDispatch = jest.fn();
const mockAvailableTimes = {
  availableTimes: ["12:00 PM", "1:00 PM", "2:00 PM"],
};

describe("BookingForm Component", () => {
  test("renders the form correctly", () => {
    render(
      <BookingForm
        SubmitForm={mockSubmitForm}
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
      />
    );
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/make your reservation/i)).toBeInTheDocument();
  });

  test("validates required fields before submission", () => {
    render(
      <BookingForm
        SubmitForm={mockSubmitForm}
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
      />
    );
    fireEvent.click(screen.getByText(/make your reservation/i));
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test("allows user to fill the form and submit", () => {
    render(
      <BookingForm
        SubmitForm={mockSubmitForm}
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2024-12-25" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "12:00 PM" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests:/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    fireEvent.click(screen.getByText(/make your reservation/i));
    expect(mockSubmitForm).toHaveBeenCalled();
  });
});
