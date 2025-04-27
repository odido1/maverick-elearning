import React, { useState } from 'react';

const HIVQuizModule4 = () => {
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
    <div className="hiv-quiz-art">
      <h1 className='header'><strong>Quick Quiz: HIV Testing & Treatment</strong></h1>
      <form onSubmit={handleSubmit}>
        <label><strong>1. What is the purpose of an antigen/antibody HIV test?</strong></label><br />
        <input type="radio" name="q1" value="a" /> To detect flu viruses<br />
        <input type="radio" name="q1" value="b" /> To detect HIV antibodies and antigens<br />
        <input type="radio" name="q1" value="c" /> To count white blood cells<br /><br />

        <label><strong>2. Why is it important to take ART exactly as prescribed?</strong></label><br />
        <input type="radio" name="q2" value="a" /> To increase weight gain<br />
        <input type="radio" name="q2" value="b" /> To eliminate the need for exercise<br />
        <input type="radio" name="q2" value="c" /> To prevent drug resistance and keep HIV under control<br /><br />

        <label><strong>3. What does U=U mean?</strong></label><br />
        <input type="radio" name="q3" value="a" /> Undetectable = Untransmittable<br />
        <input type="radio" name="q3" value="b" /> Unstable = Unhealthy<br />
        <input type="radio" name="q3" value="c" /> Untreatable = Unavoidable<br /><br />

        <button type="submit">Submit Answers</button>
      </form>
      {result && <div style={{ marginTop: '10px', color: 'green' }}><strong>{result}</strong></div>}
    </div>
  );
};

export default HIVQuizModule4;
