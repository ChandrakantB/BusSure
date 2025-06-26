import React from "react";
import "./HDescription.css";

const HDescription = () => {
  return (
    <section className="booking-services-section">
      <div className="container">
        <h2 className="section-title">Online Bus Booking Services</h2>
        
        <p className="intro">
          <strong>BusSure</strong> is India’s leading online bus ticket booking service provider. 
          Check out budget-friendly offers and save big with discount coupons to book bus tickets at the lowest price with us. 
          You can check the bus schedules, compare prices, and find all the information you need to plan an ideal and comfortable bus or train journey.
        </p>

        <p>
          BusSure has simplified the online bus booking process for your travel planning. 
          In case you need to cancel the ticket or change the dates, you can save both time and money by choosing BusSureCash as a refund option which can be used instantly. Book now!!!
        </p>

        <p>
          Browse through all your bus route options, and use our advanced smart filters to ensure a reliable and comfortable journey, tailored to your scheduled travel plans.
        </p>

        <h3>Booking Services</h3>
        <h4>Online Bus Ticket Booking at Lowest Price</h4>
        <p>
          With BusSure, travellers can book bus tickets online at the lowest ticket fares. 
          Travellers can choose their favorite bus for online bus booking. BusSure is the right place for reserving bus tickets as you will find a wide range of Private buses and SRTC (State Road Transport Corporation) buses available online.
        </p>

        <h4>Bus Types</h4>
        <ul className="bus-types-list">
          {[
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
            "Mercedes buses",
            "Non-Mercedes buses",
            "Electric Buses",
            "Express Buses",
          ].map((busType) => (
            <li key={busType}>{busType}</li>
          ))}
        </ul>

        <p>
          The bus ticket fare depends on factors such as bus type, operator, distance between origin and destination, amenities offered, and seasonal price variations.
          Travelling by bus is cost-effective and a convenient travel option compared to other modes.
        </p>

        <h4>Benefits of Booking Bus Tickets Online</h4>
        <p>
          Offline modes of bus ticket booking are no longer preferred in this day and age of technology. Online ticket booking is easy, fast, and hassle-free. 
          BusSure ticks all three with user-friendly app and website navigation.
        </p>

        <ul className="benefits-list">
          {[
            "Avoid standing in long queues at offline bus ticket counters.",
            "No more hassle of approaching travel agents.",
            "Choose from multiple bus services.",
            "Book both Private and SRTC bus tickets online.",
            "Check bus ticket availability online.",
            "Get bus timings, ticket price, boarding & dropping point details online.",
            "Access to payment partner discounts and cashback offers.",
            "Free Cancellation - Get 100% refund if your plan changes and you cancel your ticket.",
            "24/7 customer support.",
            "Each transaction is simple, safe, and secure."
          ].map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HDescription;
