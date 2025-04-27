import React, { useState } from 'react';

const TBQuizModule2 = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let correct = 0;

    const form = e.target;
    if (form.q1.value === 'b') correct++;
    if (form.q2.value === 'c') correct++;
    if (form.q3.value === 'a') correct++;

    setResult(`You got ${correct} out of 3 questions right.`);
  };

  return (
    <div className="tb-quiz">
      <h1 className='header'><strong>Quick Quiz: TB Transmission</strong></h1>
      <form onSubmit={handleSubmit}>
        <label><strong>1. How is TB primarily transmitted?</strong></label><br />
        <input type="radio" name="q1" value="a" /> Through contaminated food or water<br />
        <input type="radio" name="q1" value="b" /> Through airborne droplets from someone with active TB<br />
        <input type="radio" name="q1" value="c" /> Through insect bites<br /><br />

        <label><strong>2. Which of the following activities does <em>not</em> spread TB?</strong></label><br />
        <input type="radio" name="q2" value="a" /> Talking in a poorly ventilated room<br />
        <input type="radio" name="q2" value="b" /> Coughing near someone<br />
        <input type="radio" name="q2" value="c" /> Sharing utensils<br /><br />

        <label><strong>3. What is latent TB?</strong></label><br />
        <input type="radio" name="q3" value="a" /> A non-contagious form of TB with no symptoms<br />
        <input type="radio" name="q3" value="b" /> A TB infection that always causes severe illness<br />
        <input type="radio" name="q3" value="c" /> A TB infection that affects animals only<br /><br />

        <button type="submit">Submit Answers</button>
      </form>
      {result && <div style={{ marginTop: '10px', color: 'green' }}><strong>{result}</strong></div>}
    </div>
  );
};

export default TBQuizModule2;
