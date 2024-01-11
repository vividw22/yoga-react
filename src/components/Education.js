import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-item">
        <h3 className="education-title">SDN TANGGUL KULON 03</h3>
        <p className="education-date">2011 - 2017</p>
      </div>

      <div className="education-item">
        <h3 className="education-title">SMPN 4 TANGGUL</h3>
        <p className="education-date">2017 - 2020</p>
      </div>

      <div className="education-item">
        <h3 className="education-title">SMKN 6 JEMBER</h3>
        <p className="education-date">2020 - 2024</p>
      </div>

      <div className="education-item">
        <h3 className="education-title">PKL DI AMAKOM TANGGUL</h3>
        <p className="education-date">6 Bulan</p>
      </div>

      {/* Add more education items as needed */}
    </div>
  );
}

export default Education;
