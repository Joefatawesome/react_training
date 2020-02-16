  import React from 'react';
// import logo from './logo.svg';
import logo from './nbs_icon.ico'
import './App.css';

function NBSWebsite() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Norwalk Business Service, Inc.</h1>
        <p>
          Norwalk Business Services, Inc. has been engaged in the practice of tax, accounting, and business management since 1955.
          We are one of the largest business service, tax, and accounting practices in this area. We offer in house computerized
          tax return preparation, live payroll services, live and after the fact accounting, as well as other business consulting.
          Our company presents a personalized approach to your personal and professional accounting and tax needs. Our staff of
          trained personnel will help you to decide exactly what your needs are and provide you with the information needed to
          operate your business more efficiently. Our tax preparers are trained to prepare your tax return professionally using
          all the allowable deductions to reduce your income and thus your tax to the lowest allowable amount.
          <br></br>
          <br></br>
          Thank you for your interest in our firm.
        </p>

        <img src={logo} className="nbs-logo" alt="logo" />

        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default NBSWebsite;
