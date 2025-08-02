import { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import './index.css';

const BookingForm = ({ doctorId }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    date: '',
    time: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addBooking } = useContext(AppContext);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const currentDate = new Date();
    const selectedDate = new Date(formData.date);

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Full name is required';
    } else if (formData.patientName.trim().length < 3) {
      newErrors.patientName = 'Name must be at least 3 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else if (selectedDate < currentDate.setHours(0, 0, 0, 0)) {
      newErrors.date = 'Date cannot be in the past';
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const booking = {
        doctorId,
        ...formData,
        id: Date.now(),
        status: 'confirmed',
        bookedAt: new Date().toISOString()
      };
      
      addBooking(booking);
      
      // Show success message
      alert('Appointment booked successfully!');
      navigate('/');
    } catch (error) {
      alert('Failed to book appointment. Please try again.');
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-form">
      <div className="form-header">
        <h2 className="form-title">Book Appointment</h2>
        <p className="form-subtitle">Fill in your details to confirm your visit</p>
      </div>
      
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-label" htmlFor="patientName">Full Name</label>
          <input
            className={`form-input ${errors.patientName ? 'error' : ''}`}
            type="text"
            id="patientName"
            name="patientName"
            placeholder="Your name"
            value={formData.patientName}
            onChange={handleChange}
          />
          {errors.patientName && <span className="error-message">{errors.patientName}</span>}
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            className={`form-input ${errors.email ? 'error' : ''}`}
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="date">Appointment Date</label>
          <input
            className={`form-input ${errors.date ? 'error' : ''}`}
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="time">Preferred Time</label>
          <input
            className={`form-input ${errors.time ? 'error' : ''}`}
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
          {errors.time && <span className="error-message">{errors.time}</span>}
        </div>
        
        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Booking...' : 'Confirm Booking'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;