import { useParams } from 'react-router-dom';
import doctors from '../../data/doctors';
import BookingForm from '../../components/BookingForm';
import AvailabilityCalendar from '../../components/AvailabilityCalender';
import './index.css';

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === parseInt(id));

  if (!doctor) {
    return <div className="not-found">Doctor not found</div>;
  }

  return (
    <div className="doctor-details-container">
      <div className="doctor-profile-section">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="doctor-image"
        />
        <div className="doctor-meta">
          <h1 className="doctor-name">{doctor.name}</h1>
          <p className="doctor-specialty">{doctor.specialization}</p>
          <div className="doctor-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`star ${i < Math.floor(doctor.rating) ? 'filled' : ''}`}>★</span>
            ))}
            <span>({doctor.rating})</span>
          </div>
        </div>
      </div>

      <div className="doctor-content">
        <section className="bio-section">
          <h2 className="section-title">About Dr. {doctor.name.split(' ')[1]}</h2>
          <p className="doctor-bio">{doctor.bio}</p>
        </section>

        <section className="availability-section">
          <h2 className="section-title">Availability</h2>
          <AvailabilityCalendar schedule={doctor.schedule} />
        </section>

        <section className="booking-section">
          <h2 className="section-title">Book an Appointment</h2>
          <BookingForm doctorId={doctor.id} />
        </section>
      </div>
    </div>
  );
};

export default DoctorDetails;