import React from 'react';
import spinnerLogo from '../../logo.svg';
import './spinner.css';

export default function Spinner() {
  return (
    <div className="spinner_wrapper">
      <img src={spinnerLogo} className="spinner" alt="spinner" />
    </div>
  );
}
