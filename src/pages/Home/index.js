import React, { useState } from 'react';
import DoctorCard from '../../components/DoctorCard';
import SearchBar from '../../components/SearchBar';
import doctors from '../../data/doctors';
import './index.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('default');

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    if (sortOrder === 'lowToHigh') return a.rating - b.rating;
    if (sortOrder === 'highToLow') return b.rating - a.rating;
    return 0;
  });

  const handleSort = () => {
    const newOrder = sortOrder === 'lowToHigh' ? 'highToLow' : 
                    sortOrder === 'highToLow' ? 'default' : 'lowToHigh';
    setSortOrder(newOrder);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Find Your Doctor</h1>
        <p className="home-subtitle">Book appointments with top healthcare professionals</p>
      </header>

      <div className="search-sort-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <div className="controls-container">
          <span className="doctors-count">
            {filteredDoctors.length} {filteredDoctors.length === 1 ? 'doctor' : 'doctors'} available
          </span>
          <button className="sort-btn" onClick={handleSort}>
            {sortOrder === 'default' ? 'Sort by Rating' : 
             sortOrder === 'lowToHigh' ? 'Rating: Low to High' : 
             'Rating: High to Low'}
            <span className="sort-icon">{sortOrder === 'highToLow' ? '↓' : '↑'}</span>
          </button>
        </div>
      </div>

      <div className="doctors-grid">
        {sortedDoctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Home;