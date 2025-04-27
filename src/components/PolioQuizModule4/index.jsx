import React, { useState } from 'react';

const PolioQuizModule4 = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let correct = 0;

    const form = e.target;
    if (form.q1.value === 'b') correct++;
    if (form.q2.value === 'a') correct++;
    if (form.q3.value === 'c') correct++;

    setResult(`You got ${correct} out of 3 questions right.`);
  };

  return (
    <div className="polio-quiz">
      <h1 className='header'><strong>Quick Quiz: Vaccination Campaigns & Surveillance</strong></h1>
      <form onSubmit={handleSubmit}>
        <label><strong>1. What is a key strategy used during polio vaccination campaigns?</strong></label><br />
        <input type="radio" name="q1" value="a" /> Only vaccinating children in hospitals<br />
        <input type="radio" name="q1" value="b" /> Door-to-door vaccination by trained health workers<br />
        <input type="radio" name="q1" value="c" /> Waiting until an outbreak is declared<br /><br />

        <label><strong>2. What is Acute Flaccid Paralysis (AFP) surveillance used for?</strong></label><br />
        <input type="radio" name="q2" value="a" /> Detecting cases of sudden weakness or paralysis<br />
        <input type="radio" name="q2" value="b" /> Monitoring food safety<br />
        <input type="radio" name="q2" value="c" /> Tracking vaccination coverage<br /><br />

        <label><strong>3. How does environmental surveillance detect poliovirus?</strong></label><br />
        <input type="radio" name="q3" value="a" /> Through blood samples<br />
        <input type="radio" name="q3" value="b" /> Through testing school attendance<br />
        <input type="radio" name="q3" value="c" /> By sampling wastewater in communities<br /><br />

        <button type="submit">Submit Answers</button>
      </form>
      {result && <div style={{ marginTop: '10px', color: 'green' }}><strong>{result}</strong></div>}
    </div>
  );
};

export default PolioQuizModule4;
