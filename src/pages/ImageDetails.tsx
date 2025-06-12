import React from 'react';
import { Link, useParams } from 'react-router';

export const ImageDetails = () => {
  const params = useParams();
  const id = parseInt(params.id ?? '', 10);
  if (Number.isNaN(id)) throw new Error(`Invalid image ID: ${params.id}.`);

  return (
    <div>
      ImageDetails {id}
      <Link to="/">Back</Link>
    </div>
  );
};
