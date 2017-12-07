import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>CoffeeConnection</h1>
    <button>Create</button>
    <Link to="/search">or Browse All</Link>
    <img src="https://i.pinimg.com/originals/8c/6c/55/8c6c55cd70c5dc9bac7860b8d89c386c.gif" />
  </div>
);

export default Landing;
