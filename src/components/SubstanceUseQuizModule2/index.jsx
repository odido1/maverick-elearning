import React, { useState } from 'react';

const SubstanceUseQuizModule2 = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let correct = 0;

    const form = e.target;
    if (form.q1.value === 'c') correct++;
    if (form.q2.value === 'a') correct++;
    if (form.q3.value === 'b') correct++;

    setResult(`You got ${correct} out of 3 questions right.`);
  };

  return (
    <div className="substance-quiz">
      <h1 className='header'><strong>Quick Quiz: Biological and Social Factors</strong></h1>
      <form onSubmit={handleSubmit}>
        <label><strong>1. Which of the following is considered a biological factor in substance use disorders?</strong></label><br />
        <input type="radio" name="q1" value="a" /> Peer pressure<br />
        <input type="radio" name="q1" value="b" /> Low income<br />
        <input type="radio" name="q1" value="c" /> Genetic predisposition<br /><br />

        <label><strong>2. What part of the brain is most impacted by substance use and controls pleasure and reward?</strong></label><br />
        <input type="radio" name="q2" value="a" /> The brain’s reward system<br />
        <input type="radio" name="q2" value="b" /> The spinal cord<br />
        <input type="radio" name="q2" value="c" /> The lungs<br /><br />

        <label><strong>3. Which of the following is a social factor that can increase risk of substance use?</strong></label><br />
        <input type="radio" name="q3" value="a" /> Height<br />
        <input type="radio" name="q3" value="b" /> Exposure to trauma<br />
        <input type="radio" name="q3" value="c" /> Having a pet<br /><br />

        <button type="submit">Submit Answers</button>
      </form>
      {result && <div style={{ marginTop: '10px', color: 'green' }}><strong>{result}</strong></div>}
    </div>
  );
};

export default SubstanceUseQuizModule2;
