import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.SubmitForm) {
      props.SubmitForm(e);
    }
  };

  const handleChange = (e) => {
    setDate(e.target.value);
    if (props.dispatch) {
      props.dispatch(e.target.value);
    }
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                type="date"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value="">Select a Time</option>
                {props.availableTimes &&
                  props.availableTimes.availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                      {availableTime}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="">Select an Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            <div className="btnReceive">
              <input
                aria-label="on Click"
                type="submit"
                value="Make Your Reservation"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
