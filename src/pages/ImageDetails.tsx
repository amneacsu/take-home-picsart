import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Navigation } from '../elements/Navigation.ts';
import { PageTitle } from '../elements/PageTitle.ts';

export const ImageDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = parseInt(params.id ?? '', 10);
  if (Number.isNaN(id)) throw new Error(`Invalid image ID: ${params.id}.`);

  return (
    <div>
      <Navigation>
        <button type="button" onClick={() => navigate(-1)}>Back</button>
      </Navigation>

      <PageTitle>
        ImageDetails {id}
      </PageTitle>
    </div>
  );
};
