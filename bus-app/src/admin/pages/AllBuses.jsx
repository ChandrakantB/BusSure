import React from 'react';
import './AllBuses.css';

const dummyBuses = [
  {
    id: 'BUS123',
    operator: 'Shivam Travels',
    from: 'Delhi',
    to: 'Bhopal',
    fare: 549,
    date: '2025-07-05',
    status: 'Approved',
  },
  {
    id: 'BUS124',
    operator: 'Green Line',
    from: 'Lucknow',
    to: 'Kanpur',
    fare: 299,
    date: '2025-07-08',
    status: 'Pending',
  },
];

const AllBuses = () => {
  return (
    <div className="admin-page all-buses-page">
      <h2>🚌 All Buses</h2>
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>Bus ID</th>
            <th>Operator</th>
            <th>From</th>
            <th>To</th>
            <th>Fare</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyBuses.map(bus => (
            <tr key={bus.id}>
              <td>{bus.id}</td>
              <td>{bus.operator}</td>
              <td>{bus.from}</td>
              <td>{bus.to}</td>
              <td>₹{bus.fare}</td>
              <td>{bus.date}</td>
              <td>
                <span className={`badge ${bus.status === 'Approved' ? 'bg-success' : 'bg-warning text-dark'}`}>
                  {bus.status}
                </span>
              </td>
              <td>
                <button className="btn btn-sm btn-primary me-2">View</button>
                <button className="btn btn-sm btn-danger">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuses;
