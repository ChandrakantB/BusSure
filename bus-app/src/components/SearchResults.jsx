import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ABusResults from './ABusResults'; // keep using ABusResults
import axios from 'axios';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const date = searchParams.get('date');

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/buses?from=${from}&to=${to}&date=${date}`);
        setBuses(res.data);
      } catch (err) {
        console.error('❌ Error fetching buses:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBuses();
  }, [from, to, date]);

  return (
    <div>
      {loading ? (
        <p style={{ textAlign: 'center', marginTop: '50px' }}>🔄 Loading buses...</p>
      ) : (
        <ABusResults from={from} to={to} date={date} buses={buses} />
      )}
    </div>
  );
};

export default SearchResults;
