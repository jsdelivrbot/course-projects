// contains logic to render a single label and text input
import React from 'react';

// props from redux form
// export default (props) => {
// use destructuring instead to get just the input piece
// meta comes from redux form - contains error info
// meta: { error, touched } .... this is nested destructuring
export default ({ input, label, meta: { error, touched } }) => {

  return (
      <div>
        <label>{label}</label>
        <input {...input} style={{ marginBottom: '5px' }}/>
        <div className="red-text" style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
  );
};



// using <input {...input} />
// is the same as
// <input onBlur={input.onBlue} onChange={input.onChange} etc ...
