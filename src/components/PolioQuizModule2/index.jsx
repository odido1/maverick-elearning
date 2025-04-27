import React, { useState } from 'react';

const PolioQuizModule2 = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let correct = 0;

    const form = e.target;
    if (form.q1.value === 'c') correct++; // 72%
    if (form.q2.value === 'd') correct++; // Stool sample
    if (form.q3.value === 'c') correct++; // Years after recovery

    setResult(`You got ${correct} out of 3 questions right.`);
  };

  return (
    <div className="polio-quiz">
      <h1 className='header'><strong>Quick Quiz: Symptoms & Diagnosis</strong></h1>
      <form onSubmit={handleSubmit}>
        <label><strong>1. What percentage of polio infections are asymptomatic?</strong></label><br />
        <input type="radio" name="q1" value="a" /> 30%<br />
        <input type="radio" name="q1" value="b" /> 50%<br />
        <input type="radio" name="q1" value="c" /> 72%<br />
        <input type="radio" name="q1" value="d" /> 90%<br /><br />

        <label><strong>2. Which method is most reliable for diagnosing polio?</strong></label><br />
        <input type="radio" name="q2" value="a" /> Eye examination<br />
        <input type="radio" name="q2" value="b" /> Chest X-ray<br />
        <input type="radio" name="q2" value="c" /> Blood pressure test<br />
        <input type="radio" name="q2" value="d" /> Stool sample analysis<br /><br />

        <label><strong>3. Post-Polio Syndrome (PPS) occurs...</strong></label><br />
        <input type="radio" name="q3" value="a" /> Immediately after infection<br />
        <input type="radio" name="q3" value="b" /> During the initial fever<br />
        <input type="radio" name="q3" value="c" /> Years after recovery<br />
        <input type="radio" name="q3" value="d" /> Only in children<br /><br />

        <button type="submit">Submit Answers</button>
      </form>
      {result && <div style={{ marginTop: '10px', color: 'green' }}><strong>{result}</strong></div>}
    </div>
  );
};

export default PolioQuizModule2;
