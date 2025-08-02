import { Link } from 'react-router-dom';
import './index.css';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <div className="card-image-container">
        <img 
          src={doctor.image} 
          alt={`Dr. ${doctor.name}`} 
          className="card-image"
        />
        <span className={`availability-badge ${doctor.available ? 'available' : 'unavailable'}`}>
          {doctor.available ? 'Available' : 'Unavailable'}
        </span>
      </div>

      <div className="card-content">
        <h3 className="doctor-name">{doctor.name}</h3>
        <p className="doctor-specialty">{doctor.specialization}</p>
        
        <div className="card-footer">
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`star ${i < Math.floor(doctor.rating) ? 'filled' : ''}`}>
                ★
              </span>
            ))}
            <span>({doctor.rating})</span>
          </div>
          
          <Link to={`/doctor/${doctor.id}`} className="view-profile-btn">
            View Profile →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;