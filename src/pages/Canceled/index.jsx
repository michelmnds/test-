import React from 'react';

export const Canceled = () => {
  return (
    <div style={styles.container}>
      <h1>Payment Canceled</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: 'white',
    fontSize: '2rem',
    fontFamily: '"Arial", sans-serif'
  }
};
