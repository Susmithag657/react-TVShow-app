import React from 'react';
import './style.css';
import Header from './components/Header';
import StarRating from './components/StarRating';
import Movies from './components/Movies';
export default function App() {
  return (
    <div>
      <Header />
      <Movies />
    </div>
  );
}
