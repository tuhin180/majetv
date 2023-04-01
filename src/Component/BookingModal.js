import React from "react";

const BookingModal = ({ isModalOpen, handleModalClose, singleCard }) => {
  const { name, premiered } = singleCard;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.Name.value;
    const email = form.Email.value;
    const phone = form.Phone.value;

    const Booking = {
      Date: premiered,
      movie: name,
      userName,
      email,
      phone,
    };
    console.log(Booking);
    // Store the booking data in local storage
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(Booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Close the modal
    handleModalClose(false);
  };

  if (!isModalOpen) return null;
  return (
    <div
      id="modal-body"
      onClick={(e) => e.target.id === "modal-body" && handleModalClose()}
      className="w-full h-[100vh] fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]"
    >
      <div className="w-1/2 rounded-md px-3 py-2 bg-[#fff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-start">
          <h1 className="text-blue-600 font-bold">Book a Ticket</h1>
          <span
            onClick={() => handleModalClose()}
            className="text-red-500 text-[20px] hover:text-red-300 cursor-pointer text-2xl font-bold"
          >
            &times;
          </span>
        </div>
        <div className="w-full">
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={name}
              disabled
              className=" px-2 w-full p-1   border focus:outline-none rounded-md "
            />
            <input
              type="text"
              value={premiered}
              disabled
              className=" px-2 w-full p-1   border focus:outline-none rounded-md "
            />
            <input
              type="text"
              name="Name"
              required
              placeholder="Enter Your Name"
              className=" px-2 w-full p-1   border focus:outline-none rounded-md "
            />
            <input
              type="email"
              name="Email"
              required
              placeholder="Enter your Email"
              className=" px-2 w-full p-1   border focus:outline-none rounded-md "
            />
            <input
              type="number"
              name="Phone"
              required
              placeholder="Enter your phn Number"
              className=" px-2 w-full p-1   border focus:outline-none rounded-md "
            />
            <input
              type="submit"
              value="Book"
              className="w-full bg-blue-700 text-white rounded-lg py-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
