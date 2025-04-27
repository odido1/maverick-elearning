import React, { useState } from 'react';

const MalariaQuizModule4 = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let correct = 0;

    const form = e.target;
    if (form.q1.value === 'b') correct++;
    if (form.q2.value === 'b') correct++;
    if (form.q3.value === 'b') correct++;

    setResult(`You got ${correct} out of 3 questions right.`);
  };

  return (
    <div className="malaria-quiz">
      <h3>Quick Quiz: Malaria Testing and Treatment</h3>
      <form onSubmit={handleSubmit}>
        <label><strong>1. What is the first-line treatment for uncomplicated Plasmodium falciparum malaria?</strong></label><br />
        <input type="radio" name="q1" value="a" /> Chloroquine<br />
        <input type="radio" name="q1" value="b" /> Artemisinin-based Combination Therapy (ACT)<br />
        <input type="radio" name="q1" value="c" /> Quinine<br /><br />

        <label><strong>2. Which method allows you to identify the species of malaria parasite?</strong></label><br />
        <input type="radio" name="q2" value="a" /> Rapid Diagnostic Test<br />
        <input type="radio" name="q2" value="b" /> Microscopy<br />
        <input type="radio" name="q2" value="c" /> X-ray<br /><br />

        <label><strong>3. What is used to prevent relapse in Plasmodium vivax malaria?</strong></label><br />
        <input type="radio" name="q3" value="a" /> Artesunate<br />
        <input type="radio" name="q3" value="b" /> Primaquine<br />
        <input type="radio" name="q3" value="c" /> Paracetamol<br /><br />

        <button type="submit">Submit Answers</button>
      </form>
      {result && <div style={{ marginTop: '10px', color: 'green' }}><strong>{result}</strong></div>}
    </div>
  );
};

export default MalariaQuizModule4;
