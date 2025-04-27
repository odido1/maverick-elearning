import React, { useState } from 'react';

const HIVQuizModule2 = () => {
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
    <div className="hiv-quiz">
      <h1 className='header'><strong>Quick Quiz: HIV Transmission</strong></h1>
      <form onSubmit={handleSubmit}>
        <label><strong>1. Which body fluid can transmit HIV?</strong></label><br />
        <input type="radio" name="q1" value="a" /> Blood<br />
        <input type="radio" name="q1" value="b" /> Saliva<br />
        <input type="radio" name="q1" value="c" /> Sweat<br /><br />

        <label><strong>2. Which of the following is <em>not</em> a way HIV can be transmitted?</strong></label><br />
        <input type="radio" name="q2" value="a" /> Unprotected sex<br />
        <input type="radio" name="q2" value="b" /> Sharing needles<br />
        <input type="radio" name="q2" value="c" /> Hugging<br /><br />

        <label><strong>3. What is one method of reducing the risk of HIV transmission?</strong></label><br />
        <input type="radio" name="q3" value="a" /> Avoiding exercise<br />
        <input type="radio" name="q3" value="b" /> Using condoms<br />
        <input type="radio" name="q3" value="c" /> Taking painkillers<br /><br />

        <button type="submit">Submit Answers</button>
      </form>
      {result && <div style={{ marginTop: '10px', color: 'green' }}><strong>{result}</strong></div>}
    </div>
  );
};

export default HIVQuizModule2;
