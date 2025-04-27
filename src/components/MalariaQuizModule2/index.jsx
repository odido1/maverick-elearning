import React, { useState } from 'react';

const MalariaQuizModule2 = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let correct = 0;

    const form = e.target;
    if (form.q1.value === 'a') correct++;
    if (form.q2.value === 'c') correct++;
    if (form.q3.value === 'b') correct++;

    setResult(`You got ${correct} out of 3 questions right.`);
  };

  return (
    <div className="malaria-quiz">
      <h1 className='header'><strong>Quick Quiz: Malaria Transmission</strong></h1>
      <form onSubmit={handleSubmit}>
        <label><strong>1. What is the main mode of transmission for malaria?</strong></label><br />
        <input type="radio" name="q1" value="a" /> Bite from an infected Anopheles mosquito<br />
        <input type="radio" name="q1" value="b" /> Consumption of contaminated food<br />
        <input type="radio" name="q1" value="c" /> Contact with infected surfaces<br /><br />

        <label><strong>2. Which environmental factor does <em>not</em> influence malaria transmission?</strong></label><br />
        <input type="radio" name="q2" value="a" /> Rainfall<br />
        <input type="radio" name="q2" value="b" /> Temperature<br />
        <input type="radio" name="q2" value="c" /> Soil pH<br /><br />

        <label><strong>3. Which of the following is a <em>rare</em> route of malaria transmission?</strong></label><br />
        <input type="radio" name="q3" value="a" /> Mosquito bite<br />
        <input type="radio" name="q3" value="b" /> Blood transfusion<br />
        <input type="radio" name="q3" value="c" /> Inhaling airborne spores<br /><br />

        <button type="submit">Submit Answers</button>
      </form>
      {result && <div style={{ marginTop: '10px', color: 'green' }}><strong>{result}</strong></div>}
    </div>
  );
};

export default MalariaQuizModule2;
