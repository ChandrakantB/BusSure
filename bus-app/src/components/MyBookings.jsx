import React from "react";

// Dummy bookings – will be fetched via API later
const bookings = [
  {
    id: "BK101",
    busName: "Shiv Travels",
    from: "Delhi",
    to: "Jaipur",
    date: "2025-06-15",
    time: "10:30 AM",
    seatNo: "A5",
    fare: 499,
    status: "Confirmed",
  },
  {
    id: "BK102",
    busName: "GreenLine Express",
    from: "Mumbai",
    to: "Pune",
    date: "2025-06-20",
    time: "6:00 PM",
    seatNo: "B12",
    fare: 399,
    status: "Pending",
  },
  {
    id: "BK103",
    busName: "MetroLink",
    from: "Chennai",
    to: "Bangalore",
    date: "2025-07-01",
    time: "9:15 AM",
    seatNo: "C3",
    fare: 599,
    status: "Cancelled",
  },
];

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case "confirmed":
      return "text-green-600";
    case "pending":
      return "text-yellow-600";
    case "cancelled":
      return "text-red-600";
    default:
      return "text-gray-500";
  }
};

const MyBookings = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        🧾 My Bookings
      </h2>

      {bookings.length === 0 ? (
        <div className="text-center text-gray-500">
          You have no bookings yet.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-xl shadow-md p-5 hover:scale-[1.02] transition-transform duration-200 flex flex-col justify-between"
            >
              <div>
                <h5 className="text-xl font-semibold text-gray-800 mb-2">
                  {b.busName}
                </h5>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Route:</span> {b.from} ➡ {b.to}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Date:</span> {b.date}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Time:</span> {b.time}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Seat:</span> {b.seatNo}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Fare:</span> ₹{b.fare}
                </p>
                <p className={`font-semibold mt-2 ${getStatusClass(b.status)}`}>
                  Status: {b.status}
                </p>
              </div>

              {b.status === "Confirmed" && (
                <div className="mt-4 text-right">
                  <button className="px-4 py-2 text-sm border border-red-500 text-red-600 rounded-lg hover:bg-red-50 transition">
                    Cancel Booking
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
