import "./App.css";

function App() {
  return (
    <>
      <form className="bg-gray-200 px-6 py-2 rounded-2xl flex flex-col text-left">
        <label for="name" className="pr-2 mt-5 mb-1">
          Name (min 3 characters)<sup>*</sup>
        </label>

        <input
          type="text"
          id="name"
          name="name"
          required
          minlength="3"
          size="10"
          className="rounded p-1"
        />
        <label for="email" className="pr-2 mt-5 mb-1">
          Email<sup>*</sup>
        </label>
        <input
          type="email"
          id="email"
          pattern=".+@example\.com"
          size="30"
          required
          className="rounded p-1"
        />
        <label for="guests" className="pr-2 mt-5 mb-1">
          Number of guests (1-12)<sup>*</sup>
        </label>

        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="12"
          className="rounded p-1"
        />
        <label className="pr-2 mt-5 mb-1" for="day">
          Choose a date<sup>*</sup>
        </label>

        <input
          type="date"
          id="day"
          name="trip-start"
          value="2025-01-20"
          min="2025-01-01"
          max="2025-12-31"
          className="rounded p-1"
        />
        <label for="appt" className="pr-2 mt-5 mb-1">
          Choose a time<sup>*</sup>
        </label>

        <input
          type="time"
          id="appt"
          name="appt"
          min="09:00"
          max="18:00"
          required
          className="rounded p-1"
        />
        <small className="pt-2">Restaurant seatings are from 6pm to 11pm</small>

        <label for="story" className="pr-2 mt-5 mb-1">
          Message
        </label>

        <textarea id="story" name="story" rows="5" cols="33"></textarea>
        <small className="pt-3">* Required</small>

        <input type="submit" className="my-9" value="" />
      </form>
    </>
  );
}

export default App;
