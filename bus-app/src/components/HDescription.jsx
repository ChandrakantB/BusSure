// src/components/HDescription.jsx
import React from "react";

const busTypes = [
  "AC Buses",
  "Non AC Buses",
  "Ordinary Buses",
  "Mini Buses",
  "Super Luxury (Non-AC Seater)",
  "Volvo AC Buses",
  "Sleeper AC Buses",
  "Sleeper Buses",
  "Deluxe Buses",
  "Sleeper Cum Seater AC",
  "Double Decker Buses",
  "Mercedes Buses",
  "Non-Mercedes Buses",
  "Electric Buses",
  "Express Buses",
];

const benefits = [
  "Avoid standing in long queues at offline bus ticket counters.",
  "No more hassle of approaching travel agents.",
  "Choose from multiple bus services.",
  "Book both Private and SRTC bus tickets online.",
  "Check bus ticket availability online.",
  "Get bus timings, ticket price, boarding & dropping point details online.",
  "Access to payment partner discounts and cashback offers.",
  "Free Cancellation - Get 100% refund if your plan changes and you cancel your ticket.",
  "24/7 customer support.",
  "Each transaction is simple, safe, and secure.",
];

const HDescription = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center">
          Online Bus Booking Services
        </h2>

        {/* Intro paragraphs */}
        <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mb-6">
          <strong className="text-slate-900">BusSure</strong> is India’s leading online bus ticket booking service provider. 
          Check out budget-friendly offers and save big with discount coupons to book bus tickets at the lowest price with us. 
          You can check the bus schedules, compare prices, and find all the information you need to plan an ideal and comfortable bus or train journey.
        </p>

        <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mb-6">
          BusSure has simplified the online bus booking process for your travel planning. 
          In case you need to cancel the ticket or change the dates, you can save both time and money by choosing 
          <span className="font-semibold text-slate-900"> BusSureCash</span> as a refund option which can be used instantly. Book now!!!
        </p>

        <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mb-10">
          Browse through all your bus route options, and use our advanced smart filters to ensure a reliable and comfortable journey, 
          tailored to your scheduled travel plans.
        </p>

        {/* Booking Services */}
        <h3 className="text-2xl font-bold text-slate-700 mb-6 text-center">
          Booking Services
        </h3>

        <h4 className="text-xl font-semibold text-slate-600 mb-4 text-center">
          Online Bus Ticket Booking at Lowest Price
        </h4>
        <p className="text-base text-slate-700 leading-relaxed max-w-3xl mx-auto mb-8">
          With BusSure, travellers can book bus tickets online at the lowest ticket fares. 
          Travellers can choose their favorite bus for online bus booking. BusSure is the right place for reserving bus tickets as you will find 
          a wide range of Private buses and SRTC (State Road Transport Corporation) buses available online.
        </p>

        {/* Bus Types */}
        <h4 className="text-xl font-semibold text-slate-600 mb-6 text-center">Bus Types</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          {busTypes.map((busType) => (
            <li
              key={busType}
              className="relative pl-6 font-medium text-slate-700"
            >
              <span className="absolute left-0 text-green-500 font-bold">✓</span>
              {busType}
            </li>
          ))}
        </ul>

        <p className="text-base text-slate-700 leading-relaxed max-w-3xl mx-auto mb-10">
          The bus ticket fare depends on factors such as bus type, operator, distance between origin and destination, amenities offered, and seasonal price variations.
          Travelling by bus is cost-effective and a convenient travel option compared to other modes.
        </p>

        {/* Benefits */}
        <h4 className="text-xl font-semibold text-slate-600 mb-6 text-center">
          Benefits of Booking Bus Tickets Online
        </h4>
        <p className="text-base text-slate-700 leading-relaxed max-w-3xl mx-auto mb-8">
          Offline modes of bus ticket booking are no longer preferred in this day and age of technology. Online ticket booking is easy, fast, and hassle-free. 
          BusSure ticks all three with user-friendly app and website navigation.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="relative pl-6 font-medium text-slate-700"
            >
              <span className="absolute left-0 text-green-500 font-bold">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HDescription;
