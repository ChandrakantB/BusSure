import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingSummary from '../components/BookingSummary';

const BookingSummaryPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state?.bus || !state?.seats) {
    return <p className="text-danger text-center mt-5">Invalid booking. Please select a bus and seats first.</p>;
  }

  return (
    <BookingSummary
      bus={state.bus}
      seats={state.seats}
      onProceed={() => navigate('/payment')}
    />
  );
};

export default BookingSummaryPage;
