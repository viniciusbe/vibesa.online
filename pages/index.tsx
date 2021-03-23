import React from 'react';

const IndexPage = (): JSX.Element => {
  return (
    <div className="text-xl text-center font-light">
      <h1 className="text-4xl text-white font-semibold mb-4">
        Hello, how are you doing?
      </h1>
      <p>My name is Vinícius Bernardes.</p>
      <p>
        I am a <strong className="font-semibold">Front-End</strong> developer !
      </p>
      <p>
        Here, you can know more <strong className="font-semibold">about</strong>{' '}
        me
      </p>
      <p>
        or see my <strong className="font-semibold">portfolio</strong>
      </p>
    </div>
  );
};
export default IndexPage;
