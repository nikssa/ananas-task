import React from 'react';

const Loader = ({ showLoader }: { showLoader: boolean }) => {
  return (
    <div className={`loader ${showLoader ? '' : 'hide'}`}>
      <div className='overlay'></div>
      <h3 className='text'>...loading data...</h3>
    </div>
  );
};

export default Loader;
