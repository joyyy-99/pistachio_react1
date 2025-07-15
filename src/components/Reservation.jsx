import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import reserveIcon from "../assets/icons/reservation-icon.png";
import dropdownIcon from "../assets/icons/dropdown-icon.png";

export default function Reservation() {
  const initialReservationState = {
    id: nanoid(), // Generate a new ID each time the form is cleared or loaded
    fullName: "",
    email: "",
    phoneNumber: "", // Added phone number
    date: "",
    numberOfGuests: "", // Changed to empty string for initial state to correctly validate dropdown
    reservationComments: "",
  };

  const [reservation, setReservation] = useState(initialReservationState);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [savedReservations, setSavedReservations] = useState([]); // State to store fetched reservations

  // Load saved reservations from localStorage on component mount
  useEffect(() => {
    loadReservations();
  }, []);

  // Function to load reservations from local storage
  const loadReservations = () => {
    const reservations = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("reservation-details-")) { // Identify reservation items (using hyphen for consistency)
        try {
          reservations.push(JSON.parse(localStorage.getItem(key)));
        } catch (e) {
          console.error("Error parsing localStorage item:", key, e);
        }
      }
    }
    // Sort reservations by date, showing earliest first
    reservations.sort((a, b) => new Date(a.date) - new Date(b.date));
    setSavedReservations(reservations);
  };

  function handleChange(event) {
    const { value, name } = event.target;
    setReservation((prevReservation) => {
      return {
        ...prevReservation,
        [name]: value,
      };
    });
    // Clear error message when user starts typing again
    if (error) setError("");
    // Clear success message when user starts modifying the form after a successful submission
    if (successMessage) setSuccessMessage("");
  }

  // Email validation function
  const isValidEmail = (email) => {
    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleReservation = (e) => {
    e.preventDefault();

    // 1. Form Validation
    const { fullName, email, date, numberOfGuests, reservationComments } = reservation;

    if (!fullName) {
      setError("Please enter your full name.");
      return;
    }
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!date) {
      setError("Please select a reservation date.");
      return;
    }

    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date to midnight for comparison

    if (selectedDate < today) {
      setError("Reservation date cannot be in the past.");
      return;
    }

    if (!numberOfGuests || numberOfGuests === "") { // Check for empty string from initial select state
      setError("Please select the number of guests.");
      return;
    }

    if (!reservationComments) {
      setError("Please add some notes for your reservation.");
      return;
    }

    // If all validations pass, clear any existing errors
    setError("");

    // 2. On submit save to local storage
    const newReservation = { ...reservation, id: nanoid() }; // Ensure a new unique ID for each submission
    localStorage.setItem(`reservation-details-${newReservation.id}`, JSON.stringify(newReservation));

    // 3. Show success message
    setSuccessMessage("Thank you for your reservation!");

    // Clear the form after successful submission
    setReservation(initialReservationState);

    // Reload and display saved reservations
    loadReservations();
  };

  // Character counter for reservation comments
  const characterCount = reservation.reservationComments.length;
  const maxCharacters = 500; // Example max characters

  return (
    <section className="p-6 my-10 md:p-12 flex justify-center items-center dark:bg-[#2E2E2E]">
      <form className="w-full max-w-lg md:max-w-3xl border border-solid border-black rounded-2xl px-6 py-8 md:px-10 md:py-10 font-serif dark:bg-[#6D6D6D] dark:border-white">
        <fieldset className="flex flex-col gap-6">
          <div className="flex items-center justify-center gap-2">
            <img src={reserveIcon} alt="Reserve Icon" className="h-6" />
            <p className="text-2xl md:text-3xl font-normal text-dark-font dark:text-white">Reserve</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-dark-font text-center dark:text-white">
            Make a <span className="text-pistachio">Reservation</span>
          </h2>
          <p className="text-center mb-4 text-sm md:text-base text-gray-700 dark:text-gray-200">Book your Dining Experience in just a few clicks</p>

          <input
            type="text"
            placeholder="Full Name"
            className="border border-black rounded-md p-3 text-black dark:bg-[#FAF9F666] dark:border-white dark:placeholder-[#6D6D6D] focus:outline-none focus:ring-2 focus:ring-pistachio"
            onChange={handleChange}
            value={reservation.fullName}
            name="fullName"
            aria-label="Full Name"
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-black rounded-md p-3 text-black dark:bg-[#FAF9F666] dark:border-white dark:placeholder-[#6D6D6D] focus:outline-none focus:ring-2 focus:ring-pistachio"
            onChange={handleChange}
            value={reservation.email}
            name="email"
            aria-label="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            className="border border-black rounded-md p-3 text-black dark:bg-[#FAF9F666] dark:border-white dark:placeholder-[#6D6D6D] focus:outline-none focus:ring-2 focus:ring-pistachio"
            onChange={handleChange}
            value={reservation.phoneNumber}
            name="phoneNumber"
            aria-label="Phone Number"
          />

          <input
            type="date"
            className="border border-black rounded-md p-3 text-black dark:bg-[#FAF9F666] dark:border-white focus:outline-none focus:ring-2 focus:ring-pistachio"
            onChange={handleChange}
            value={reservation.date}
            name="date"
            aria-label="Reservation Date"
            min={new Date().toISOString().split('T')[0]}
          />

          <div className="relative">
            <select
              className="w-full border block appearance-none border-black rounded-md p-3 text-black dark:bg-[#FAF9F666] dark:border-white pr-8 focus:outline-none focus:ring-2 focus:ring-pistachio"
              name="numberOfGuests"
              onChange={handleChange}
              value={reservation.numberOfGuests}
              aria-label="Number of Guests"
            >
              <option value="">Number of Guests</option>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num} {num > 1 ? "guests" : "guest"}
                </option>
              ))}
              <option value="10+">10+ guests</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <img src={dropdownIcon} alt="Dropdown arrow" className="w-4 h-4" />
            </div>
          </div>

          <textarea
            rows="4"
            placeholder="Notes (e.g., dietary restrictions, special requests)"
            className="border border-black rounded-md p-3 text-black dark:bg-[#FAF9F666] dark:border-white dark:placeholder-[#6D6D6D] focus:outline-none focus:ring-2 focus:ring-pistachio"
            name="reservationComments"
            value={reservation.reservationComments}
            onChange={handleChange}
            maxLength={maxCharacters}
            aria-label="Reservation Notes"
          />
          <p className="text-right text-sm text-gray-600 dark:text-gray-300">
            {characterCount} / {maxCharacters} characters
          </p>

          {error && <div className="bg-red-500 text-white p-3 rounded-md text-center">{error}</div>}

          <button
            onClick={handleReservation}
            className="bg-pistachio text-white py-3 px-6 rounded-2xl hover:opacity-90 transition duration-300 mx-auto w-fit"
            type="submit"
          >
            Reserve
          </button>

          {successMessage && (
            <div className="bg-green-500 text-white p-4 mt-4 rounded-md shadow-md text-center text-lg md:text-xl font-semibold">
              {successMessage}
            </div>
          )}

          {/* Display Saved Reservations Section - MOVED INSIDE FIELDSET */}
          <div className="mt-10 pt-6 border-t border-gray-300 dark:border-gray-500"> {/* Added top border for separation */}
            <h3 className="text-2xl md:text-3xl font-bold text-dark-font text-center dark:text-white mb-6">
              Your Upcoming Reservations
            </h3>
            {savedReservations.length > 0 ? (
              <div className="space-y-4">
                {savedReservations.map((res) => (
                  <div key={res.id} className="bg-white p-4 rounded-md shadow text-gray-800 dark:bg-[#2E2E2E] dark:text-white">
                    <p><strong>Name:</strong> {res.fullName}</p>
                    <p><strong>Email:</strong> {res.email}</p>
                    {res.phoneNumber && <p><strong>Phone:</strong> {res.phoneNumber}</p>}
                    <p><strong>Date:</strong> {res.date}</p>
                    <p><strong>Guests:</strong> {res.numberOfGuests}</p>
                    <p><strong>Notes:</strong> {res.reservationComments}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-300">No reservations found.</p>
            )}
          </div>
        </fieldset>
      </form>
    </section>
  );
}