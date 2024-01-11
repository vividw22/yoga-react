import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <h2 className="about-description">
          Nama : Yoga Birawanto
        </h2>
        <h2 className="about-description">
        Jenis Kelamin : Laki Laki
        </h2>
        <h2 className="about-description">
          Tanggal Lahir : 31 Mei 2026
          </h2>
          <h2 className="about-description">
          Agama : Islam
          </h2>
          <h2 className="about-description">
          Alamat : Tanggul-Jember
          </h2>
      </div>
    </div>
  );
}

export default About;
