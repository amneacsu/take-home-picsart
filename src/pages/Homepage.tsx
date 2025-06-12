import React from 'react';
import { Link } from 'react-router';

export const Homepage = () => {
  return (
    <div>
      Homepage
      <Link to="/details/1">details</Link>
    </div>
  );
};
