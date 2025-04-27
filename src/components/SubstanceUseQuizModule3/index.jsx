import React, { useState } from 'react';

const SubstanceUseQuizModule3 = () => {
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
    <div className="substance-quiz">
      <h1 className='header'><strong>Quick Quiz: Prevention of Substance Abuse</strong></h1>
      <form onSubmit={handleSubmit}>
        <label><strong>1. What is one of the most effective settings for early substance abuse prevention?</strong></label><br />
        <input type="radio" name="q1" value="a" /> Hospitals<br />
        <input type="radio" name="q1" value="b" /> Schools<br />
        <input type="radio" name="q1" value="c" /> Courtrooms<br /><br />

        <label><strong>2. Which of the following is considered a protective factor against substance use?</strong></label><br />
        <input type="radio" name="q2" value="a" /> Peer pressure<br />
        <input type="radio" name="q2" value="b" /> Easy access to substances<br />
        <input type="radio" name="q2" value="c" /> Strong family support<br /><br />

        <label><strong>3. Why are mental health services important in preventing substance abuse?</strong></label><br />
        <input type="radio" name="q3" value="a" /> They help individuals find healthier coping methods<br />
        <input type="radio" name="q3" value="b" /> They replace school programs<br />
        <input type="radio" name="q3" value="c" /> They offer jobs<br /><br />

        <button type="submit">Submit Answers</button>
      </form>
      {result && <div style={{ marginTop: '10px', color: 'green' }}><strong>{result}</strong></div>}
    </div>
  );
};

export default SubstanceUseQuizModule3;
