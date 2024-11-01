import React, { useState } from 'react';

const EventForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, date, location });
    setTitle('');
    setDate('');
    setLocation('');
  };

  return (
    <div className="card w-96 bg-slate-800 text-white shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Create Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Title:</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered bg-slate-700 text-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Date:</span>
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input input-bordered bg-slate-700 text-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Location:</span>
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input input-bordered bg-slate-700 text-white"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;