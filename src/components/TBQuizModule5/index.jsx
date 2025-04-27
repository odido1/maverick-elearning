import React, { useState } from 'react';

const TBQuizModule5 = () => {
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
    <div className="tb-quiz">
      <h1 className='header'><strong>Quick Quiz: TB and Social Determinants of Health</strong></h1>
      <form onSubmit={handleSubmit}>
        <label><strong>1. Which of the following is most directly linked to increased TB transmission?</strong></label><br />
        <input type="radio" name="q1" value="a" /> High levels of exercise<br />
        <input type="radio" name="q1" value="b" /> Overcrowded living conditions<br />
        <input type="radio" name="q1" value="c" /> Eating fruits<br /><br />

        <label><strong>2. Why are people living with HIV more vulnerable to TB?</strong></label><br />
        <input type="radio" name="q2" value="a" /> They have weakened immune systems<br />
        <input type="radio" name="q2" value="b" /> They avoid social gatherings<br />
        <input type="radio" name="q2" value="c" /> They sleep longer<br /><br />

        <label><strong>3. What is one major barrier to TB treatment caused by stigma?</strong></label><br />
        <input type="radio" name="q3" value="a" /> More frequent doctor visits<br />
        <input type="radio" name="q3" value="b" /> Increased appetite<br />
        <input type="radio" name="q3" value="c" /> Delay in seeking medical care<br /><br />

        <button type="submit">Submit Answers</button>
      </form>
      {result && <div style={{ marginTop: '10px', color: 'green' }}><strong>{result}</strong></div>}
    </div>
  );
};

export default TBQuizModule5;
