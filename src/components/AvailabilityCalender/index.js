import React from 'react';
import './index.css'
const AvailabilityCalendar = ({ schedule }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="availability-calendar">
      <div className="calendar-header">
        <h3 className="calendar-title">Weekly Availability</h3>
      </div>
      <div className="calendar-grid">
        {days.map((day) => (
          <div key={day} className="day-cell">
            <div className="day-header">{day.substring(0, 3)}</div>
            {schedule[day] ? (
              <div className="availability">{schedule[day]}</div>
            ) : (
              <div className="unavailable">Not available</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailabilityCalendar;