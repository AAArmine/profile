import { useState } from 'react';
// const { useState } = 'react';

const Test = () => {
  const smth = 0;
  return (
    <div>
      <h1>testComponent</h1>
      {smth && <div>bbbb</div>}
    </div>
  );
};

export default Test;
