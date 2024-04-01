import React, { useState } from 'react';
import '../../css/Contract.css';

const Contract: React.FC = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgree = () => {
    setIsAgreed(true);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Let's make a contract</h1>
      </header>
      <main className="main">
        <section className="section">
          <h2>I will</h2>
          <ul className="list">
            <li>Plan tasks.</li>
            <li>Set goals.</li>
            <li>Take breaks.</li>
            <li>Move and refresh.</li>
            <li>Prioritize.</li>
            <li>Break tasks down.</li>
            <li>No multitasking.</li>
            <li>Minimize distractions.</li>
            <li>Limit social media.</li>
          </ul>
        </section>
        {isAgreed ? (
          <section className="section">
            <h2>Thank you!</h2>
            <p>You have successfully agreed to the contract.</p>
          </section>
        ) : (
          <section className="section">
            <button className="button" onClick={handleAgree}>
              I AGREE
            </button>
          </section>
        )}
      </main>
    </div>
  );
};

export default Contract;